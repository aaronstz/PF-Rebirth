const jwt = require('jsonwebtoken')
const { SECRET_KEYWORD } = process.env;
const { User } = require("../db");
const { getUserInfo } = require("../tools/getUserInfo.js");
const { sendEmailConfirmation } = require("../tools/sendEmail.js");

function createToken(user) {

    let userToken = user["dataValues"];
    const token = jwt.sign(userToken, SECRET_KEYWORD)
    return {
        userToken,
        token
    };

}

async function infoToPost(request){
    let userInformation = await getUserInfo(request);
    await User.create(userInformation);
    try {
        sendEmailConfirmation(userInformation);
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    createToken,
    infoToPost
}