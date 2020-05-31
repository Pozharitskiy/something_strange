/*
 * action types
 */

export const SET_TOKEN = "SET_TOKEN";

/*
 * action creators
 */

export const setToken = (token) => {
  return { type: SET_TOKEN, token };
};
