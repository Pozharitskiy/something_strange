import { SET_TOKEN } from "../actions/actions";

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

    default:
      return {};
  }
};

export default authReducers;
