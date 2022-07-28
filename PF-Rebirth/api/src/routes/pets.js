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
  try {
  const { type } = req.query;
  const { name } = req.query;
  const allPets = await Pets.findAll();
  let result = []; 
  if (type) {
    result = await allPets.filter((p) =>
      p.type.toLowerCase().includes(type.toLowerCase())
    );
   }
  if (name) {
    result.length ? 
    result = await result.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    ): result = await allPets.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase()))
  } 
  result.length
    ? res.status(200).send(result)
    : res.status(200).send(allPets);
   
    } catch (error) {
      next(error);
    }
});

router.get("/", async (req, res, next) => {
  try {
  const { type } = req.query;
  const { location } = req.query;
  const allPets = await Pets.findAll();
  let result1; 
  if (type) {
    result1 = await allPets.filter((p) =>
      p.type.toLowerCase().includes(type.toLowerCase())
    );
   }
  if (location) {
    result1 = await result1.filter((p) =>
      p.location.toLowerCase().includes(location.toLowerCase())
    )
  } 
  result1.length
    ? res.status(200).send(result1)
    : res.status(200).send("no");
   
    } catch (error) {
      next(error);
    }
});

router.post("/", async (req, res, next) => {
  const { id, name, image, age, description, gender, size, type, race, location } =
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
