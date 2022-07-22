const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("adoptionrequest", {
    idMP: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    otherpets: { type: DataTypes.STRING, allowNull: true },
    requestdate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.DATE,
      allowNull: false,
    },
    requestType: {
      type: DataTypes.ENUM("adoption", "donation"),
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM("fulfilled", "rejected", "pending"),
      defaultValue: "pending",
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    petName: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
    },
    ownerName: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
