const Sequelize = require("sequelize");
const db = require("../db");

const TreeSpace = db.define("treespace", {
  FullName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Contact: {
    type: Sequelize.STRING,
    allowNull: false
  },
  AreaForTrees: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = TreeSpace;