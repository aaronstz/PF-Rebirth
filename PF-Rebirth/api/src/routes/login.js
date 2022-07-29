const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Router } = require("express");
const router = Router();
const { User } = require('../db');
const { SECRET_KEYWORD } = process.env;

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
    }

    const userForToken = {
        mail : user._mail,
        userName : user.userName
    }

    const token = jwt.sign(userForToken, SECRET_KEYWORD)

    res.send({
        mail : user.mail,
        userName : user.userName,
        token
    })
})

module.exports = router;