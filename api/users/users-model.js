const db = require("../../data/db-config");

const getAllByAdminRights = () => {
  return db("Users");
};

const getAll = () => {
  return db("Users").select("user_key", "name", "username", "email");
};

const getById = async (user_key) => {
  return await db("Users")
    .where("user_key", user_key)
    .select("user_key", "name", "username", "email");
};

const getByEmail = async (email) => {
  return await db("Users")
    .where("email", email)
    .select("email", "password", "name", "username")
    .first();
};

const addUser = async (newUser) => {
  return await db("Users").insert(newUser);
};

const updateUser = async (updatedKey, updatedUserId) => {
  return await db("Users").where("user_key", updatedKey).update(updatedUserId);
};

const removeUser = async (removedUserId) => {
  return await db("Users").where("user_key", removedUserId).delete();
};

module.exports = {
  getAllByAdminRights,
  getAll,
  getById,
  getByEmail,
  addUser,
  updateUser,
  removeUser,
};
