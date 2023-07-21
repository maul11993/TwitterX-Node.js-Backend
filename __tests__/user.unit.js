const userModel = require("../api/users/users-model");
const db = require("../data/db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run;
});

test("Sanity check", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});
