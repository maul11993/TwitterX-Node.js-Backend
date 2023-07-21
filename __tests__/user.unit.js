const userModel = require("../api/users/users-model");
const db = require("../data/db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

test("[0] - Sanity check", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});

test("[1] - Able to get all users", async () => {
  const users = await userModel.getAll();
  expect(users).toHaveLength(5);
});

test("[2] - Able to get users by ID ", async () => {
  const usersId = await userModel.getById(1);
  expect(usersId).toHaveProperty("name", "Batuhan");
  expect(usersId).not.toHaveProperty("password");
});

test("[3] - Able to get users by Email ", async () => {
  const usersEmail = await userModel.getByEmail("batuhan@workintech.com");
  expect(usersEmail).toHaveProperty("name", "Batuhan");
});

describe("RegisterUsers", () => {
  test("[4] - Can register new user", async () => {
    const user = {
      name: "TryingUser",
      username: "TryingUserWiT",
      email: "tryinguser@workintech.com",
      password: "123456",
      role_id: "user",
    };

    await userModel.addUser(user);
    let getUserById = await userModel.getById(6);
    expect(getUserById.name).toStrictEqual("TryingUser");
  });

  test("[5] - Can register new user as default user", async () => {
    const user = {
      name: "TryingUser2",
      username: "TryingUserWiT2",
      email: "tryinguser2@workintech.com",
      password: "123456",
    };

    await userModel.addUser(user);
    const addedUserById = await userModel.getById(6);
    expect(addedUserById.name).toStrictEqual("TryingUser");
  });
});

test("[6] - Can update user", async () => {
  const randomUpdateUser = {
    name: "UpdatingUser",
    username: "UpdatingUserWiT",
    email: "updatinguser@workintech.com",
    password: "123456",
    role_id: "user",
  };
  const updatedUser = await userModel.updateUser(1, randomUpdateUser);
  expect(updatedUser).toBe(1);
});

test("[7] - Can remove user", async () => {
  const randomDeleteUser = {
    user_key: 8,
    name: "DeleteUser",
    username: "DeletingUserWiT",
    email: "deletinguser@workintech.com",
    password: "123456",
  };
  await userModel.addUser(randomDeleteUser);
  await userModel.removeUser(randomDeleteUser.user_key);
  let checkIfDelete = await userModel.getById(8);
  expect(checkIfDelete).toBe(undefined);
});
