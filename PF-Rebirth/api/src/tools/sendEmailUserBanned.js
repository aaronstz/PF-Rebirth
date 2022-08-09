const nodemailer = require("nodemailer");
const sendEmailUserBanned = (mail) => {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "petsrebirth@gmail.com",
      pass: "iqmipujwctqgxvnw", 
    },
  });
  let mailOption = {
    from: " 'Rebirth.App 🐾' <petsrebirth@gmail.com>",
    to: mail,
    subject: "Banned",
    text: "Su cuenta fue deshabilitada por actividad inusual!!😐",
  };
  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      return error.message;
    } else {
      return info
    }
  });
};

module.exports = {
  sendEmailUserBanned,
};
