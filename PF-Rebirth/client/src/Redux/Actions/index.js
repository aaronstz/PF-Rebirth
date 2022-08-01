import axios from "axios";
import swal from "sweetalert";
import {
  FULL_FILTER_AGE,
  FULL_FILTER_LOCATION,
  FULL_FILTER_SEX,
  FULL_FILTER_SIZE,
  GET_OWNER_ADOPTION,
  GET_USER_ADOPTION,
  NO_FILTER_PETS,
} from "./actionTypes";

const SERVER = "http://localhost:3001";

export function loginUser(credentials){
  return async function(dispatch) {
    try {
      const json = await axios.post(`${SERVER}/login`, credentials);
      return dispatch({
        type : "LOGIN_USER",
        payload : json.data
      })
    } catch (error) {
      swal("Sorry", "Invalid username or password", "error")
    }

  }
}
export function getOwnerAdoption(id){
  return async function (dispatch) {
    try {
      const json = await axios(`${SERVER}/adoption/owner`);
      return dispatch({
        type: GET_OWNER_ADOPTION,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      alert("No user found");
    }
  };
}
export function getAdopterAdoption(id){
  return async function (dispatch) {
    try {
      const json = await axios(`${SERVER}/user`);
      return dispatch({
        type: GET_USER_ADOPTION,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      alert("No user found");
    }
  };
}

export function getUsers() {
  return async function (dispatch) {
    try {
      const json = await axios(`${SERVER}/user`);
      return dispatch({
        type: "GET_USER",
        payload: json.data,
      });
    } catch ({response}) {
      const { status } = response;
      if(status === 404) swal("Oops!", "No users found", "error")
    }
  };
}

export function postMercadoPago(donacion){
  return async function(dispatch){
      try {
        let data = await axios.post("http://localhost:3001/donations", donacion)
        return dispatch({type : "MERCADO_PAGO", data})
      } catch (error) {
        console.log('error', error)
      }
  }
}

export function getUserId(id) {
  return async function (dispatch) {
    try {
      const json = await axios(`${SERVER}/user/${id}`);
      return dispatch({
        type: "GET_USER_ID",
        payload: json.data,
      });
    } catch (error) {
      swal("Sorry", "No pets found", "error")
    }
  };
}

export function postUser(payload) {
  return async function (dispatch) {
    try {
      const { status } = await axios.post(`${SERVER}/user`, payload);
      if(status === 201){
        swal("WooHooo!", "User created successfully", "success")
        .then(() => window.history.back());
      }
    } catch (error) {
      const { response } = error;
      if(response.status === 409){
        swal("Sorry", "Your email is already registered", "error")
      }
    }
  };
}

export function postUserGoogle(payload) {
  return async function (dispatch) {
    try {
      const { status } = await axios.post(`${SERVER}/user`, payload);
      if(status === 201){
        swal("WooHooo!", "User created successfully", "success")
        .then(() => window.history.back());
      }
    } catch (error) {
      console.log('error', error)
    }
  };
}

export function updateUser(email, payload) {
  return async function (dispatch) {
    try {
      await axios.put(`${SERVER}/user/${email}`, payload);
    } catch (error) {
      console.log(error)
    }
  }
}

export function deleteUser(id) {
  return async function dispatch() {
    try {
      const json = await axios.delete(`${SERVER}/user/${id}`);
      return dispatch({
        type: "DELETE_USER",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      alert("Could not delete user");
    }
  };
}

export function getPets() {
  return async function (dispatch) {
    try {
      const json = await axios(`${SERVER}/pets`);
      return dispatch({
        type: "GET_PETS",
        payload: json.data,
      });
    } catch ({response}) {
      const { status } = response;
      if(status === 404) swal("Oops!", "No pets found", "error")
    }
  };
}

export function getPetFilters(type) {
  type = type || "";
  return async function (dispatch) {
    try {
      const json = await axios(
        `${SERVER}/pets?type=${type}`
      );
      return dispatch({
        type: "GET_PETS",
        payload: json.data,
      });
    } catch ({response}) {
      const { status } = response;
      if(status === 404) swal("Oops!", "No pets found", "error")
    }
  };
}

export function getPetNames(type, name) {
  return async function (dispatch) {
    try {
      const json = await axios(`${SERVER}/pets?type=${type}&name=${name}`);
      return dispatch({
        type: "GET_NAMES",
        payload: json.data,
      });
    } catch ({response}) {
      const { status } = response;
      if(status === 404) swal("Oops!", "No pets found", "error")
    }
  };
}

export function postPet(payload) {
  return async function (dispatch) {
    await axios.post(`${SERVER}/pets`, payload);
  };
}

export function getDetails(id) {
  return async function (dispatch) {
    try {
      const json = await axios(`${SERVER}/pets/${id}`);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      alert("No pet found");
    }
  };
}

export function deletePet(id) {
  return async function (dispatch) {
    try {
      const json = await axios.delete(`${SERVER}/pets/${id}`);
      return dispatch({
        type: "DELETE_PET",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      alert("Could not delete pet");
    }
  };
}

export function getLocation() {
  return async function (dispatch) {
    try {
      const json = await axios(`${SERVER}/pets/location`);
      return dispatch({
        type: "GET_LOCATION",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      alert("No location found");
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
