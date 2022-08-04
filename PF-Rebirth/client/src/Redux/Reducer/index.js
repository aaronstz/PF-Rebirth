import {
  GET_PETS,
  GET_TYPES,
  GET_DETAILS,
  GET_USER,
  GET_NAMES,
  GET_USER_ID,
  ORDER_BY_AGE,
  FILTER_BY_SIZE,
  FILTER_BY_LOCATION,
  POST_PET,
  POST_USER,
  FILTER_BY_SEX,
  FULL_FILTER_AGE,
  NO_FILTER_PETS,
  FULL_FILTER_SEX,
  FULL_FILTER_LOCATION,
  FULL_FILTER_SIZE,
  MERCADO_PAGO,
  GET_LOCATION,
  LOGIN_USER,
  LOGOUT_USER,
  FAVORITES,
  DELETE_FAVORITES,
  GET_FAVORITES,
  GET_ALL_PETS,
  UPDATE_PROFILE,
  RESET_DETAILS,
  RESET_PETS
} from "../Actions/actionTypes";

const initialState = {
  activeUser : null,
  filterSex: "All",
  filterAge: "age",
  filterSize: "Any",
  filterLocation: "All",
  pets: [],
  filteredPets: [],
  detail: [],
  user: [],
  userDetail: [],
  typePet: [],
  location:[],
  favorite: [],
  allPets : [],
  profileView:{},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PETS:
      return{
        ...state,
        allPets: action.payload
      }
    case LOGIN_USER:

      return {
        ...state,
        activeUser : action.payload
      }
    case LOGOUT_USER:
      localStorage.clear()
      return {
        ...state,
        activeUser : null
      }
    case UPDATE_PROFILE:
      return{
        ...state,
        profileView:action.payload
      };
    case GET_TYPES:
      return {
        ...state,
        typePet: action.payload,
      };
    case GET_PETS:

      ///////////////////////////////////filtrando ordenados por tamaño/////////////////////////
      let ordenado = [];
      ordenado =
        state.filterSize === "Any"
          ? action.payload
          : action.payload.filter((p) => p.size === state.filterSize);

      ///////////////////////////////////filtrando ordenados por sexo///////////////////////////////
      ordenado =
        state.filterSex === "All"
          ? ordenado
          : ordenado.filter((e) => e.gender === state.filterSex);
      ///////////////////////////////////////filtrando por locacion///////////////////////////
      ordenado =
        state.filterLocation === "All"
          ? ordenado
          : ordenado.filter((e) => e.location === state.filterLocation);

      ///////////////////////////ordenando "ordenados" por edad///////////////////////
       if (state.filterAge === "old") {
        ordenado = ordenado.sort((a, b) => {
          return b.age - a.age;
        });
      } 
      if (state.filterAge === "young") {
        ordenado = ordenado.sort((a, b) => {
          return a.age - b.age;
        });
      }
      return {
        ...state,
        pets: action.payload,
        filteredPets:[...ordenado]

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

    case RESET_DETAILS:
      return{
        ...state,
        detail: [],
        allPets : [],

      }
    case RESET_PETS:
      return{
        ...state,
        pets:[],
        filteredPets: [],
      }
    case GET_NAMES:
   
      ///////////////////////////////////filtrando ordenados por tamaño/////////////////////////
      let ordenadoName = [];
      ordenadoName =
        state.filterSize === "Any"
          ? action.payload
          : action.payload.filter((p) => p.size === state.filterSize);

      ///////////////////////////////////filtrando ordenados por sexo///////////////////////////////
      ordenadoName =
        state.filterSex === "All"
          ? ordenadoName
          : ordenadoName.filter((e) => e.gender === state.filterSex);
      ///////////////////////////////////////filtrando por locacion///////////////////////////
      ordenadoName =
        state.filterLocation === "All"
          ? ordenadoName
          : ordenadoName.filter((e) => e.location === state.filterLocation);

      ///////////////////////////ordenando "ordenados" por edad///////////////////////
       if (state.filterAge === "old") {
        ordenadoName = ordenadoName.sort((a, b) => {
          return b.age - a.age;
        });
      } 
      if (state.filterAge === "young") {
        ordenadoName = ordenadoName.sort((a, b) => {
          return a.age - b.age;
        });
      }
      return {
        ...state,
        pets: action.payload,
        filteredPets:[...ordenadoName]
        
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
    case MERCADO_PAGO:
      return {
        ...state,
      };
    case GET_LOCATION:
        return{
          ...state,
          location: action.payload
        }

    case ORDER_BY_AGE:
      return { ...state, filterAge: action.payload };

    case FILTER_BY_SIZE:
      return { ...state, filterSize: action.payload };

    case FILTER_BY_SEX:
      return { ...state, filterSex: action.payload };

    case FILTER_BY_LOCATION:
      return { ...state, filterLocation: action.payload };
    case NO_FILTER_PETS:
      return { ...state, filteredPets: state.pets };
    case FULL_FILTER_AGE:
      ///////////////////////////////////filtrando ordenados por tamaño/////////////////////////
      let ordenadoAge = [];
      ordenadoAge =
        state.filterSize === "Any"
          ? state.pets
          : state.pets.filter((p) => p.size === state.filterSize);

      ///////////////////////////////////filtrando ordenados por sexo///////////////////////////////
      ordenadoAge =
        state.filterSex === "All"
          ? ordenadoAge
          : ordenadoAge.filter((e) => e.gender === state.filterSex);
      ///////////////////////////////////////filtrando por locacion///////////////////////////
      ordenadoAge =
        state.filterLocation === "All"
          ? ordenadoAge
          : ordenadoAge.filter((e) => e.location === state.filterLocation);

      ///////////////////////////ordenando "ordenados" por edad///////////////////////
       if (action.payload === "old") {
        ordenadoAge = ordenadoAge.sort((a, b) => {
          return b.age - a.age;
        });
      } 
      if (action.payload === "young") {
        ordenadoAge = ordenadoAge.sort((a, b) => {
          return a.age - b.age;
        });
      }
      return { ...state, filteredPets: [...ordenadoAge] };


    case FULL_FILTER_SEX:
     ///////////////////////////////////filtrando ordenados por tamaño/////////////////////////
     let ordenadoSex = [];
     ordenadoSex =
       state.filterSize === "Any"
         ? state.pets
         : state.pets.filter((p) => p.size === state.filterSize);

     ///////////////////////////////////filtrando ordenados por sexo///////////////////////////////
     ordenadoSex =
       action.payload === "All"
         ? ordenadoSex
         : ordenadoSex.filter((e) => e.gender === action.payload);
     ///////////////////////////////////////filtrando por locacion///////////////////////////
     ordenadoSex =
       state.filterLocation === "All"
         ? ordenadoSex
         : ordenadoSex.filter((e) => e.location === state.filterLocation);

     ///////////////////////////ordenando "ordenados" por edad///////////////////////
      if (state.filterAge === "old") {
       ordenadoSex = ordenadoSex.sort((a, b) => {
         return b.age - a.age;
       });
     } 
     if (state.filterAge === "young") {
       ordenadoSex = ordenadoSex.sort((a, b) => {
         return a.age - b.age;
       });
     }
     return { ...state, filteredPets: [...ordenadoSex] };



    case FULL_FILTER_LOCATION:

    ///////////////////////////////////filtrando ordenados por tamaño/////////////////////////
    let ordenadoLocation = [];
    ordenadoLocation =
      state.filterSize === "Any"
        ? state.pets
        : state.pets.filter((p) => p.size === state.filterSize);

    ///////////////////////////////////filtrando ordenados por sexo///////////////////////////////
    ordenadoLocation =
      state.filterSex === "All"
        ? ordenadoLocation
        : ordenadoLocation.filter((e) => e.gender === state.filterSex);
    ///////////////////////////////////////filtrando por locacion///////////////////////////
    ordenadoLocation =
      action.payload === "All"
        ? ordenadoLocation
        : ordenadoLocation.filter((e) => e.location === action.payload);

    ///////////////////////////ordenando "ordenados" por edad///////////////////////
     if (state.filterAge === "old") {
      ordenadoLocation = ordenadoLocation.sort((a, b) => {
        return b.age - a.age;
      });
    } 
    if (state.filterAge === "young") {
      ordenadoLocation = ordenadoLocation.sort((a, b) => {
        return a.age - b.age;
      });
    }
    return { ...state, filteredPets: [...ordenadoLocation] };



    case FULL_FILTER_SIZE:
       ///////////////////////////////////filtrando ordenados por tamaño/////////////////////////
       let ordenadoSize = [];
       ordenadoSize =
         action.payload === "Any"
           ? state.pets
           : state.pets.filter((p) => p.size === action.payload);
 
       ///////////////////////////////////filtrando ordenados por sexo///////////////////////////////
       ordenadoSize =
         state.filterSex === "All"
           ? ordenadoSize
           : ordenadoSize.filter((e) => e.gender === state.filterSex);
       ///////////////////////////////////////filtrando por locacion///////////////////////////
       ordenadoSize =
         state.filterLocation === "All"
           ? ordenadoSize
           : ordenadoSize.filter((e) => e.location === state.filterLocation);
 
       ///////////////////////////ordenando "ordenados" por edad///////////////////////
        if (state.filterAge === "old") {
         ordenadoSize = ordenadoSize.sort((a, b) => {
           return b.age - a.age;
         });
       } 
       if (state.filterAge === "young") {
         ordenadoSize = ordenadoSize.sort((a, b) => {
           return a.age - b.age;
         });
       }
       return { ...state, filteredPets: [...ordenadoSize] };


       case FAVORITES: 
       return{
        ...state,
        favorite: action.payload
       }
       case DELETE_FAVORITES:
        return{
          ...state,
          favorite: action.payload
        }
        case GET_FAVORITES:
          return{
            ...state,
            favorite: action.payload
          }

    default:
      return state;
  }
}

export default rootReducer;
