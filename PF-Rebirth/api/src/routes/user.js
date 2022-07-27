const { Router } = require("express");
const {User} = require('../db')
const router = Router()

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
    if(req.body.googleId){
        try {
            const userName = req.body.name;
            const name = req.body.givenName;
            const lastName = req.body.familyName;
            const mail = req.body.email;
            const image = req.body.imageUrl;
            const password = name+Math.random();
            await User.create({userName, name, lastName, mail, image, password});
            res.status(200).send(`El usuario ${name} fue creado con exito`);

        } catch (error) {
            res.status(400).send(error)
            next();
        }
    }else{
        try {
            const userName = req.body.formBasicUserName;
            const name = req.body.formBasicName;
            const lastName = req.body.formBasicLastName;
            const mail = req.body.formBasicEmail;
            const password = req.body.formBasicPassword;

            await User.create({userName, name, lastName, mail, password})
            res.status(200).send(`El usuario ${name} fue creado con exito`)
        } catch (error) {
            res.status(400).send(error)
        }
    }})


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


