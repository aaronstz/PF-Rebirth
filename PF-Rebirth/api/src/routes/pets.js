const { Router } = require("express");
const { Pets } = require("../db");
const router = Router();

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const petId = await Pets.findByPk(id);
    if (!petId) {
      res.status(404).send("pet not found");
    } else {
      res.status(200).send(petId);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  const { type } = req.query;
  const { name } = req.query;
  const allPets = await Pets.findAll();
  
  if (type) {
    const typeName = await allPets.filter((p) =>
      p.type.toLowerCase().includes(type.toLowerCase())
    );
    typeName.length
      ? res.status(200).send(typeName)
      : res.status(404).send("there is no type of pet");
  }
  if (name) {
    const namePet = await allPets.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
    namePet.length
      ? res.status(200).send(namePet)
      : res.status(404).send("there is no name of pet");
  } else {
    try {
      allPets.length
        ? res.status(200).send(allPets)
        : res.status(400).send("pet not found");
    } catch (error) {
      next(error);
    }
  }
});

router.post("/", async (req, res, next) => {
  const { id, name, image, age, description, gender, size, type, race, location, userMail } =
    req.body;
  try {
    await Pets.create({
      id,
      name,
      image,
      age,
      description,
      gender,
      size,
      type,
      race,
      location,
      userMail
    });
    res.status(200).send(`the pet was created successfully`);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const petDelete = await Pets.findByPk(id);
    if (!petDelete) {
      res.status(404).send(`pet not found`);
    } else {
      await Pets.destroy({ where: { id: id } });
      res.status(200).send("the pet was removed");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
