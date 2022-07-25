import axios from "axios";

export function getUsers() {
  return async function (dispatch) {
    try {
      const json = await axios("http://localhost:3001/user");
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

export function getUserId(id) {
  return async function (dispatch) {
    try {
      const json = await axios(`http://localhost:3001/user/${id}`);
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
    await axios.post("http://localhost:3001/user" + payload);
  };
}

export function deleteUser(id) {
  return async function dispatch() {
    try {
      const json = await axios.delete(`http://localhost:3001/user/${id}`);
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
      const json = await axios("http://localhost:3001/pets");
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
        `http://localhost:3001/pets?type=${type}&name=${name}`
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
      const json = await axios(`http://localhost:3001/pets?name=${name}`);
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
    await axios.post(`http://localhost:3001/pets`, payload);
  };
}

export function getDetails(id) {
  return async function (dispatch) {
    try {
      const json = await axios(`http://localhost:3001/pets/${id}`);
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
      const json = await axios.delete(`http://localhost:3001/pets/${id}`);
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

