import {
  SET_TOKEN,
  GET_USER_NAME,
  GET_USER_PASS,
  GET_USER_EMAIL,
} from "../actions/actions";

const initialState = {
  userName: "",
  userEmail: "",
  userPass: "",
  token: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      localStorage.setItem("token", action.token);
      return { ...state, token: action.token };

    case GET_USER_NAME:
      return {
        ...state,
        userName: action.userName,
      };
    case GET_USER_PASS:
      return {
        ...state,
        userPass: action.userPass,
      };
    case GET_USER_EMAIL:
      return {
        ...state,
        userEmail: action.userEmail,
      };

    default:
      return {};
  }
};

export default authReducers;
