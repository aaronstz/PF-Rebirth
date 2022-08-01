const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Router } = require("express");
const router = Router();
const { User } = require('../db');
const { SECRET_KEYWORD } = process.env;

function verifyUser(userData, password){
    let userForToken = {};
    if(userData && password){
        userForToken = {
            imageUrl : userData.image,
            mail : userData.mail,
            userName : userData.userName,
            name : userData.name,
            lastName : userData.lastName,
            image : userData.image
        }
    }
    return userForToken;
}

router.post("/" , async (req, res) => {

    const { body } = req;
    const { userName, password } = body;

    const user = await User.findOne({ where: { userName: userName } }); //true or false

    const passwordCorrect = user === null  //true or false
        ? false
        : await bcrypt.compare(password, user.password)

    if(!(user && passwordCorrect)){
        res.status(401).json({
            error : 'Invalid password or email'
        })
        return;
    }

    if(passwordCorrect){
        let userToken = verifyUser(user["dataValues"], passwordCorrect)

        const token = jwt.sign(userToken, SECRET_KEYWORD)
    
        res.send({
            userToken,
            token
        })
    }

})

module.exports = router;