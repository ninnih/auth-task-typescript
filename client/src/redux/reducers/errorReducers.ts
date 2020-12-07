import { authActions } from './../types/index';
import { GET_ERRORS } from "../constants/index";

const initialState: any = {};

const errorReducer = (state = initialState, action: authActions) => {
  const payload = action.payload;

  switch (action.type) {
    case GET_ERRORS:
      console.log(payload)
      return payload;
    default:
      return state;
  }
}

export default errorReducer;