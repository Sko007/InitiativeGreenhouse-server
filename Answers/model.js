const Sequelize = require("sequelize");
const db = require("../db");

const Answers = db.define("answer", {
  usage_kwh: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  usage_gasoline: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  usage_beef: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  usage_pork: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  usage_chicken: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});


module.exports=Answers