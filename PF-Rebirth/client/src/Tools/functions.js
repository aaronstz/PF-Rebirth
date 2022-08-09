import star1 from '../Assets/Testimoniales/Star1.png';
import star2 from '../Assets/Testimoniales/Star2.png';
import star3 from '../Assets/Testimoniales/Star3.png';
import star4 from '../Assets/Testimoniales/Star4.png';
import star5 from '../Assets/Testimoniales/Star5.png';
import { VALIDATE_EMAIL, VALIDATE_NAME, VALIDATE_PASSWORD } from '../Tools/regexForm.js';


export function showStar(number){
  /*
    La funcion evalua un numero y devuelve una imagen de calificacion con base a este
  */
    switch (number) {
      case 1:
        return star1 
      case 2:
        return star2
      case 3:
        return star3 
      case 4:
        return star4 
      case 5:
        return star5 
      default:
        return null
    }
}
export const validatePassword = (objUser) =>{
  let errors = {};
  if (objUser.formBasicPassword === '') {
    errors = {}
  }
  if (objUser.formBasicPassword.length <= 7 && objUser.formBasicPassword !== '') {
    errors.confirmPassword = "The passwords has to be longer than 7 characters"
  }
  if(objUser.formBasicConfirmPassword !== objUser.formBasicPassword){
    errors.confirmPassword = "The passwords doesn't match"
}
return errors
}
export const validateErrors = (objUser) => {

  let errors = {};

  /*
    La funcion valida que el nombre y los apellidos no tengan numeros, que el username sea existente, 
    valida que el email sea correcto y cumpla con las caracteristicas de un email, la password debe 
    cumplir con las siguientes condiciones: al menos un caracter, una mayuscula, una minuscula, logitud 
    entre 8 - 15 caracters, al menos un caracter especial y un numero

    Finalmente valida si las passwords son identicas en que caso de fallar algun filtro, return un objeto 
    con los errores
  */
    if(!objUser.formBasicName){
      errors.name = 'You must enter your name';
  }else if(!VALIDATE_NAME.test(objUser.formBasicName)){
      errors.name = 'The name must not contain numbers'
  }

  if(!objUser.formBasicLastName){
      errors.lastName = 'You must enter your lastname'
  }else if(!VALIDATE_NAME.test(objUser.formBasicLastName)){
      errors.lastName = 'The lastname must not contain numbers'
  }

  if(!objUser.formBasicUserName){
      errors.userName = 'You must enter a valid username'
  }

  if(!objUser.formBasicEmail){
      errors.email = 'You must enter an email'
  }else if(!VALIDATE_EMAIL.test(objUser.formBasicEmail)){
      errors.email = 'You must enter a valid email'
  }

  if(!objUser.formBasicPassword){
      errors.password = 'You must enter a valid password'
  }else if(!VALIDATE_PASSWORD.test(objUser.formBasicPassword)){
      errors.password = 'You must enter a valid password'
  }

  if(objUser.formBasicConfirmPassword !== objUser.formBasicPassword){
      errors.confirmPassword = "The passwords doesn't match"
  }

  return errors
}

export const eliminaDuplicados = (arr) => {
 
  const unicos = [];
 
  for(var i = 0; i < arr.length; i++) {
 
    const elemento = arr[i];
  
    if (!unicos.includes(arr[i])) {
      unicos.push(elemento);
    }
  }
  
  return unicos;
}