/*
 * action types
 */

export const SEND_AUTH_DATA = 'SEND_AUTH_DATA'

export const SET_TOKEN = 'SET_TOKEN'

/*
 * action creators
 */

export const addUser = data => {
  return { type: SEND_AUTH_DATA, data }
}

export const setToken = token => {
  return { type: SET_TOKEN, token }
}

