const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('admin', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
          },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mail:{
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
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
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}