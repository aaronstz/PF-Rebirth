const { Router } = require("express");
const bcrypt = require('bcrypt');
const { updateUser } = require("../tools/userUpdate");
const router = Router();
const { User } = require("../db");
const { getUserInfo } = require("../tools/getUserInfo.js");
const { sendEmailConfirmation } = require("../tools/sendEmail.js");

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
    console.log(error)
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
    console.log(error)
  }
})


router.put("/:mail", updateUser);


router.patch("/:mail", async (req, res, next) => {
  const { mail } = req.params;
  await User.restore({
    where: { mail: mail },
  });
  res.send("User Restored");
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
  const allUsers = await User.findAll();
  try {
    allUsers.length
      ? res.status(200).send(allUsers)
      : res.status(400).send("No se encuentra ningun usuario");
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {

  let {body} = req;
  console.log('body', body)
  
  try {
    let userInformation = await getUserInfo(req);
    await User.create(userInformation);

    sendEmailConfirmation(userInformation);
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
      res.status(200).send(`se elimino el usuario `);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/adm/:mail" , async (req, res, next) =>{
  const {mail} = req.params
  const userMail = await User.findByPk(mail)
  console.log("prueb", userMail)
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
