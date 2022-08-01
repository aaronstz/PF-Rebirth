const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("adoption", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    gender: {
      type: DataTypes.ENUM("man", "woman"),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    otherpets: { type: DataTypes.STRING, allowNull: true },
    state: {
      type: DataTypes.ENUM("fulfilled", "rejected", "pending"),
      defaultValue: "pending",
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
