const { Router } = require("express");
const Answer = require("../Answers/model");

const router = new Router();

router.get("/averageKwh", async (req, res, next) => {
  try {
    const getAnswers = await Answer.findAll();
    const getAllKwhValues = getAnswers.map(ele => ele.kwh);
    const reduceKwhToOneValue = getAllKwhValues.reduce((acc, val) => {
      return acc + val;
    }, 0);

    const lengthOfKwhArray = getAllKwhValues.length;
    const kwhAverage = reduceKwhToOneValue / lengthOfKwhArray;
    const stringKwhAverage = JSON.stringify(kwhAverage);

    res.send(stringKwhAverage);
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

router.get("/averageMeat", async (req, res, next) => {
  try {
    const getAnswers = await Answer.findAll();
    const getAllMeatValues = getAnswers.map(ele => ele.meat);
    const reduceMeatToOneValue = getAllMeatValues.reduce((acc, val) => {
      return acc + val;
    }, 0);

    const lengthOfMeatArray = getAllMeatValues.length;
    const meatAverage = reduceMeatToOneValue / lengthOfMeatArray;
    const stringMeatAverage = JSON.stringify(meatAverage);

    res.send(stringMeatAverage);
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

router.get("/averageWater", async (req, res, next) => {
  try {
    const getAnswers = await Answer.findAll();
    const getAllWaterValues = getAnswers.map(ele => ele.water);
    const reduceWaterToOneValue = getAllWaterValues.reduce((acc, val) => {
      return acc + val;
    }, 0);

    const lengthOftheWaterArray = getAllWaterValues.length;
    const waterAverage = reduceWaterToOneValue / lengthOftheWaterArray;
    const stringWaterAverage = JSON.stringify(waterAverage);

    res.send(stringWaterAverage);
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

router.get("/averageGasoline", async (req, res, next) => {
  try {
    const getAnswers = await Answer.findAll();
    const getAllGasolineValues = getAnswers.map(ele => ele.answer3);
    const reduceGasolineToOneValue = getAllGasolineValues.reduce((acc, val) => {
      return acc + val;
    }, 0);

    const lengthOftheGasolineArray = getAllGasolineValues.length;
    const gasolineAverage = reduceGasolineToOneValue / lengthOftheGasolineArray;
    const stringGasolineAverage = JSON.stringify(gasolineAverage);

    res.send(stringGasolineAverage);
  } catch (error) {
    res.status((400).send({ error: error }));
  }
});

module.exports = router;
