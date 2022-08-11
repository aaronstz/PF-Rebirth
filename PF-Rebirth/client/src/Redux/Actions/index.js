import axios from "axios";
import swal from "sweetalert";
import {
  FULL_FILTER_AGE,
  FULL_FILTER_LOCATION,
  FULL_FILTER_SEX,
  FULL_FILTER_SIZE,
  GET_CHAT,
  GET_MESSAGE,
  GET_OWNER_ADOPTION,
  GET_USER_ADOPTION,
  LOGIN_USER,
  LOGOUT_USER,
  NO_FILTER_PETS,
  POST_MESSAGE,
  // PUT_VISTO, -> warning
  SAVE_ADOPTION_ID,
  FAVORITES,
  DELETE_FAVORITES,
  GET_FAVORITES,
  GET_ALL_PETS,
  DELETE_USER,
  DELETE_PET,
  USERS_BANNED,
  USER_RESTORE,
  GET_USERNAME,
  MAKE_ADMIN,
  SUCCESS_STORY,
  POST_SUPPORT_FORM,
  GET_NAMES,
  CREA_UPDATE_NOTIFICATION,
  VISTO_NOTIFICATION,
  NOTIFICATION,
  DELETE_POST,
  SAVE_ID,
  FUL_ADOPTION,
  ADOTION_HISTORY_ADMIN


  // POST_SUPPORT_FORM, -> warning
} from "./actionTypes";

const { REACT_APP_SERVER }  = process.env;

export function getTestimonials(){
  return async function(dispatch){
    try {
      const data = await axios(`${REACT_APP_SERVER}/successstories`)
      return dispatch({
        type:'GET_TESTIMONIALS',
        payload: data
      })
    } catch (error) {
      return error
    }
  }
}



export function saveFavorites(arrayFavorites) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "SAVE_FAVORITES",
        payload: arrayFavorites,
      });
    } catch (error) {
      return error;
    }
  };
}

export function saveName(name) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "SAVE_NAME",
        payload: name,
      });
    } catch (error) {}
  };
}

export function CreaUpdateNotification(mail) {
  return async function (dispatch) {
    try {
      let userMail={userMail:mail}
      const { data } = await axios.post(`${REACT_APP_SERVER}/notification`,userMail)
      return dispatch({
        type: CREA_UPDATE_NOTIFICATION,
      });
    } catch (error) {}
  };
}

export function VistoNotification(email) {
  return async function (dispatch) {
    try {
      const { data } = await axios.patch(`${REACT_APP_SERVER}/notification/${email}`)

      return dispatch({
        type: VISTO_NOTIFICATION,
        payload: data.data,
      });
    } catch (error) {}
  };
}

export function GetNotification(email) {
  return async function (dispatch) {
    try {
      const { data } = await axios(`${REACT_APP_SERVER}/notification/${email}`)

      return dispatch({
        type: NOTIFICATION,
        payload: data,
      });
    } catch (error) {}
  };
}

