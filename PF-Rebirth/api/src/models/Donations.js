const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("donations", {
    idMP: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    donationdate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.DATE,
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    payment: {
      type: DataTypes.ENUM('rejected', 'pending', 'approved'),
      allowNull: false,
      defaultValue: 'pending'
    },
    price: {
      type: DataTypes.INTEGER,
    },
    isActive: {
      type:DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
