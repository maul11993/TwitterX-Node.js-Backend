const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config");

const restricted = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token, JWT_SECRET, (err, decodedJWT) => {
        if (!err) {
          req.decodedJWT = decodedJWT;
          next();
        } else {
          next(err);
        }
      });
    } else {
      res.status(400).json({ message: `Invalid Token...` });
    }
  } catch (error) {
    next(error);
  }
  next();
};

const generateToken = (user) => {
  const payload = {
    id: user.id,
    role_id: user.role_id,
    name: user.name,
  };
  const options = {
    expiresIn: "3h",
  };
  const token = jwt.sign(payload, JWT_SECRET, options);
  return token;
};

module.exports = { restricted, generateToken };
