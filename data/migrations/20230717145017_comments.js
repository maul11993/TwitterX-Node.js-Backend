/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Comments", (tbl) => {
    tbl.increments("comment_id");
    tbl.string("comment_content").notNullable();
    tbl.integer("comment_likes");
    tbl.integer("comment_reposts");
    tbl
      .integer("user_key")
      .references("user_key")
      .inTable("Users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("tweet_id")
      .references("tweet_id")
      .inTable("Tweets")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("comments");
};
