const { Router } = require("express");
const Answer = require("sequelize");
const User = require("../User/model");

const router = new Router();

router.post("/createAnswer", async (req, res, next) => {
  try {
    const { name, kwh, meat, water, gasoline } = req.body;

    const createUser = await User.create({ name: name });

    const currentUserId = createUser.dataValues.id;

    const createAnswer = await Answer.create({
      userId: currentUserId,
      kwh: kwh,
      meat: meat,
      water: water,
      gasoline: gasoline
    });
    res.send(createUser)
  } catch (error) {
    res.status(400).send({ error: "unkown error, check your input" });
  }
});

module.exports = router;
