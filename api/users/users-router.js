const router = require("express").Router();
const userModel = require("./users-model");

router.get("/", async (req, res, next) => {
  try {
    const users = await userModel.getAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userModel.getById(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const check = await userModel.removeUser(id);
    if (check) {
      res.json({ message: `${id} id'li kullanıcı silindi.` });
    } else {
      res
        .status(400)
        .json({ message: `${id} id'li kullanıcı silinirken bir hata oluştu.` });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const check = await userModel.updateUser(id, req.body);
    if (check) {
      res.json({ message: `${id} id'li kullanici güncellendi.` });
    } else {
      res.status(400).json({
        message: `${id} id'li kullanici güncellenirken bir hata oluştu.`,
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
