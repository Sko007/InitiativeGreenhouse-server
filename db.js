const Sequelize = require("sequelize")
const dataBaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
const db = new Sequelize(dataBaseUrl)

db.sync({force: false})
.then(() => console.log("Database is connected"))
.catch(error => console.log(error))

module.exports = db