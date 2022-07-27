const { DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
    gender: {
      type: DataTypes.ENUM("man", "woman"),
      // allowNull: false,
      defaultValue : "man"
    },
    address: {
      type: DataTypes.STRING,
      // allowNull: false,
      defaultValue : null
    },
    age: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      validate: {
        isNumeric: true,
      },
      defaultValue : 18
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      defaultValue : 9999999
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
      // allowNull: false,,
      defaultValue : null
    },
    // favorites: { type: DataTypes.ARRAY, defaultValue: [] },
    
    isOwner: { type: DataTypes.BOOLEAN, defaultValue: false 
    },
  }, 
  {    
    freezeTableName : true,
    instanceMethods : {
      generateHash(password){
        return bcrypt.hash(password, bcrypt.genSaltSync(8))
      },
      validPassword(password) {
        return bcrypt.compare(password, this.password)
      }
    }
  });
};
