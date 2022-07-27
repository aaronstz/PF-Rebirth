const { text } = require("body-parser");
const { Router } = require("express");
const router = Router();

const nodemailer = require("nodemailer");

// router.post("/" , (req, res) =>{
//     let transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false,
//         auth: {
//           user: "yvette58@ethereal.email",
//           pass: "7EYyjnsRn3JGVv6wbN", 
//         },
//       });


//     let mailOption = {
//         from : "Remitente",
//         to : "rebirhtPets@gmail.com",
//         subject : "Enviado desde Rebirth.app",
//         text : "Hola, llegue"
//     }

//     transporter.sendMail(mailOption , (error, info) =>{
//         if(error){
//             res.status(500).send(error.message)
//         }else{
//             console.log('mail sent successfully')
//             res.status(200).send(info)
//         }
//     })

// });

router.post("/" , (req, res) =>{
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "rebirhtPets@gmail.com",
          pass: "vxhhgglvicwtjnax", 
        },
      });


      const {email, subject, text} = req.body
        let mailOption = {
        from : email,
        to : "yvette58@ethereal.email",
        subject : subject,
        text : text
    }

    transporter.sendMail(mailOption , (error, info) =>{
        if(error){
            res.status(500).send(error.message)
        }else{
            console.log('mail sent successfully', req.body)
            res.status(200).send(req.body)
        }
    })

});
  
  
  
  
  
  module.exports = router;