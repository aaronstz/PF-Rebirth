const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        userName: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING
        },
        gender:{
            type: DataTypes.ENUM("man", "woman"),
            allowNull: false
        },
        address: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true
            }
        },
        mail: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.INTEGER
        },
        active:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        password: {
            type: DataTypes.STRING,
            validate: {
               len: { 
                  args: [7, 42],
                  msg: "The password length should be between 7 and 42 characters."
               }
            }
         },
        image: {
            type: DataTypes.STRING
        }
    })
}