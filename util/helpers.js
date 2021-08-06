export const mapGenresToMovies = (movies, dbGenres) => {
  dbGenres.forEach(genre => {
    const matchingMovie = movies.find(movie => movie.id === genre.movie_id);
    if (!matchingMovie["genres"]) {
      matchingMovie.genres = [genre.genre_id]
    } else {
      matchingMovie.genres.push(genre.genre_id)
    };
  });
  return movies;
}

const removeArticles = (title) => {
  let words = title.split(" ");
  if (words.length <= 1) return title
  if (words[0] === 'a' || words[0] === 'an' || words[0] === 'the') {
    return words.splice(1).join(" ")
  }
  return title;
}

export const aplhabetizeUneenMovies = (unseenMovies) => {
  return unseenMovies.sort((movieA, movieB) => {
    let titleA = removeArticles(movieA.title.toLowerCase());
    let titleB = removeArticles(movieB.title.toLowerCase());
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0
  })
}

  export const sortPreviouslyWatched = (previousMovies) => {
  return previousMovies.sort((a, b) => {
    return Date.parse(b.date_watched) - Date.parse(a.date_watched)
  })
}

export const processAllMovies = (allMovies) => {
  const watchList = allMovies.filter(movie => !movie.seen);
  const previouslyWatched = allMovies.filter(movie => movie.seen);
  return { watchList: aplhabetizeUneenMovies(watchList), previouslyWatched: sortPreviouslyWatched(previouslyWatched)}
}