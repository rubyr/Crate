// App Imports
import { isEmpty } from '../../../setup/helpers'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'

// Initial State
export const userInitialState = {
  error: null, // string that describes what is happening with the app
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
  switch (action.type) { // switches through the action's type as defined by the actions imported on line 3
    case SET_USER: // setting the user details
      return {
        ...state, // hydrate the rest of the state
        isAuthenticated: !isEmpty(action.user), // set to a boolean depending on whether or not user obj is empty
        details: action.user, // set to user details
      }

    case LOGIN_REQUEST: // requesting a login from the api
      return {
        ...state,
        error: null, // set error message to be nothing
        isLoading: action.isLoading // set loading to action payload (usually true)
      }

    case LOGIN_RESPONSE: // get a response from api
      return {
        ...state,
        error: action.error, // set error message to be action payload
        isLoading: false // set loading to false
      }

    case LOGOUT: // logging out, reset all user details
      return {
        ...state,
        error: null, // set error message to be nothing
        isLoading: false, // set loading to false
        isAuthenticated: false, // set authenticated to false
        details: null // remove user details from state
      }

    default: // if the action type doesn't match with any of the cases
      return state // do nothing
  }
}