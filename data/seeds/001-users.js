/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Users").truncate();
  await knex("Users").insert([
    {
      user_key: 1,
      name: "Batuhan",
      username: "BatuWiT",
      email: "batuhan@workintech.com",
      password: "batu-workintech",
      role_id: "admin",
    },
    {
      user_key: 2,
      name: "Emre",
      username: "EmreWiT",
      email: "emre@workintech.com",
      password: "emre-workintech",
      role_id: "user",
    },
    {
      user_key: 3,
      name: "Veysel",
      username: "VeyselWiT",
      email: "veysel@workintech.com",
      password: "veysel-workintech",
      role_id: "user",
    },
    {
      user_key: 4,
      name: "Erhan",
      username: "ErhanWiT",
      email: "erhan@workintech.com",
      password: "erhan-workintech",
      role_id: "user",
    },
    {
      user_key: 5,
      name: "Dogancan",
      username: "DogancanWiT",
      email: "dogancan@workintech.com",
      password: "dogancan-workintech",
      role_id: "user",
    },
  ]);
};
