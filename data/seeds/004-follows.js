/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Followers").truncate();
  await knex("Followers").insert([
    {
      user_key: 1,
      followed_user: 2,
    },
    {
      user_key: 1,
      followed_user: 3,
    },
    {
      user_key: 1,
      followed_user: 4,
    },
    {
      user_key: 1,
      followed_user: 5,
    },
    {
      user_key: 2,
      followed_user: 1,
    },
    {
      user_key: 2,
      followed_user: 3,
    },
    {
      user_key: 3,
      followed_user: 4,
    },
    {
      user_key: 3,
      followed_user: 5,
    },
    {
      user_key: 4,
      followed_user: 2,
    },
    {
      user_key: 4,
      followed_user: 3,
    },
    {
      user_key: 5,
      followed_user: 5,
    },
    {
      user_key: 5,
      followed_user: 1,
    },
  ]);
};
