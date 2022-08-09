const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("notification", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nuevo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};