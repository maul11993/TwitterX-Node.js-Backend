const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config");
const userModel = require("../users/users-model");

const restricted = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token, JWT_SECRET, (err, decodedJWT) => {
        if (!err) {
          req.decodedJWT = decodedJWT;
          next();
        } else {
          next({ status: 400, message: "Invalid Token..." });
        }
      });
    } else {
      res.status(400).json({ message: `Token not found...` });
    }
  } catch (error) {
    next(error);
  }
};

const generateToken = async (user) => {
  const payload = {
    user_key: user.user_key,
    role_id: user.role_id,
    name: user.name,
  };
  const options = {
    expiresIn: "3h",
  };
  const token = jwt.sign(payload, JWT_SECRET, options);
  return token;
};

const checkRole = (role) => (req, res, next) => {
  if (req.decodedJWT.role_id == role) {
    next();
  } else {
    next({ status: 403, message: "Not Authorized" });
  }
};

const isEmailAvailable = async (req, res, next) => {
  const user = await userModel.getByEmail(req.body.email);
  if (!user) {
    next();
  } else {
    next({ status: 400, message: "Email is already in use." });
  }
};

const isUsernameAvailable = async (req, res, next) => {
  const username = await userModel.getByEmail(req.body.username);
  if (!username) {
    next();
  } else {
    next({ status: 400, message: "That username is already taken" });
  }
};

const isIdExist = async (req, res, next) => {
  const id = req.params.id;
  const idFind = await userModel.getById(id);
  if (idFind) {
    next();
  } else {
    next({ status: 403, message: "Bu id'ye sahip kullanıcı bulunamadı." });
  }
};

module.exports = {
  restricted,
  generateToken,
  checkRole,
  isEmailAvailable,
  isUsernameAvailable,
  isIdExist,
};
