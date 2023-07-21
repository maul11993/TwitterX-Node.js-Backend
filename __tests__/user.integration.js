const server = require("../api/server");
const request = require("supertest");
const db = require("../data/db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

test("[0] - Sanity check", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});

const addNewUser = {
  name: "IntegrationUser",
  username: "IntegrationUserWiT",
  email: "integrationuser@workintech.com",
  password: "123456",
  role_id: "user",
};

describe("Authentication Check", () => {
  describe("Register Check", () => {
    test("Create new user", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send(addNewUser);
      expect(res.status).toBe(201);
    });
  });
  test("Login is working", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ email: "batuhan@workintech.com", password: "123456" });
    expect(res.body.token).toBeDefined();
  });
});
