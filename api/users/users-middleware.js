const userModel = require("./users-model");

const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const payloadCheck = (req, res, next) => {
  const { name, username, email, password } = req.body;
  if (!name || !name.trim() || name.length <= 2) {
    next({ status: 400, message: "Name alanı 2 karakterden fazla olmalı" });
  } else if (!username || !username.trim() || username.length <= 2) {
    next({ status: 400, message: "Username alanı 2 karakterden fazla olmalı" });
  } else if (!password || !password.trim() || password.length <= 5) {
    next({ status: 400, message: "Password alanı 5 karakterden fazla olmalı" });
  } else if (!email || !isValidEmail(email)) {
    next({ status: 400, message: "Geçerli bir Email giriniz" });
  } else {
    next();
  }
};

module.exports = { payloadCheck, isValidEmail };
