const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pets", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: { defaultValue: 0 },
    img:{ type: DataTypes.STRING},
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hola: {
      defaultValue : "Hola"
    },
    
  });
};
