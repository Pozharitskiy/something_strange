/*
 * action types
 */

export const SET_TOKEN = "SET_TOKEN";

export const GET_STATE = "GET_STATE";

export const SET_USERS = "SET_USERS";

export const GET_USERS = "GET_USERS";

export const GET_USER_NAME = "GET_USER_NAME";

export const GET_USER_PASS = "GET_USER_PASS";

export const GET_USER_EMAIL = "GET_USER_EMAIL";

export const GET_USER_SECRET_WORD = "GET_USER_SECRET_WORD";


/*
 * action creators
 */

export const setToken = (token) => {
  return { type: SET_TOKEN, token };
};

export const setUsers = (users) => {
  return { type: SET_USERS, users }
}

export const getUsers = () => {
  return { type: GET_USERS }
}

export const getUserName = (userName) => {
  return { type: GET_USER_NAME, userName };
};

export const getUserPass = (userPass) => {
  return { type: GET_USER_PASS, userPass };
};

export const getUserEmail = (userEmail) => {
  return { type: GET_USER_EMAIL, userEmail };
};

export const getUserSecretWord = (userSecretWord) => {
  return { type: GET_USER_SECRET_WORD, userSecretWord };
};

export const getState = () => {
  return { type: GET_STATE };
};
