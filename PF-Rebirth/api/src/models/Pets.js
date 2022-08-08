const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pets", { 
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      validate: {
        isNumeric: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
    },
    size: {
      type: DataTypes.ENUM("small", "medium", "big"),
      allowNull: false,
      defaultValue: null,
    },
    gender: {
      type: DataTypes.ENUM("female", "male"),
      allowNull: false,
      defaultValue: null,
      validate: {
        isIn: [["female", "male"]],
      },
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      defaultValue: null,
    },
    type: {
      type: DataTypes.ENUM("dog", "cat"),
      allowNull: false,
      defaultValue: null,
      validate: {
        isIn: [["dog", "cat"]],
      },
    },
    race: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    location: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    views: { type: DataTypes.INTEGER, defaultValue: 0 },
  });
};
