"use strict"

const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("sqlite:./bookDB.sqlite3")

// sequelize.sync()
// sequelize.sync({ alter : true})


sequelize.authenticate()
.then(() => console.log("DB CONNECTED :)))"))
.catch(() => console.log("DB NOT connected"))

module.exports = sequelize