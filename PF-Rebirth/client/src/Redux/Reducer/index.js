import {
  GET_PETS,
  GET_DETAILS,
  GET_USER,
  GET_NAMES,
  GET_USER_ID,
  DELETE_PET,
  DELETE_USER,
  RESET_DETAILS,
  ORDER_BY_AGE,
  FILTER_BY_SIZE,
  FILTER_BY_LOCATION,
  POST_PET,
  POST_USER,
  FILTER_BY_SEX,
} from "../actions/actionTypes";

const initialState = {
  pets: [],
  filteredPets: [],
  detail: [],
  user: [],
  userDetail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PETS:
      return {
        ...state,
        pets: action.payload,
        filteredPets: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_NAMES:
      return {
        ...state,
        pets: action.payload,
      };
    case POST_PET:
      return {
        ...state,
      };
    case GET_USER_ID:
      return {
        ...state,
        userDetail: action.payload,
      };

    case POST_USER:
      return {
        ...state,
      };

    case ORDER_BY_AGE:
      let ordenados;
      if (action.payload === "age") {
        ordenados = state.pets;
      } else if (action.payload === "old") {
        ordenados = state.filteredPets.sort((a, b) => {
          return b.age - a.age;
        });
      } else if (action.payload === "young") {
        ordenados = state.filteredPets.sort((a, b) => {
          return a.age - b.age;
        });
      }
      return {
        ...state,
        filteredPets: [...ordenados],
      };

    case FILTER_BY_SIZE:
      const allPets = state.pets;
      const filter =
        action.payload === "all"
          ? allPets
          : allPets.filter((pet) => pet.size === action.payload);
      return {
        ...state,
        filteredPets: filter,
      };

    case FILTER_BY_SEX:
      const allSex = state.pets;
      const filterSex =
        action.payload === "All"
          ? allSex
          : allSex.filter((e) => e.genre === action.payload);
      return {
        ...state,
        filteredPets: filterSex,
      };
    default:
      return state;
  }
}

export default rootReducer;
