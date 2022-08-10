const { Router } = require("express");
const { updateUser } = require("../tools/userUpdate");
const router = Router();
const { User } = require("../db");
const { getUserInfo } = require("../tools/getUserInfo.js");
const { sendEmailConfirmation } = require("../tools/sendEmail.js");
const {sendEmailUserBanned} = require("../tools/sendEmailUserBanned.js")
const { Op } = require("sequelize");
const { sendEmailUserRestored } = require("../tools/sendMailUserRestored");

router.get("/banned" , async (req, res, next) => {
  try {
    const users = await User.findAll({ where:{
      softDelete: {
        [Op.ne]: null
        }},
      paranoid : false
    })
    return res.status(200).send(users)
  } catch (error) {
    next(error)
  }
})


router.put("/addFavs/:mail", async(req, res) =>{
  const {mail}= req.params
  const {favorites} = req.body
 
  try {
    const users= await User.findByPk(mail)
    const favBd = users["dataValues"].favorites;
    const favUpdate = favBd.concat(favorites)
    const userFavs = await User.findByPk(mail)
    userFavs.update({favorites: favUpdate},{
      where : {
        mail : mail
      }
    })
   return res.status(200).send(favUpdate)
  } catch (error) {
    res.send(error)
  }
})

router.put("/deleteFavs/:mail", async(req, res) =>{
  const {mail}= req.params
  const {id} = req.body
 
  try {
    const users= await User.findByPk(mail)
    const favBd = users["dataValues"].favorites;
    const favUpdate = favBd.filter((f)=> f !== id)
    const userFavs = await User.findByPk(mail)
    userFavs.update({favorites: favUpdate},{
      where : {
        mail : mail
      }
    })
   return res.status(200).send(favUpdate)
  } catch (error) {
    res.send(error)
  }
})

router.put("/:mail", updateUser);

router.patch("/restore/:mail", async (req, res, next) => {
  try {
    const { mail } = req.params;
    if(mail){
      await User.restore({
        where: { mail: mail },
      });
      sendEmailUserRestored(mail)
      res.send("User Restored");
    }else {
      res.status(404).send("Not found")
    }
  } catch (error) {
    next(error)
  }
});

router.get("/:mail", async (req, res, next) => {
  const { mail } = req.params;
  try {
    const userMail = await User.findByPk(mail);
    if (!userMail) {
      res.status(404).send("no se encontro el usuario con ese mail");
    } else {
      res.status(200).send(userMail);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const {userName} = req.query
    const allUsers = await User.findAll()
    if(userName){
      const result = await allUsers.filter((u) =>
      u.userName.toLowerCase().includes(userName.toLowerCase()))
      result.length?
        res.status(200).send(result) :
        res.status(404).send("not found")
    }else{  
      allUsers.length
      ? res.status(200).send(allUsers)
      : res.status(400).send("No se encuentra ningun usuario");
    }
    } catch (error) {
      next(error);
  }
});

router.post("/", async (req, res, next) => {

  try {
    let userInformation = await getUserInfo(req);
    await User.create(userInformation);

    // sendEmailConfirmation(userInformation);
    res
      .status(201)
      .send(`El usuario ${userInformation.name} fue creado con exito`);
  } catch (error) {
    res.status(409).send("El usuario ya se encuentra registrado");
  }
});

router.delete("/:mail", async (req, res, next) => {
  const { mail } = req.params;
  try {
    const userDelete = await User.findByPk(mail);
    if (!userDelete) {
      res
        .status(404)
        .send(`No se encuentra el usuario con el mail ${req.params.mail}😒`);
    } else {
      await User.destroy({ where: { mail: mail } });
      sendEmailUserBanned(mail)
      res.status(200).send(mail);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/adm/:mail" , async (req, res, next) =>{
  const {mail} = req.params
  const userMail = await User.findByPk(mail)
  if(userMail.dataValues.isAdmin === false){
    await User.update({isAdmin : true},{
      where: {mail : mail}
    })
    return res.status(200).send("pasa a adm")
  }if(userMail.dataValues.isAdmin === true){
    await User.update({isAdmin : false},{
      where: {mail : mail}
    })
    return res.status(200).send("pasa a usuario")
  }
})

router.get("/favs/:mail", async (req, res) =>{
  const {mail} = req.params
  try {
    const userFav = await User.findByPk(mail)
    if(userFav.dataValues.favorites.length){
      res.status(200).send(userFav.dataValues.favorites)
    }else{
      res.status(404).send("no hay favs")
    }

  } catch (error) {
    res.status(404).send(error.message)
  }
})



module.exports = router;
