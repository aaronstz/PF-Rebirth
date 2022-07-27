const { Router } = require("express");
const {User} = require('../db')
const router = Router()

router.get("/restore" , async(req, res, next)=>{
    const restoreUser = await User.restore({
        paranoid: true
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
    const {userName, name, lastName,mail, password, image} = req.body
    try {
        await User.create({userName, name, lastName, mail, password, image})
        res.status(200).send(`El usuario ${req.body.name} fue creado con exito`)     
    } catch (error) {
        next(error)
    }
})

//goggle :
// {email: "will.diazor@gmail.com"
// familyName: "Diaz"
// givenName: "William"
// googleId: "112901499804350175056"
// imageUrl: "https://lh3.googleusercontent.com/a-/AFdZucpADX4F1pb5a7QR8vuWoUh3Bn8trbVLtBucLFRXCJ8=s96-c"
// name: "William Diaz"}

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


