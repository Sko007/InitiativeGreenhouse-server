const { Router } = require("express");
const Answer = require("../Answers/model");

const router = new Router();

router.get("/calculation/:userId", async (req, res, next) => {
  try {
    const getAnswers = await Answer.findAll();
    const formatAnswers = getAnswers.map(answer => answer.dataValues);

    //Get answers based on UserId
    const filterAnswersByUserId = formatAnswers.filter(
      element => element.userId == req.params.userId
    );

    //extracting Values of Answers
    const objOfKwh = filterAnswersByUserId[0];
    const valueOfKwh = objOfAnswer.kwh;
    const valueOfMeat = objOfAnswer.meat;
    const valueOfWater = objOfAnswer.water;
    const valueOfGasoline = objOfAnswer.gasoline;

    // 1 kwh cost 500 CO2
    const kwhFactor = 500;
    //average Meat beef 13300/ pork 3200 / chicken 6900
    const averageMeat = 7800;
    // average water consumption /2.98 gramm per liter tab water and bottled water 110 g
    const waterFactor = 70;
    //1 L cost 2,29 kg
    const gasoline = 2229;

    const calculateKwhEmission = valueOfKwh * kwhFactor;
    const calculateKwhEmission = valueOfMeat * averageMeat;
    const calcualteWaterEmission = valueOfWater * waterFactor;
    const calculateGasolineEmission = valueOfGasoline * gasoline;

    const totalEmission =
      calculateKwhEmission +
      calculateKwhEmission +
      calcualteWaterEmission +
      calculateGasolineEmission;

    //Tree reduce 2 kg  Co2 each month
    const treesNeeded = Math.floor(totalEmission / 1000 / 2);

    const treesNeededObj = {
        treesNeeded
    }
    const treesNeededString = JSON.stringify(treesNeededObj)

    res.send(treesNeededString)
  }catch(error){
    res.status(400).send({error: 'unkown error please check your input'})
    


  }
});
