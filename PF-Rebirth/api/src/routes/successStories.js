const { Router } = require("express");
const { SuccessStories } = require("../db");
const router = Router();

router.post("/", async (req, res, next) => {
  const { nameOfPet, imageOfPet, rating, testimonio, userId } = req.body;
  try {
    await SuccessStories.create({
      nameOfPet,
      imageOfPet,
      rating,
      testimonio,

      userId,
    });
    res.status(200).send(`the testimony was created successfully`);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const testimonios = await SuccessStories.findAll();
    res.send(testimonios);
  } catch (error) {
    next(error);
  }
});
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const successDelete = await SuccessStories.findByPk(id);
    if (!successDelete) {
      res.status(404).send(`testimony not found`);
    } else {
      await SuccessStories.destroy({ where: { id: id } });
      res.status(200).send("the testimony was removed");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
