/*
 * action types
 */

export const SEND_AUTH_DATA = 'SEND_AUTH_DATA'

/*
 * action creators
 */

export const addUser = (data) => {
  return { type: SEND_AUTH_DATA, data }
}

