import axios from "axios";
import {
  FULL_FILTER_AGE,
  FULL_FILTER_LOCATION,
  FULL_FILTER_SEX,
  FULL_FILTER_SIZE,
  NO_FILTER_PETS,
} from "./actionTypes";

const SERVER = "http://localhost:3001";

export function getUsers() {
  return async function (dispatch) {
    try {
      const json = await axios(`${SERVER}/user`);
      return dispatch({
        type: "GET_USER",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      alert("No user found");
    }
  };
}
export function mP() {
  return async function (payload) {
    try {
      await axios(`${SERVER}/mercadoPago` , payload);
      return ({
        type: "MERCADO_PAGO",
        payload
      });
    } catch (error) {
      console.log(error);
      alert("No funca");
    }
  };
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
      console.log(error);
      alert("No user found");
    }
  };
}

export function postUser(payload) {
  return async function (dispatch) {
    await axios.post(`${SERVER}/user`, payload);
  };
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
    } catch (error) {
      console.log(error);
      alert("No pets found :/");
    }
  };
}

export function getPetFilters(type, name) {
  type = type || "";
  name = name || "";
  return async function (dispatch) {
    try {
      const json = await axios(

        `${SERVER}/pets?type=${type}`
      );
      return dispatch({
        type: "GET_PETS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      alert("No pets found :/");
    }
  };
}

export function getPetNames(name) {
  return async function (dispatch) {
    try {
      const json = await axios(`${SERVER}/pets?name=${name}`);
      return dispatch({
        type: "GET_NAMES",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      alert("No pet found with that name :/");
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
