const nodemailer = require("nodemailer");

const sendEmailConfirmation = (userInformation) => {
  const email = userInformation.mail;
  const body = userInformation;

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
    to: email,
    subject: "Rebirth.App 🐾",
    text: "Gracias por registrarte en Rebirth!",
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      return error.message;
    } else {
      return body.mail
    }
  });
};

module.exports = {
  sendEmailConfirmation,
};