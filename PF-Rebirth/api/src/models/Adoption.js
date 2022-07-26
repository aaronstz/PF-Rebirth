const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("adoption", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    otherpets: { type: DataTypes.STRING, allowNull: true },
    requestdate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.DATE,
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
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
