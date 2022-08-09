const nodemailer = require("nodemailer");
const sendEmailUserRestored = (mail) => {

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
    subject: "Active",
    text: "Su cuenta fue habilitada !!",
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
  sendEmailUserRestored,
};
