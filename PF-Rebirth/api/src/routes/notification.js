const router = require("express").Router();
const { Notification } = require("../db");

router.get("/:mail", async (req, res, next) => {
  try {
    const { mail } = req.params;
    
      const notification = await Notification.findOne({
        where: { userMail: mail },
      });
      if (notification) {
        
      res.status(200).send(notification.nuevo);
    } else {
      res.status(200).send(false);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { userMail } = req.body;
        const notification = await Notification.findOne({
      where: { userMail:userMail },
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

router.patch("/:userMail", async (req, res, next) => {
  try {
    const { userMail } = req.params;
    const noti = await Notification.findOne({ where: { userMail: userMail } });
    if (noti){
    noti.nuevo = false;
    await noti.save();
    res.status(200).send(false);
    }else{
    res.status(200).send(false);    
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
