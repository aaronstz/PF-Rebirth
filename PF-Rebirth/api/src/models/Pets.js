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
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.ENUM("small", "medium", "big"),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("female", "male"),
      allowNull: false,
      validate: {
        isIn: [["female", "male"]],
      },
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    type: {
      type: DataTypes.ENUM("dog", "cat"),
      allowNull: false,
      validate: {
        isIn: [["dog", "cat"]],
      },
    },
    race: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
  });
};
