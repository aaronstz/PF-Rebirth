const { Router } = require("express");
const {User} = require('../db')
const router = Router()

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
    //     email: "will.diazor@gmail.com"
    // familyName: "Diaz"
    // givenName: "William"
    // googleId: "112901499804350175056"
    // imageUrl: "https://lh3.googleusercontent.com/a-/AFdZucpADX4F1pb5a7QR8vuWoUh3Bn8trbVLtBucLFRXCJ8=s96-c"
    // name: "William Diaz"
    const {userName, name, lastName, gender, address, age, mail, phone, active, password, image} = req.body
    try {
        await User.create({userName, name, lastName, gender, address, age, mail, phone, active, password, image})
        res.status(200).send(`El usuario ${req.body.name} fue creado con exito`)
    } catch (error) {
        next(error)
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
