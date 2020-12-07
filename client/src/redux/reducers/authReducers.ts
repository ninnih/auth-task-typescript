import { AuthState, authActions } from './../types/index';
import { SET_CURRENT_USER, USER_LOADING } from "../constants/index";
const isEmpty = require("is-empty");

const initialState: AuthState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

const authReducer = (state = initialState, action: authActions) => {
  const payload = action.payload;
  
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log(payload)
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        user: payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

export default authReducer;
