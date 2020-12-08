import { AuthState } from './../types/index';
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { 
  GET_ERRORS, 
  SET_CURRENT_USER, 
  USER_LOADING,
  REMOVE_CURRENT_USER 
} from "../constants/index";

export const registerUser = (userData: any, history: any) => (dispatch: any) => {
  axios
    .post("http://localhost:8000/api/users/register", userData)
    .then(res => {
      history.push("/login")}) 
    .catch(err =>{
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })}
    );
};

export const loginUser = (userData: any, history: any) => (dispatch: any) => {
  axios
    .post("http://localhost:8000/api/users/login", userData)
    .then(res => {
      const { token } = res.data;

      localStorage.setItem("jwtToken", token);
      setAuthToken(token);

      const decoded: AuthState = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      
      history.push('/dashboard')
    })
    .catch(err =>{
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })}
    );
};

export const setCurrentUser = (decoded: AuthState) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

export const logoutUser = () => {
  localStorage.removeItem("jwtToken");

  setAuthToken(false);

  return {
    type: REMOVE_CURRENT_USER,
  };
};