import { SEND_AUTH_DATA, SET_TOKEN, LOGIN_USER } from "../actions/actions";
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

      http.post(userData);

      localStorage.setItem('token', token);

      return { ...state, ...userData }

    case SET_TOKEN:
      return { ...state, token: action.token }

    case LOGIN_USER:
      const loginData = { ...action.data };
      http.login(loginData);

      return { ...state, ...loginData }

    default: return {}
  }
}

export default authReducers;