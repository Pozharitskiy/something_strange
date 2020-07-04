import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import { GET_STATE } from "../actions/actions";

import authReducers from "./authReducers";

const initialState = {
  data: {
    currentUser: {
      userName: "",
      userEmail: "",
      userPass: "",
    },
  },
};
const rootReducer = (state = initialState, action) => {
  switch (action) {
    case GET_STATE:
      return { ...state };
    default:
      return state;
  }
};

export default combineReducers({
  rootReducer,
  authReducers,
  routing: routerReducer,
});
