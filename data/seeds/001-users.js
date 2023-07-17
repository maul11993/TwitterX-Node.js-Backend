/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Users").truncate();
  await knex("Users").insert([
    {
      id: 1,
      nameSurname: "Batuhan",
      username: "BatuWiT",
      email: "batuhan@workintech.com",
      password: "batu-workintech",
      role_id: "admin",
    },
    {
      id: 2,
      nameSurname: "Emre",
      username: "EmreWiT",
      email: "emre@workintech.com",
      password: "emre-workintech",
      role_id: "user",
    },
    {
      id: 3,
      nameSurname: "Veysel",
      username: "VeyselWiT",
      email: "veysel@workintech.com",
      password: "veysel-workintech",
      role_id: "user",
    },
    {
      id: 4,
      nameSurname: "Erhan",
      username: "ErhanWiT",
      email: "erhan@workintech.com",
      password: "erhan-workintech",
      role_id: "user",
    },
    {
      id: 5,
      nameSurname: "Dogancan",
      username: "DogancanWiT",
      email: "dogancan@workintech.com",
      password: "dogancan-workintech",
      role_id: "user",
    },
  ]);
};
