import { SEND_AUTH_DATA } from "../actions/actions";
import createToken from "../utils/createToken";
import http from "../services/http";

const initialState = {
  userName: '',
  userEmail: '',
  userPass: ''
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SEND_AUTH_DATA:
      const token = createToken();
      const userData = { ...action.data, token: token };

      http(userData);
      localStorage.setItem('token', token);
      return { ...userData }
    default: return {}
  }
}

export default authReducers;