const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("owner", {
    id: { type: DataTypes.UUID },
    otherpets: { type: DataTypes.STRING },
    requestdate: { type: DataTypes.DATE, defaultValue: DataTypes.DATE },
    state: { type: DataTypes.BOOLEAN, defaultValue: false },
  });
};
