const NUMEROS = "0123456789";
const SIMBOLOS = "!#$%&/()=?¡¿¨´*+[{}]-_,;.:<>";
const LETRAS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const TODO = NUMEROS + LETRAS + SIMBOLOS;

const generatePassword = (longitud) => {
    let password = "";
    for(let i=0 ; i < longitud ; i++){
        let aleatorio = Math.floor(Math.random() * TODO.length);
        password += TODO.charAt(aleatorio);
    }
    return password;
}

module.exports = {
    generatePassword,
};
