const { Router } = require("express");
const router = Router();
const bcrypt = require('bcrypt');
const { User } = require('../db');
const { createToken } = require('../tools/loginSession');
const { infoToPost } = require('../tools/loginSession');


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

router.post("/" , async (req, res, next) => {

    const { body } = req;
    const { userName, password } = body;
    const { googleId, email } = body;

    if(googleId){

        const user = await User.findOne({ where : { mail : email } });

        if(user){
            res.send(createToken(user))
        }

        if(!user){
            try {
                await infoToPost(req)

                let userCreated = await User.findOne({ where : { mail : email}})

                if(userCreated){
                    res.status(201).send(createToken(userCreated))
                }
            } catch (error) {
                next(error);
            }
        } 


    } 
    
    if(userName && password){
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
            res.send(createToken(user))
        }
    }
})

module.exports = router;