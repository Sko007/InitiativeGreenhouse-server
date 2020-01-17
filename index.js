const express = require("express");
const app = express();
const port = process.env.PORT || 4000;


const cors = require("cors");
const Cors = cors();

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const answerRouter = require("./Answers/router");
const co2calculationRouter = require("./Co2Calculation/router");
const treeSpaceRouter = require("./Treespace/router");
const userRouter = require("./User/router");
const paymentRouter = require("./Payment/router")
const averageRouter = require("./Average/router")



app.use(Cors);
app.use(jsonParser);
app.use(paymentRouter)
app.use(answerRouter);
app.use(co2calculationRouter);
app.use(averageRouter)
app.use(treeSpaceRouter);
app.use(userRouter);




app.get("/", (req, res, next) => {
  res.send("This route is very nice");
});

app.listen(port,() => {console.log(`This server runs on port ${port}`)

});
