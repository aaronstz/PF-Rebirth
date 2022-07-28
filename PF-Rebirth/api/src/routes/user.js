const { Router } = require("express");
const router = Router();
const { User } = require('../db');
const { getUserInfo } = require('../tools/getUserInfo.js');
const { sendEmailConfirmation } = require('../tools/sendEmail.js');

router.put("/:mail", async (req, res, next) => {
  const { mail } = req.params;
  const restoreUser = await User.restore({
    where: { mail: mail },
  });
  res.sendStatus(200).send(restoreUser);
});

router.get("/:mail", async (req, res, next) => {
  const { mail } = req.params;
  try {
    const userMail = await User.findByPk(mail);
    if (!userMail) {
      res.status(404).send("no se encontro el usuario con ese mail");
    } else {
      res.status(200).send(userMail);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  const allUsers = await User.findAll();
  try {
    allUsers.length
      ? res.status(200).send(allUsers)
      : res.status(400).send("No se encuentra ningun usuario");
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let userInformation = await getUserInfo(req);
    await User.create(userInformation);

    sendEmailConfirmation(userInformation);
    res.status(201).send(`El usuario ${userInformation.name} fue creado con exito`);

  } catch (error) {
    res.status(409).send("El usuario ya se encuentra registrado");
  }
});

router.delete("/:mail", async (req, res, next) => {
  const { mail } = req.params;
  try {
    const userDelete = await User.findByPk(mail);
    if (!userDelete) {
      res
        .status(404)
        .send(`No se encuentra el usuario con el mail ${req.params.mail}😒`);
    } else {
      await User.destroy({ where: { mail: mail } });
      res.status(200).send(`se elimino el usuario `);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
