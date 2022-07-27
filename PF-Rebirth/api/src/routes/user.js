const { Router } = require("express");
const {User} = require('../db')
const router = Router()
const { generatePassword } = require('../tools/passwordGenerator.js');
const bcrypt  = require('bcrypt');


router.get("/:id" , async(req, res, next) =>{
    const {id} = req.params
    try {
        const userId = await User.findByPk(id)
        if(!userId){
            res.status(404).send("no se encontro el usuario con ese id")
        }else {
            res.status(200).send(userId) 
        }
    } catch (error) {
        next(error)
    }
})

router.get("/" , async (req, res, next)=>{
    try {
        const allUsers = await User.findAll()
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
            const password = body.formBasicPassword;

            await User.create({userName, name, lastName, mail, password})
            res.send(`El usuario ${name} fue creado con exito`)
        } catch (error) {
            res.status(400).send(error)
        }
    }
})

router.delete("/:id" , async (req, res, next) =>{
    const {id} = req.params
    try {
        const userDelete = await User.findByPk(id)
        if(!userDelete){
            res.status(404).send(`No se encuntra el usuario con el id ${req.params.id}😒`)
        }else{
            await User.destroy({where: {id: id}})
            res.status(200).send(`se elimino `)
        }
    } catch (error) {
        next(error)
    }
})


module.exports = router;
