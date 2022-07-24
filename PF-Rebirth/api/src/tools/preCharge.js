const pets =  require("./pets.json");


const {Pets} = require("../db");

const getPets = async () => {
 
  try {
      pets.forEach((p) => {
        Pets.findOrCreate({
          where: { id: p.id },
          defaults: {
            id: p.id, 
            name: p.name,
            image: p.image,
            age: p.age,
            description: p.description,
            active: p.active,
            gender: p.gender,
            size: p.size,
            type: p.type,
            race: p.race,
            location : p.location
            // owner: p.owner,
          },
        });
      });
      return getPets;
    }
    catch (error) {
  } 
    console.log("Error" + error);
  }

module.exports = {
    getPets,
}

