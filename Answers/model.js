const Sequelize = require("sequelize");
const db = require("../db");
const User = require("../User/model")

const Answers = db.define("answer", {
  kwh: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  meat: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  water: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  gasoline: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});


Answer.belongsTo(User)
module.exports = Answers;
