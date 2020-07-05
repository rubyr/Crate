// App Imports
import { isEmpty } from '../../../setup/helpers'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'

// Initial State
export const userInitialState = {
  error: null, // string that describes what is happening
  isLoading: false,
  isAuthenticated: false,
  details: null // user details
}

// State (Redux reducer)
/**
 * @function
 * @param {object} state - current global state
 * @param {object} action - action object with type and payload
 * @returns {object} updated state
 */
export default (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER: // setting the user details
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      }

    case LOGIN_REQUEST: // requesting a login from the api
      return {
        ...state,
        error: null,
        isLoading: action.isLoading
      }

    case LOGIN_RESPONSE: // get a response from api
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    case LOGOUT: // logging out, reset all user details
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null
      }

    default:
      return state
  }
}