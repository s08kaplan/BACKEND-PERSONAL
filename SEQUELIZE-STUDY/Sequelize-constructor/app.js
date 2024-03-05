"use strict" 

// ! npm install sequelize sqlite3

const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize("sqlite:./db.sqlite3")

const bcrypt = require("bcrypt")

const User = sequelize.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
     password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            bcrypt.hash(value, 8, (error, hash) => {
                if(error) {
                    throw new Error("Error hashing password!")
                }
                this.setDataValue("password", hash)
            })
        }
     }

})

User.beforeCreate(async (user, options) => {
    try {
        const hashedPassword = await bcrypt.hash(user.password, 8)
        user.password = hashedPassword
    } catch (error) {
        throw new Error("Error hashing password!!")
    }
})

// sequelize.sync()
// .then(()=> console.log("!!!!!! DB synchronized SUCCESSFULLY :)"))
// .catch(error => console.log("oooohhhh nooooo",error))
// sequelize.sync({ alter: true })

sequelize.authenticate()
.then(() => console.log("*DB connected successfully *"))
.catch(() => console.log("* DB can NOT connected * "))

module.exports = { sequelize, User}