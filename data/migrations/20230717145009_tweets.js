/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Tweets", (tbl) => {
    tbl.increments("tweet_id"),
      tbl.string("tweet_content"),
      tbl.integer("tweet_likes"),
      tbl.integer("tweet_reposts"),
      tbl
        .integer("user_key")
        .references("user_key")
        .inTable("Users")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    tbl.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Tweets");
};
