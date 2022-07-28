const { text } = require("body-parser");
const { Router } = require("express");
const router = Router();

const nodemailer = require("nodemailer");

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


      const {email, subject, text, name, phone} = req.body
        let mailOption = {
        from : email,
        name : name,
        phone : phone,
        to : "petsrebirth@gmail.com",
        subject : subject + " , " + name ,
        text : text +" , Phone: " + phone +" , Email: " +  email
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