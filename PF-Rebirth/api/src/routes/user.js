const { Router } = require("express");
const router = Router();
const { User } = require('../db');
const { generatePassword } = require('../tools/passwordGenerator.js');
const bcrypt  = require('bcrypt');
const nodemailer = require("nodemailer");

router.put("/:mail" , async(req, res, next)=>{
    const {mail} = req.params
    const restoreUser = await User.restore({
        where : {mail : mail}
    })
    res.sendStatus(200).send(restoreUser)
})

router.get("/:mail" , async(req, res, next) =>{
    const {mail} = req.params
    try {
        const userMail = await User.findByPk(mail)
        if(!userMail){
            res.status(404).send("no se encontro el usuario con ese mail")
        }else {
            res.status(200).send(userMail) 
        }
    } catch (error) {
        next(error)
    }
})



router.get("/" , async (req, res, next)=>{
    const allUsers = await User.findAll()
    try {
        allUsers.length ? res.status(200).send(allUsers) : res.status(400).send("No se encuentra ningun usuario")
    } catch (error) {
        next(error)
    }
})

router.post("/", async(req,res,next) =>{

    const { body } = req;
    const { googleId } = body;


    if(googleId){
        try {
            const userName = body.name;
            const name = body.givenName;
            const lastName = body.familyName;
            const mail = body.email;
            const image = body.imageUrl;
            const generatePass = generatePassword(9);
            const password = await bcrypt.hash(generatePass, 10);
            await User.create({userName, name, lastName, mail, image, password });
            res.send(`El usuario ${name} fue creado con exito`);
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                  user: "rebirhtPets@gmail.com",
                  pass: "vxhhgglvicwtjnax", 
                },
              });
        

        let mailOption = {
                from : " 'Rebirth.App 🐾' <rebirhtPets@gmail.com>",
                to : req.body.email,
                subject : "Rebirth.App 🐾",
                text : "Gracias por registrarte en Rebirth!"
            }
        
            transporter.sendMail(mailOption , (error, info) =>{
                if(error){
                    res.status(500).send(error.message)
                }else{
                    console.log('mail sent successfully', req.body)
                    res.status(200).send(req.body)
                }
            }) 
     
        res.status(200).send(`El usuario ${name} fue creado con exito`);


        } catch (error) {

            console.log(error)
            res.status(400).send(error)
            next();
        }
    }else{
        try {

            const userName = body.formBasicUserName;
            const name = body.formBasicName;
            const lastName = body.formBasicLastName;
            const mail = body.formBasicEmail;
            const basicPass = body.formBasicPassword;
            const password = await bcrypt.hash(basicPass, 10);

            await User.create({userName, name, lastName, mail, password})

            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                  user: "rebirhtPets@gmail.com",
                  pass: "vxhhgglvicwtjnax", 
                },
              });
        

        let mailOption = {
                from : " 'Rebirth.App 🐾' <rebirhtPets@gmail.com>",
                to : req.body.formBasicEmail,
                subject : "Rebirth.App 🐾",
                text : "Gracias por registrarte en Rebirth!"
            }
        
            transporter.sendMail(mailOption , (error, info) =>{
                if(error){
                    res.status(500).send(error.message)
                }else{
                    console.log('mail sent successfully', req.body)
                    res.status(200).send(req.body)
                }
            }) 
            res.status(200).send(`El usuario ${name} fue creado con exito`)

        } catch (error) {
            res.status(400).send(error)
        }
    }
})


router.delete("/:mail" , async (req, res, next) =>{
    const {mail} = req.params
    try {
        const userDelete = await User.findByPk(mail)
        if(!userDelete){
            res.status(404).send(`No se encuntra el usuario con el mail ${req.params.mail}😒`)
        }else{
            await User.destroy({where: {mail: mail}})
            res.status(200).send(`se elimino el usuario `)
        }
    } catch (error) {
        next(error)
    }
})


module.exports = router;


