const { DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  sequelize.define("user", {
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
      validate: {
        isEmail: true,
      },
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    password: {
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        len: {
          args: [7, 100],
          msg: "The password length should be between 7 and 42 characters.",
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favorites: { 
      type: DataTypes.ARRAY(DataTypes.STRING), 
      defaultValue : [] 
    },
    isOwner: { 
      type: DataTypes.BOOLEAN, 
      defaultValue: false 
    },
    isAdmin: { 
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },{
    paranoid: true,
    deletedAt: 'softDelete'

  });
};
