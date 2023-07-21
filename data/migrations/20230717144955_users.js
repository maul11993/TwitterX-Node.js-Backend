/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Users", (tbl) => {
    tbl.increments("user_key");
    tbl.string("name", 50).notNullable();
    tbl.string("username", 50).notNullable().unique();
    tbl.string("email", 50).notNullable().unique();
    tbl.string("password", 50).notNullable();
    tbl.string("role_id", 50).notNullable().defaultTo("user");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Users");
};
