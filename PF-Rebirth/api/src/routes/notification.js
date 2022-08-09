const router = require("express").Router();
const {Notification}=require("../db")


router.get("/:mail", async (res,req,next)=>{
try {
    const {mail}= req.params;
    let noti= await Notification.findOne({where:{mail:mail}})
    res.status(200).send(noti.nuevo)

} catch (error) {
    next(error)
}


})



router.post("/", async (res,req,next)=>{
try {
    const {mail} = req.body;
    let noti= await Notification.findOrCreate({where:{mail:userMail}})
    noti.nuevo=true;
   await noti.save();
res.status(200).send("Notificacion actualizada")

} catch (error) {
    next(error)
}
}
)

router.patch("/", async (res,req,next)=>{
    try {
        const {userMail}= req.body;
        let noti= await Notification.findOne({where:{mail:userMail}})
        noti.nuevo=false;
       await noti.save();
    res.status(200).send("Notificacion actualizada")
    
    } catch (error) {
        next(error)
    }
})




module.exports = router;
