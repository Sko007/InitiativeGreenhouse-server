const { Router } = require("express");

const TreeSpaces = require("./model");
const router = new Router();

router.post("/createTreeSpace", async (req, res, next) => {
  try {
    const createdTreeSpace = await TreeSpaces.create(req.body);

    res.send(createdTreeSpace);
  } catch (error) {
    res.status(400).send({ error: "unkown error please check your inputs" });
  }
});

router.get("/getTreeSpace", async (req, res, next) => {
  try{

      const getTreeSpaceModel = await TreeSpaces.findAll();
    const getAvailableSpace = getTreeSpaceModel.map(
      treespace => treespace.AreaForTrees
    );
    const reduceSpaceToOneValue = getAvailableSpace.reduce((acc, val) => {
      return acc + val;
    }, 0);
    const reducedValueconvertToString = JSON.stringify(reduceSpaceToOneValue);
  
    res.send(reducedValueconvertToString);


  }catch(error){

    res.status(400).send({error: 'unkown error please check your input'})
  }
});


module.exports=router