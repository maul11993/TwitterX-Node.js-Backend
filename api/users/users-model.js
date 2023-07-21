const db = require("../../data/db-config");

const getAllByAdminRights = () => {
  return db("Users");
};

const getAll = () => {
  return db("Users").select("user_key", "name", "username", "email");
};

const getById = (user_key) => {
  return db("Users")
    .where("user_key", user_key)
    .select("user_key", "name", "username", "email")
    .first();
};

const getByEmail = (email) => {
  return db("Users")
    .where("email", email)
    .select("email", "password", "name", "username", "role_id", "user_key")
    .first();
};

const addUser = async (newUser) => {
  return await db("Users").insert(newUser);
};

const updateUser = async (updatedKey, payload) => {
  return await db("Users").where("user_key", updatedKey).update(payload);
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
