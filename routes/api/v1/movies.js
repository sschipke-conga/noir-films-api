import { database } from "../../../app";
import { aplhabetizeUneenMovies, sortPreviouslyWatched } from '../../../util/helpers';
import { validateMovieData } from '../../../util/validation';
import { timeString } from "../../../logging";

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let watchList = await fetchWatchlist();
    let previouslyWatched = await fetchPreviouslyWatched();
    console.log("Successfully sent GET request for IP: ", req.ips, "URL: ", req.originalUrl, " at ", timeString);
    return res.status(200).json({watchList, previouslyWatched});
  }
  catch(err) {
    console.error("Error sending GET Movies Response: ", {err}, "for", req.ip, " at ", timeString);
    return res.status(500).json({msg: "Error sending response", err});
  }
})

router.put("/:id", async (request, res) => {
  console.log("Processing update request from IP: ", request.ip, " URL ", request.originalUrl, " at ", timeString);
  const { id } = request.params;
  const auth = request.headers.authentication
  const { movie } = request.body;
  console.log("Attempting to update movie with id: ", movie['id']);
  if (auth != 'Abolition2020!') {
    console.error("Incorrect auth!!", auth, " for ", request.ip, " at ", timeString);
    return res.status(401).json({auth: "Not authorized."});
  }
  let errors = validateMovieData(movie);
  if(Object.keys(errors).length > 0) {
    console.error(`Error updating movie: `, movie, {errors});
    return res.status(422).json( errors );
  }
  const dbMovie = await fetchMovieByIdAndTitle(movie.id, movie.title);
  if(!dbMovie.length) {
    console.error(`Unable to find mvie with id: ${movie['id']}`, dbMovie)
    return res.status(404).json({error: `No existing movie with id of ${id}`});
  } else {
    updateGenresByMovie(dbMovie[0].id, movie.genres)
    .then(() => {
      delete movie.genres;
      return database('movie')
      .where({id: movie.id})
      .update(movie)
    })
    .then(async () => {
      const newMovie = await fetchMovieByIdAndTitle(movie.id, movie.title);
      console.log("Successfully updated movie: ", newMovie, "DATE: ", timeString);
      return res.status(200).json(newMovie[0]);
    })
  }
})

router.post("/", async (request, res) => {
  console.log("Processing post request from IP: ", request.ips, " URL ", request.originalUrl, " at ", timeString);
  const auth = request.headers.authentication
  const { movie } = request.body;
  console.log("Attempting to add movie with id: ", movie['id']);
  if (auth != 'Abolition2020!') {
    console.error("Incorrect auth!!", auth, " for ", request.ip, " at ", timeString);
    return res.status(401).json({password: "Not authorized."});
  }
  let errors = validateMovieData(movie);
  if(Object.keys(errors).length > 0) {
    console.error(`Error adding movie: `, movie, {errors});
    return res.status(422).json( errors );
  }

  const dbMovie = await fetchMovieByIdAndTitle(movie.id, movie.title);
  if(dbMovie.length) {
    console.error(`Movie with id: ${movie['id']} already exists.`)
    errors.id = `Movie with id: ${movie['id']} already exists.`
    return res.status(409).json( errors );
  }

  const genres = movie.genres;

  delete movie.genres;
  try {
    return database('movie')
    .insert(movie)
      .then(() => {
        addGenres(movie.id, genres);
      })
      .catch(err => {
        console.error("Internal error: " , err);
        return res.status(500).json({msg: "Error adding movie", err});
      })
      .then(async () => {
        const newMovie = await fetchMovieByIdAndTitle(movie.id, movie.title);
        console.log("Successfully added movie: ", newMovie, "DATE: ", timeString);
        return res.status(200).json(newMovie[0]);
      })
      .catch(err => {
        console.error("Error adding movie with id: ", movie.id, " at ", timeString);
        return res.status(500).json({msg: "Error adding movie", err});
      })
    } catch (err) {
      console.error("Error adding movie. Internal error: ", err);
      return res.status(500).json({msg: "Could not add movie."});
    }
})

async function updateGenresByMovie(movieId, genres) {
  return database('genre')
    .where({
      'movie_id': movieId
    })
    .del()
    .then(() => {
      console.log("Successfully deleted movie genres for movie with id: ", {movieId})
      let genrePromises=[];
      genres.forEach(genre => {
        genrePromises.push(insertGenre(database, genre, movieId));
      });
      return Promise.all(genrePromises);
    })
  }

  async function addGenres(movieId, genres) {
      let genrePromises=[];
      genres.forEach(genre => {
        genrePromises.push(insertGenre(database, genre, movieId));
      });
      return Promise.all(genrePromises);
    }


const insertGenre = (database, genre, movieId) => {
  return database('genre')
    .insert({
      genre_id: genre,
      movie_id: movieId
    })
}

async function fetchMovieByIdAndTitle(movieId, title) {
  try {
    return database("movie")
    .where({"movie.id": movieId})
    .innerJoin("genre", "movie.id", "genre.movie_id")
    .select([
      "movie.id",
      "movie.title",
      "movie.overview",
      "movie.video_key",
      "movie.poster_path",
      "movie.backdrop_path",
      "movie.release_date",
      "movie.runtime",
      "movie.triggers",
      "movie.watch_data",
      "movie.seen",
      "movie.chosen_by",
      "movie.date_watched",
      database.raw("ARRAY_AGG(genre.genre_id) as genres"),
    ])
    .groupBy("movie.id", "genre.movie_id")
  } catch (err) {
    throw new Error(err);
  }
}



async function fetchWatchlist() {
  return database("movie")
    .where({seen: false})
    .innerJoin("genre", "movie.id", "genre.movie_id")
    .select([
      "movie.id",
      "movie.title",
      "movie.overview",
      "movie.video_key",
      "movie.poster_path",
      "movie.backdrop_path",
      "movie.release_date",
      "movie.runtime",
      "movie.triggers",
      "movie.watch_data",
      "movie.seen",
      "movie.chosen_by",
      "movie.date_watched",
      database.raw("ARRAY_AGG(genre.genre_id) as genres"),
    ])
    .groupBy("movie.id", "genre.movie_id")
    .then(watchList => aplhabetizeUneenMovies(watchList))
  .catch(err => {
    console.error("Error fetching all movies: ", err)
    throw new Error("Error fetching all movies: ", {err})
  })
}

async function fetchPreviouslyWatched() {
  return database("movie")
    .where({ seen: true })
    .innerJoin("genre", "movie.id", "genre.movie_id")
    .select([
      "movie.id",
      "movie.title",
      "movie.overview",
      "movie.video_key",
      "movie.poster_path",
      "movie.backdrop_path",
      "movie.release_date",
      "movie.runtime",
      "movie.triggers",
      "movie.watch_data",
      "movie.seen",
      "movie.chosen_by",
      "movie.date_watched",
      database.raw("ARRAY_AGG(genre.genre_id) as genres"),
    ])
    .groupBy("movie.id", "genre.movie_id")
    .then(previouslyWatched => sortPreviouslyWatched(previouslyWatched))
    .catch(err => {
      console.error("Error fetching all movies: ", err)
      throw new Error("Error fetching all movies: ", { err })
    })
}



export default router;
