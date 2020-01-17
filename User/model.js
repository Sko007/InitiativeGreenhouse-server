const Sequelize = require("sequelize")
const db = require("../db")

const User = db.define("user",{
    name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    spend_money:{
        type:Sequelize.STRING,
        allowNull:true
    },
    trees_bought:{
        type:Sequelize.STRING,
        allowNull:true
    },
    cerfificate:{
        type:Sequelize.STRING,
        allowNull:true
    },
    CO2_emission:{
        type:Sequelize.STRING,
        allowNull:true
    }
})

module.exports=User