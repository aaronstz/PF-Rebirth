const router = require("express").Router();
const { Notification } = require("../db");

router.get("/:mail", async (req, res, next) => {
  try {
    const { mail } = req.params;
    if (mail.length > 3) {
      const notification = await Notification.findOne({
        where: { userMail: mail },
      });
      res.status(200).send(notification);
    } else {
      const notification = await Notification.findAll();
      res.status(200).send(notification);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { userMail } = req.body;
    const notification = await Notification.findOne({
      where: { userMail },
    });
    if (notification) {
      notification.nuevo = true;
      await notification.save();
      res.status(201).send("Notification updated");
    } else {
      await Notification.findOrCreate({
        where: { userMail },
        default: { nuevo: true },
      });
      res.status(200).send("Notification created");
    }
  } catch (error) {
    next(error);
  }
});

router.patch("/", async (req, res, next) => {
  try {
    const { userMail } = req.body;
    const noti = await Notification.findOne({ where: { userMail: userMail } });
    noti.nuevo = false;
    await noti.save();
    res.status(200).send("Notification updated");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
