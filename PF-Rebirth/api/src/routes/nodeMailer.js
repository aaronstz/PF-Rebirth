const { text } = require("body-parser");
const { Router } = require("express");
const router = Router();

const nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "rebirthpetspf@gmail.com",
      pass: "hviqqxuplywplida",
    },
  });

  const { email, subject, description} = req.body;
  let mailOption = {
    from: email,
    to: "petsrebirth@gmail.com",
    subject: subject,
    text: description +" , Email: " + email,
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
           res.status(200).send(req.body);
    }
  });
});

module.exports = router;
