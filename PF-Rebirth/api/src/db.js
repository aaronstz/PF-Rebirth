require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DATABASE, DATABASE_URL } = process.env;

const sequelize = new Sequelize(
  // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DATABASE}`,
  process.env.DATABASE_URL,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    timestamps: false,
    dialectOptions: {
      ssl: {
        required: true,
        rejectUnauthorized: false,
      },
    },
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Pets, Chat, Adoption, SuccessStories, User } = sequelize.models;

//    1:1  --->>> hasOne a belongsTo
//    1:n  --->>> hasMany a benlongsTo
//    n:n  --->>> belongsToMany

User.hasMany(Adoption); // un usuario puede hacer o tener diferentes solicitudes y una solicitud pertenece a un usuario
Adoption.belongsTo(User, { as: "owner", foreignKey: "ownerMail" }); // el dueño puede hacer o tener diferentes solicitudes y una solicitud pertenece a el dueño
Adoption.belongsTo(User, { as: "adopter", foreignKey: "userMail" });

Pets.hasMany(Adoption);
Adoption.belongsTo(Pets);
//----------------------------//

User.hasMany(Pets); //el dueño puede adoptar diferentes mascotas y una mascota pertenece a el dueño
Pets.belongsTo(User);

//----------------------------//

User.hasMany(SuccessStories); // un usuario puede tener distintos casos de exito y un caso de exito pertenece a un usuario
SuccessStories.belongsTo(User); // el dueño puede tener distintos casos de exito y un caso de exito pertenece a el dueño

//---------------------------//

Adoption.hasOne(Chat); //un usuario puede tener distintos chat y un chat pertenece a un usuario
Chat.belongsTo(Adoption); // el dueño puede tener distintos chat y un chat pertenece a el dueño

// siendo adoptante
//  user --> muchas --> pets
//  pets --> un --> user

// siendo dador de mascota
//  user --> muchas --> pets
//  pets --> un --> user

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
