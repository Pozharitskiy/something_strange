import {
  SET_TOKEN,
  GET_USER_NAME,
  GET_USER_PASS,
  GET_USER_EMAIL,
  GET_USER_SECRET_WORD
} from "../actions/actions";

const initialState = {
  userName: "",
  userEmail: "",
  userPass: "",
  userSecretWord: "",
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
    case GET_USER_SECRET_WORD:
      return {
        ...state,
        userSecretWord: action.userSecretWord,
      }
    default:
      return {};
  }
};

export default authReducers;
