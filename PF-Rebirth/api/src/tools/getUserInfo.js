const bcrypt = require('bcrypt');
const { generatePassword } = require('./passwordGenerator.js');

const getUserInfo = async (req) => {
    const { body } = req;
    const { googleId } = body;

    if(googleId){
        const generatePass = generatePassword(9);

        return {
            userName : body.name,
            name : body.givenName,
            lastName : body.familyName,
            mail : body.email,
            image : body.imageUrl,
            password : await bcrypt.hash(generatePass, 10),
        }
    }else{
        const basicPass = body.formBasicPassword;

        return {
            userName : body.formBasicUserName,
            name : body.formBasicName,
            lastName : body.formBasicLastName,
            mail : body.formBasicEmail,
            password : await bcrypt.hash(basicPass, 10),
        }
    }
}

module.exports = {
    getUserInfo,
}