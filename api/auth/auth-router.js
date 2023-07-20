const router = require("express").Router();
const userModel = require("../users/users-model");
const bcrypt = require("bcrypt");
const { HASH_ROUND } = require("../../config");
const {
  generateToken,
  isEmailAvailable,
  isUsernameAvailable,
} = require("./auth-middleware");
const { payloadCheck } = require("../users/users-middleware");

router.post(
  "/register",
  payloadCheck,
  isEmailAvailable,
  isUsernameAvailable,
  async (req, res, next) => {
    try {
      const payload = req.body;
      payload.password = bcrypt.hashSync(payload.password, Number(HASH_ROUND));
      console.log(payload.password);
      const newUser = await userModel.addUser(payload);
      if (newUser) {
        res
          .status(201)
          .json({ message: `Yeni kullanıcı başarıyla oluşturuldu...` });
      } else {
        res.status(400).json({
          message: `Kullanıcı oluşturulurken bir hata meydana geldi!`,
        });
      }
    } catch (error) {
      next(error);
    }
  }
);

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const registeredUser = await userModel.getByEmail(email);

    if (
      registeredUser &&
      bcrypt.compareSync(password, registeredUser.password)
    ) {
      const token = await generateToken(registeredUser);
      res.json({ message: `Hoşgeldin ${registeredUser.name}`, token });
    } else {
      res.status(401).json({ message: `Hatalı giriş` });
    }
  } catch (error) {
    next(error);
  }
});

router.get("/logout", (req, res, next) => {
  res.json;
});

module.exports = router;
