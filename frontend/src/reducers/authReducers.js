import { SET_AUTH_DATA, SET_TOKEN, LOGIN_USER } from "../actions/actions";
import createToken from "../utils/createToken";
import http from "../services/http";

const initialState = {
  userName: "",
  userEmail: "",
  userPass: "",
  token: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    // case SET_AUTH_DATA:
    //   // const token = createToken();
    //   const userData = { ...action.data, token: token };

    //   // localStorage.setItem("token", token);

    //   return { ...state, ...userData };

    case SET_TOKEN:
      localStorage.setItem("token", action.token);
      return { ...state, token: action.token };

    default:
      return {};
  }
};

export default authReducers;
