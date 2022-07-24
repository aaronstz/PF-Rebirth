import {
    GET_PETS,
    GET_DETAIL,
  } from "../actions/actionTypes"



const initialState = {
    pets: [],
    filteredPets= [],
    detail=[],
    user=[]
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PETS:
        return {
          ...state,
          pets: action.payload,
        };
      case GET_DETAIL:
        return{
            ...state,
            detail: action.payload,
        }
        
     
     default:
      return state;

    }
}

export default rootReducer;