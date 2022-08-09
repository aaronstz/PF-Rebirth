const nodemailer = require("nodemailer");

const sendEmailConfirmation = (userInformation) => {
  const email = userInformation.mail;
  const body = userInformation;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "rebirthpetspf@gmail.com",
      pass: "pwxdidflyzumqaop", 
    },
  });

  let mailOption = {
    from: " 'Rebirth.App 🐾' <rebirthpetspf@gmail.com>",
    to: email,
    subject: "Rebirth.App 🐾",
    text: "Gracias por registrarte en Rebirth!",
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      // console.log(error.message)
      return error.message;
    } else {
      // console.log(body.mail)
      return body.mail
    }
  });
};

module.exports = {
  sendEmailConfirmation,
};