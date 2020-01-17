const { Router } = require("express");

const User = require("./model");

const router = new Router();

router.post("/post", async (req, res, next) => {
  try {
  } catch (error) {
    res.send(400).send({ error: "Unknown error, please check your inputs" });
  }
});

module.exports=router