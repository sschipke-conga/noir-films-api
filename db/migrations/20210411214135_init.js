
exports.up = function async (knex) {
  console.log("in migrations!!")
  return Promise.all([
    knex.schema.createTable("movie", function (table) {
      table.integer("id").primary().unsigned().unique();
      table.string("title").notNullable();
      table.text("overview").notNullable();
      table.string("video_key", 11);
      table.string("poster_path");
      table.string("backdrop_path");
      table.string("release_date", 10);
      table.integer("runtime").unsigned();
      table.string("watch_data");
      table.string("triggers").defaultTo(null);
      table.boolean("seen").defaultTo(false);
      table.string("chosen_by").defaultTo(null);
      table.string("date_watched", 8);
    }),

    knex.schema.createTable("genre", function (table) {
      table.increments("id").primary();
      table.integer("movie_id").unsigned();
      table.foreign("movie_id").references("movie.id");
      table.integer("genre_id").unsigned();
    })

  ])
  .catch(err => console.error("ERR: ", err))
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable("genre"),
    knex.schema.dropTable("movie")
  ]);
};
