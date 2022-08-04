const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Router } = require("express");
const router = Router();
const { User } = require('../db');
const { SECRET_KEYWORD } = process.env;
const postUser = require('./user.js');


function verifyUser(userData, password){
    let userForToken = {};
    
    if(userData && password){
        userForToken = {
            imageUrl : userData.image,
            mail : userData.mail,
            userName : userData.userName,
            name : userData.name,
            lastName : userData.lastName,
            image : userData.image,
            isAdmin : userData.isAdmin,
            active: userData.active
        }
    }
    return userForToken;
}

router.post("/" , async (req, res) => {

// email: "will.diazor@gmail.com"
// familyName: "Diaz"
// givenName: "William"
// googleId: "112901499804350175056"
// imageUrl: "https://lh3.googleusercontent.com/a-/AFdZucpADX4F1pb5a7QR8vuWoUh3Bn8trbVLtBucLFRXCJ8=s96-c"
// name: "William Diaz"

    const { body } = req;
    const { userName, password } = body;
    const { googleId, name } = body;


    // if(googleId){

    //     const user = await User.findOne({ where : { userName : name.replace(" ", "_") } });
    //     if(!user){
    //         console.log('postUser', postUser)
    //         router.use("/", postUser)
    //     } else {
    //      }
    

    // } else {

        const user = await User.findOne({ where: { userName: userName } });

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
            let userToken = verifyUser(user["dataValues"], passwordCorrect);
    
            const token = jwt.sign(userToken, SECRET_KEYWORD)
        
            res.send({
                userToken,
                token
            })
        }
    // }
})

module.exports = router;