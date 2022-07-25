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
} from "../Actions/actionTypes";

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
      let ordenados = [];
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
        pets: [...ordenados],
      };

    case FILTER_BY_SIZE:
      const allPets = state.filteredPets;
      const filter =
        action.payload == "Any"
          ? allPets
          : allPets.filter((p) => p.size == action.payload);
      return {
        ...state,
        pets: [...filter],
      };

    case FILTER_BY_SEX: {
      const filterSex =
        action.payload === "Male"
          ? state.filteredPets.filter((e) => e.gender == "male")
          : state.filteredPets.filter((e) => e.gender == "female");
      return {
        ...state,
        pets: action.payload === "All" ? state.filteredPets : filterSex,
      };
    }

    case FILTER_BY_LOCATION:
      const location = state.pets;
      const filterLocation =
        action.payload === "All"
          ? location
          : location.filter((e) => e.location === action.payload);
      return {
        ...state,
        filteredPets: filterLocation,
      };

    default:
      return state;
  }
}

export default rootReducer;