export function pruebasDeFiltrado(name) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${REACT_APP_SERVER}/by_name?name=${name}`)

      return dispatch({
        type: "PRUEBA",
        payload: data.data,
      });
    } catch (error) {}
  };
}

export function switchHomeView(type){
  return async function(dispatch){
    const { data } = !type ?
        await axios.get(`${REACT_APP_SERVER}/by_type`) :
        await axios.get(`${REACT_APP_SERVER}/by_type?type=${type}`)
    const pets = data.data
    try {
      return dispatch({
        type: "SWITCH_VIEW",
        payload: pets,
      });
    } catch (error) {
      return error;
    }
  };
}

export function paginateData(json) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "PAGINATE_DATA",
        payload: json.data,
      });
    } catch (error) {
      // return error
    }
  };
}

export function loginUser(credentials) {
  return async function (dispatch) {
    try {
      const json = await axios.post(`${REACT_APP_SERVER}/login`, credentials);
      const dataUser = json.data;
      if (json.status === 201) {
        await swal(
          "Welcome to Rebirth Pet Adoption Network!",
          "It seems that this is the first time you access our website, it's important for you to know that your information is protected by our privacy policy.",
          "info"
        ).then((willLogin) => {
          if (willLogin) {
            swal("WooHooo!", "User created successfully", "success");
          }
        });
      }
      return dispatch({
        type: LOGIN_USER,
        payload: dataUser,
      });
    } catch (error) {
      await swal("Sorry", "Invalid username or password", "error");
    }
  };
}

export function getMessage(adoptionId) {
  return async function (dispatch) {
    try {
      const json = await axios(`${REACT_APP_SERVER}/message?chat=${adoptionId}`);
      return dispatch({
        type: GET_MESSAGE,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}



export function getChat(user) {
  return async function (dispatch) {
    try {
      const json = await axios(`${REACT_APP_SERVER}/message/chats?user=${user}`);
      return dispatch({
        type: GET_CHAT,
        payload: json.data,
      });
    } catch (error) {
      return error
    }
  };
}

export async function successAdoption(id) {
     try {
      await axios.patch(`${REACT_APP_SERVER}/adoption/success/${id}`);
     
    } catch (error) {
      return error;
    }
 }


export function putVisto(mail, adoptionId) {
  return async function (dispatch) {
    try {
        await axios.put(`${REACT_APP_SERVER}/message/visto`, {
        mail: mail,
        adoptionId: adoptionId,
      });
    } catch (error) {}
  };
}

export function postMessage(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.post(`${REACT_APP_SERVER}/message`, payload);
      return dispatch({
        type: POST_MESSAGE,
        payload: json.data,
      });
    } catch (error) {
      return error;
      
    }
  };
}

export function saveAdoptionId(id) {
  return async function (dispatch) {
    return dispatch({
      type: SAVE_ADOPTION_ID,
      payload: id,
    });
  };
}
export function logoutUser() {
  return function (dispatch) {
    return dispatch({
      type: LOGOUT_USER,
      payload: null,
    });
  };
}

export function getOwnerAdoption(id) {
  return async function (dispatch) {
    try {
      const json = await axios(`${REACT_APP_SERVER}/adoption/owner`);
      return dispatch({
        type: GET_OWNER_ADOPTION,
        payload: json.data,
      });
    } catch (error) {
      return error;
      
    }
  };
}

export function getAdopterAdoption(id) {
  return async function (dispatch) {
    try {
      const json = await axios(`${REACT_APP_SERVER}/user`);
      return dispatch({
        type: GET_USER_ADOPTION,
        payload: json.data,
      });
    } catch (error) {
      return error;
      
    }
  };
}

export function getUsers() {
  return async function (dispatch) {
    try {
      const json = await axios(`${REACT_APP_SERVER}/user`);
      return dispatch({
        type: "GET_USER",
        payload: json.data,
      });
    } catch ({ response }) {
      const { status } = response;
      if (status === 404) swal("Oops!", "No users found", "error");
    }
  };
}

export function getUserName(userName) {
  return async function (dispatch) {
    try {
      const json = await axios(`${REACT_APP_SERVER}/user?userName=${userName}`);
      return dispatch({
        type: GET_USERNAME,
        payload: json.data,
      });
    } catch ({ response }) {
      const { status } = response;
      if (status === 404) swal("Oops!", "No user found", "error");
    }
  };
}

export function updateUser(email, payload) {
  return async function (dispatch) {
    try {

      const json = await axios.put(`${REACT_APP_SERVER}/user/${email}`, payload);
      localStorage.setItem('user',JSON.stringify(json.data))

      if (json.status === 200) swal("OK", "User info updated", "success");

      return dispatch({
        type: "UPDATE_PROFILE",
        payload: json.data,
      });
    } catch (error) {
      swal("Error", "Username already in use", "error");
    }
  };
}

export function deleteUser(mail) {
  return async function (dispatch) {
    try {
      const json = await axios.delete(`${REACT_APP_SERVER}/user/${mail}`);
      return dispatch({
        type: DELETE_USER,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function postMercadoPago(donacion) {
  return async function (dispatch) {
    try {
      let data = await axios.post(`${REACT_APP_SERVER}/donations`, donacion);
      return dispatch({ type: "MERCADO_PAGO", data });
    } catch (error) {
      console.log("error", error);
    }
  };
}

export function getUserId(id) {
  return async function (dispatch) {
    try {
      const json = await axios(`${REACT_APP_SERVER}/user/${id}`);
      return dispatch({
        type: "GET_USER_ID",
        payload: json.data,
      });
    } catch (error) {
      swal("Sorry", "No user found", "error");
    }
  };
}

export function postUser(payload) {
  return async function (dispatch) {
    try {
      const { status } = await axios.post(`${REACT_APP_SERVER}/user`, payload);
      if (status === 201) {
        swal("WooHooo!", "User created successfully", "success").then(() =>
          window.history.back()
        );
      }
    } catch (error) {
      const { response } = error;
      if (response.status === 409) {
        swal("Sorry", "Email or username already registered", "error");
      }
    }
  };
}

export function deleteAdoption(id) {
  return async function dispatch() {
    try {
      await axios.patch(`${REACT_APP_SERVER}/adoption/${id}`);
      return dispatch({
        type: "DELETE_ADOPTION",
      });
    } catch (error) {
      return error;
    }
  };
}

export function getPets() {
  return async function (dispatch) {
    try {
      const json = await axios(`${REACT_APP_SERVER}/pets`);
      return dispatch({
        type: "GET_PETS",
        payload: json.data,
      });
    } catch ({ response }) {
      const { status } = await response;
      if (status === 404) await swal("Oops!", "No pets found", "error");
    }
  };
}
export function deletePost(id) {
  return async function (dispatch) {
    try {
      const json = await axios.put(`${REACT_APP_SERVER}/pets/delete/${id}`);

      return dispatch({
        type: DELETE_POST,
        payload: json.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
}

export function resetPets() {
  return {
    type: "RESET_PETS",
  };
}

export function getPetFilters(type) {
  type = type || "";
  return async function (dispatch) {
    try {
      const json = await axios(`${REACT_APP_SERVER}/pets?type=${type}`);
      return dispatch({
        type: "GET_PETS",
        payload: json.data,
      });
    } catch ({ response }) {
      const { status } = await response;
      if (status === 404) await swal("Oops!", "No pets found", "error");
    }
  };
}

export function getPetNames(searchName) {
  return async function (dispatch) {
    try {
      
      const { data } = await axios.get(`${REACT_APP_SERVER}/?name=${searchName}`)
      

      return dispatch({
        type: GET_NAMES,
        payload: data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function postPet(payload) {
  return async function (dispatch) {
    try {
      await axios.post(`${REACT_APP_SERVER}/pets`, payload);
    } catch (error) {
      return error;
    }
  };
}

export function getDetails(id) {
  return async function (dispatch) {
    try {
      const json = await axios(`${REACT_APP_SERVER}/pets/${id}`);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      return error;
      
    }
  };
}

export function deletePet(id) {
  return async function (dispatch) {
    try {
      const json = await axios.delete(`${REACT_APP_SERVER}/pets/${id}`);
      console.log('json', json)

      return dispatch({
        type: DELETE_PET,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function getLocation(type) {
  return async function (dispatch) {
    try {
      const { data } =  !type ?
                        await axios(`${REACT_APP_SERVER}/locations`) :
                        await axios(`${REACT_APP_SERVER}/locations?type=${type}`);

      return dispatch({
        type: "GET_LOCATION",
        payload: data.result,
      });
    } catch (error) {
      return error;
     
    }
  };
}

export function resetDetails() {
  return {
    type: "RESET_DETAILS",
  };
}

export function filterBySex(payload) {
  return {
    type: "FILTER_BY_SEX",
    payload,
  };
}

export function filterBySize(payload) {
  return {
    type: "FILTER_BY_SIZE",
    payload,
  };
}

export function orderByAge(payload) {
  return {
    type: "ORDER_BY_AGE",
    payload,
  };
}

export function filterByLocation(payload) {
  return {
    type: "FILTER_BY_LOCATION",
    payload,
  };
}

export function fullFilterAge(payload) {
  return {
    type: FULL_FILTER_AGE,
    payload,
  };
}

export function fullFilterSex(payload) {
  return {
    type: FULL_FILTER_SEX,
    payload,
  };
}

export function fullFilterLocation(payload) {
  return {
    type: FULL_FILTER_LOCATION,
    payload,
  };
}

export function fullFilterSize(payload) {
  return {
    type: FULL_FILTER_SIZE,
    payload,
  };
}

export function noFilterPets() {
  return { type: NO_FILTER_PETS };
}

export function addFavs(mail, id) {
  return async function (dispatch) {
    try {
      let favs = { favorites: [id] };
      const json = await axios.put(`${REACT_APP_SERVER}/user/addFavs/${mail}`, favs);
      return dispatch({
        type: FAVORITES,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function deleteFavs(mail, id) {
  return async function (dispatch) {
    try {
      let favs = { id: id };
      const json = await axios.put(`${REACT_APP_SERVER}/user/deleteFavs/${mail}`, favs);

      return dispatch({
        type: DELETE_FAVORITES,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}
export function saveId(id) {
  return async function (dispatch) {
    return dispatch({
      type: SAVE_ID,
      payload: id,
    });
  };
}

export function getFavs(mail) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${REACT_APP_SERVER}/user/Favs/${mail}`);
      return dispatch({
        type: GET_FAVORITES,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function getAllPets() {
  return async function (dispatch) {
    try {
      const json = await axios(`${REACT_APP_SERVER}/pets`);
      return dispatch({
        type: GET_ALL_PETS,
        payload: json.data,
      });
    } catch ({ response }) {
      const { status } = response;
      if (status === 404) swal("Oops!", "No pets found", "error");
    }
  };
}
export function getUsersBanned() {
  return async function (dispatch) {
    try {
      const json = await axios(`${REACT_APP_SERVER}/user/banned`);
      return dispatch({
        type: USERS_BANNED,
        payload: json.data,
      });
    } catch ({ response }) {
      const { status } = response;
      if (status === 404) swal("Oops!", "No users banned", "error");
    }
  };
}
export function UserRestore(mail) {
  return async function (dispatch) {
    try {
      const json = await axios.patch(`${REACT_APP_SERVER}/user/restore/${mail}`);
      return dispatch({
        type: USER_RESTORE,
        payload: json.data,
      });
    } catch ({ response }) {
      const { status } = response;
      if (status === 404) swal("Wow!", "User Restored", "success");
    }
  };
}
export function makeAdmin(mail) {
  return async function (dispatch) {
    try {
      const json = await axios.put(`${REACT_APP_SERVER}/user/adm/${mail}`);
        return dispatch({
        type: MAKE_ADMIN,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function postSupportForm(payload) {
  return async (dispatch) => {
    try {
      const json = await axios.post(`${REACT_APP_SERVER}/nodeMailer`, payload);
      if (json.status === 200) swal("OK", "Mail sent successfully", "success");
    } catch (error) {
      console.log(`Error enviando correo ${error}`);
      swal("Oops!", "Error sending the mail", "error");
    }
  };
}

export function postAdoption(payload) {
  return async (dispatch) => {
    try {
      const json = await axios.post(`${REACT_APP_SERVER}/adoption`, payload);
      if (json.status === 201)
        await swal("OK", "Adoption request created", "success");
    } catch (error) {
      console.log(`Error creando ${error}`);
      await swal("Oops!", "Error creating the Adoption request", "error");
    }
  };
}

export function adoptinHistoryAdmin() {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${REACT_APP_SERVER}/pets/inactivo`);
      return dispatch({
        type: ADOTION_HISTORY_ADMIN,
        payload: json.data,
      });
    } catch (error) {
     return error
    }
  };
}

export function updatePetsViews(id) {
  return async () => {
    try {
      await axios.patch(`${REACT_APP_SERVER}/pets/${id}`);
    } catch (error) {
      return error;
    }
  };
}

export function successStory(payload) {
  
  return async (dispatch) => {
    try {

      const json = await axios.post(`${REACT_APP_SERVER}/successstories`, payload);

      if (json.status === 201) await swal("Thank You", "", "success");
    } catch (error) {
      console.log(`Error creando ${error}`);
      await swal("Oops!", "Error in the Adoption request", "error");
    }
  };
}

export function getSuccessStory() {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${REACT_APP_SERVER}/successStories`);
      return dispatch({
        type: SUCCESS_STORY,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}
