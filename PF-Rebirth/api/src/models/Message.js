const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("message", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    adoptionId: {
      type: DataTypes.UUID,
    },
    userMail: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nuevo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
