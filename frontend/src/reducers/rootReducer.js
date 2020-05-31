import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

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
    case "GET_WHOLE_STATE":
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
