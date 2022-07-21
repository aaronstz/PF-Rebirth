const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("successStories", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey : true,
    },
    currentOwnerUser : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey : true,
        allowNull : false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image:{
        type: DataTypes.TEXT,
    },
    rating:{
        type : DataTypes.INTEGER,
        validate : {
            min : 0,
            max : 5,
        } 
    },
    description :{
        type : DataTypes.STRING,
        allowNull : false
    },
    show : {
        type : DataTypes.BOOLEAN,
        defaultValue: true,
    },

  });
};
