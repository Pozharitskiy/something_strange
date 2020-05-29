import { SEND_AUTH_DATA, SET_TOKEN } from "../actions/actions";
import createToken from "../utils/createToken";
import http from "../services/http";

const initialState = {
  userName: '',
  userEmail: '',
  userPass: '',
  token: null
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SEND_AUTH_DATA:
      const token = createToken();
      const userData = { ...action.data, token: token };

      http(userData);
      
      localStorage.setItem('token', token);
      return { ...state, ...userData }
    case SET_TOKEN:
      return { ...state, token: action.token }
    default: return {}
  }
}

export default authReducers;