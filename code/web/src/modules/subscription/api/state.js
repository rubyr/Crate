// Imports

// App Imports
import {
  SUBSCRIPTIONS_GET_LIST_REQUEST,
  SUBSCRIPTIONS_GET_LIST_RESPONSE,
  SUBSCRIPTIONS_GET_LIST_FAILURE,
  SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST,
  SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE,
  SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE,
  SUBSCRIPTIONS_GET_REQUEST,
  SUBSCRIPTIONS_GET_RESPONSE,
  SUBSCRIPTIONS_GET_FAILURE,
} from './actions'

// Subscriptions list

// Initial State
// This sets the default state of the subscriptions property from the global store.
const subscriptionsInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
// These are the reducers related to the subscriptions actions.  The first case 'SUBSCRIPTIONS_GET_LIST_REQUEST'
// will change the global store isLoading to true.  The second case 'SUBSCRIPTIONS_GET_LIST_RESPONSE' will change
// isLoading to false and return the list from the payload into the list property of the global state.  The last case
// 'SUBSCRIPTIONS_GET_LIST_FAILURE' will change isLoading to false and update the error property of the global state
// with the error payload.
export const subscriptions = (state = subscriptionsInitialState, action) => {
  switch (action.type) {
    case SUBSCRIPTIONS_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case SUBSCRIPTIONS_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case SUBSCRIPTIONS_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}

// Subscriptions list by user

// Initial State
// This sets the default state of the subscriptionsByUser property from the global store.
const subscriptionsByUserInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
// These are the reducers related to the subscriptionsByUser actions.  The first case 'SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST'
// will change the global store isLoading to true.  The second case 'SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE' will change
// isLoading to false and return the list from the payload into the list property of the global state.  The last case
// 'SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE' will change isLoading to false and update the error property of the global state
// with the error payload.
export const subscriptionsByUser = (state = subscriptionsByUserInitialState, action) => {
  switch (action.type) {
    case SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}

// Single subscription

// Initial State
// This sets the default state of the subscription property from the global store.  As we can see it's initial value
// is an object rather than an array like the previous two, because this property will be only one item/object rather
// than an array of items/objects.
const subscriptionInitialState = {
  isLoading: false,
  error: null,
  item: {}
}

// State
// These are the reducers related to the subscription actions.  The first case 'SUBSCRIPTIONS_GET_REQUEST'
// will change the global store isLoading to true.  The second case 'SUBSCRIPTIONS_GET_RESPONSE' will change
// isLoading to false and return the item from the payload into the item property of the global state.  The last case
// 'SUBSCRIPTIONS_GET_FAILURE' will change isLoading to false and update the error of the global state
// with the error payload.
export const subscription = (state = subscriptionInitialState, action) => {
  switch (action.type) {
    case SUBSCRIPTIONS_GET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case SUBSCRIPTIONS_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        item: action.item
      }

    case SUBSCRIPTIONS_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}