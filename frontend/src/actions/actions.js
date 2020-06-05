/*
 * action types
 */

export const SET_TOKEN = "SET_TOKEN";

export const GET_STATE = "GET_STATE";

export const GET_USER_NAME = "GET_USER_NAME";

export const GET_USER_PASS = "GET_USER_PASS";

export const GET_USER_EMAIL = "GET_USER_EMAIL";

/*
 * action creators
 */

export const setToken = (token) => {
  return { type: SET_TOKEN, token };
};

export const getUserName = (userName) => {
  return { type: GET_USER_NAME, userName };
};

export const getUserPass = (userPass) => {
  return { type: GET_USER_PASS, userPass };
};

export const getUserEmail = (userEmail) => {
  return { type: GET_USER_EMAIL, userEmail };
};

export const getState = () => {
  return { type: GET_STATE };
};
