const express = require("express");
const server = express();
require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const { restricted } = require("./auth/auth-middleware");

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan("dev"));

const AuthenticationRouter = require("./auth/auth-router");
const TweetsRouter = require("./tweets/tweets-router");
const UsersRouter = require("./users/users-router");
const CommentsRouter = require("./comments/comments-router");

server.use("/api/auth", AuthenticationRouter);
server.use("/api/tweets", TweetsRouter);
server.use("/api/users", UsersRouter);
server.use("/api/comments", CommentsRouter);

server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server Error Encountered..." });
});

module.exports = server;
