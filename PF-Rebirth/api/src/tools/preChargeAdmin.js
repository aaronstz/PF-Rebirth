const admin =  require("./admin.json");
const {User} = require("../db");
const getAdmin = async () => {
  try {
      admin.forEach((a) => {
        User.findOrCreate({
          where: { mail: a.mail },
          defaults: {
            mail : a.mail,
            userName : a.userName,
            name : a.name,
            lastName : a.lastName,
            active : a.active,
            password : a.password,
            image : a.image,
            isAdmin : a.isAdmin ,
          },
        });
      });
      return getAdmin;
    }
    catch (error) {
        res.status(400).send(error.message)
  } 
}

module.exports = {
    getAdmin,
}