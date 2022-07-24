const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("chat", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
