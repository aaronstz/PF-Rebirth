const { Router } = require("express");
const { Message } = require("../db");
const { Adoption,User,Pets } = require("../db");
const router = Router();
const { Op } = require("sequelize");

router.get("/", async (req, res, next) => {
  try {
    const { chat } = req.query;
    const allMessage = await Message.findAll({
      order: [["createdAt", "ASC"]],
      where: {
        adoptionId: chat,
      },
      //   include: {
      //     model: Adoption,
      //     attributes: ["ownerMail", "userMail"],
      //   },
    });
    if (allMessage) {
      return res.json(allMessage);
    } else {
      return res.status(404).json({ message: "Aun no hay mensajes" });
    }
  } catch (error) {
    next(error);
  }
});

router.get("/chats", async (req, res, next) => {
  const { user } = req.query;
  try {
    const allChats = await Adoption.findAll({
      attributes: ["id", "ownerMail", "userMail", "petId", "id"],
      where: {
        [Op.or]: [{ ownerMail: user }, { userMail: user }],
      },

      include: [
        {
          model: User,
          attributes: ["name", "image", "mail"],
          as: "owner",
        },
        {
          model: User,
          attributes: ["name", "image", "mail"],
          as: "adopter",
        },
        {
          model:Pets,
          attributes:["name","image"]
        }
      ],
    });

    console.log(allChats);
    if (allChats) {
      return res.status(200).send(allChats);
    } else {
      return res.status(404).json({ message: "Aun no hay chats" });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { userMail, message, adoptionId } = req.body;

  if (!message) res.status(400).json({ msg: "Escribe un mensaje!" });
  try {
    const obj = { adoptionId, userMail, message };
    const nuevoMensaje = await Message.create(obj);

    res.json(nuevoMensaje);
  } catch (error) {
    next(error);
  }
});
router.put("/old", async (req, res, next) => {
  try {
    const { messageId } = req.query;
    const updateMessage = await Message.update({nuevo:false},{where:{id:messageId,}})
    if (updateMessage) {
      return res.json(updateMessage);
    } else {
      return res.status(404).json({ message: "Aun no hay mensajes" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
