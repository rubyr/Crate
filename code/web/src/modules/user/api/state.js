// App Imports
import { isEmpty } from '../../../setup/helpers'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT, GET_SHIPMENTS_REQUEST, GET_SHIPMENTS_RESPONSE, GET_SHIPMENTS_FAILURE } from './actions'


// Initial State
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null
}

// State
export const user = (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      }

    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: action.isLoading
      }

    case LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    case LOGOUT:
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

// Initial State
export const shipmentsInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  list: null
}

export const shipments = (state = shipmentsInitialState, action) => {
  switch (action.type) {
    case GET_SHIPMENTS_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }
    case GET_SHIPMENTS_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case GET_SHIPMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}