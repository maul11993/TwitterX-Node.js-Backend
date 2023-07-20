/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Followers", (tbl) => {
    tbl.increments("follows_id");
    tbl.integer("followed_user");
    tbl
      .integer("user_key")
      .references("user_key")
      .inTable("Users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Followers");
};
