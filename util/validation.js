const requiredFields = [
  "id",
  "overview",
  "title",
  "release_date",
  "backdrop_path",
  "poster_path",
  "runtime"
];

export const validateMovieData = (movie) => {
  let errors = {};
  for (let requriedField of requiredFields) {
    if (!movie[requriedField]) {
      errors.field = `Missing field: '${requriedField}'.`;
    }
  }

  if (
    !movie["backdrop_path"].includes(".jpg") ||
    !movie["backdrop_path"].includes("/")
  ) {
    errors.backdrop = "Invalid backrop path.";
  }

  if (
    !movie["poster_path"].includes(".jpg") ||
    !movie["poster_path"].includes("/")
  ) {
    errors.poster = "Invalid poster path.";
  }

  if (typeof movie.id != "number" || movie.id < 482 || movie.id > 8237650) {
    errors.id = "Invalid movie id.";
  }

  if (movie["seen"]) {
    if (!movie["chosen_by"]) {
      errors.chosen_by = "Seen movies must have a chooser.";
    }
    if (!movie["date_watched"]) {
      errors.watched = "Seen movies must have a date watched.";
    }
    if (
      !/^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{2})$/g.test(movie["date_watched"])
    ) {
      errors.watched = "Date format for discussion date is: mm/dd/yy";
    }
  }
  return errors;
};

export const SESSIONS = new Set();

export const validateAuthorization = (auth) =>
  auth === process.env.PASS_CODE || SESSIONS.has(auth);
