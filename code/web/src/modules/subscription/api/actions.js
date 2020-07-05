// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const SUBSCRIPTIONS_GET_LIST_REQUEST = 'SUBSCRIPTIONS/GET_LIST_REQUEST'
export const SUBSCRIPTIONS_GET_LIST_RESPONSE = 'SUBSCRIPTIONS/GET_LIST_RESPONSE'
export const SUBSCRIPTIONS_GET_LIST_FAILURE = 'SUBSCRIPTIONS/GET_LIST_FAILURE'
export const SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST = 'SUBSCRIPTIONS/GET_LIST_BY_USER_REQUEST'
export const SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE = 'SUBSCRIPTIONS/GET_LIST_BY_USER_RESPONSE'
export const SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE = 'SUBSCRIPTIONS/GET_LIST_BY_USER_FAILURE'
export const SUBSCRIPTIONS_GET_REQUEST = 'SUBSCRIPTIONS/GET_REQUEST'
export const SUBSCRIPTIONS_GET_RESPONSE = 'SUBSCRIPTIONS/GET_RESPONSE'
export const SUBSCRIPTIONS_GET_FAILURE = 'SUBSCRIPTIONS/GET_FAILURE'

// Actions
// Actions are methods that carry information payloads used to update our application's global store

// Get list of subscriptions
export function getList(isLoading = true) {
{/*This action starts off by updating the global store with a isLoading property and through the type,
   we can see what type of action is loading. */}
  return dispatch => {
    dispatch({
      type: SUBSCRIPTIONS_GET_LIST_REQUEST,
      error: null,
      isLoading
    })
{/* This Axios post, which is similar to a fetch request, is making a query to the GraphQL schema.
    It's making a query to the subscriptions category and requesting back the properties specified
    in the fields array. If the query is successful and we get back a 200 response code, then
    update the global store isLoading property to false and update the store with the list
    we are returned.  If it fails, the failure action type will return the associated error
    message but will also set the isLoading property to false.*/}
    return axios.post(routeApi, query({
      operation: 'subscriptions',
      fields: ['id', 'user { name, email }', 'crate { id, name, description }', 'createdAt']
    }))
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: SUBSCRIPTIONS_GET_LIST_RESPONSE,
            error: null,
            isLoading: false,
            list: response.data.data.subscriptions
          })
        } else {
          console.error(response)
        }
      })
      .catch(error => {
        dispatch({
          type: SUBSCRIPTIONS_GET_LIST_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}


// Get list of subscriptions by user
// This function operates in the same way as the getList function, but the difference is that is makes
// the query to the subscriptionsByUser query rather than the subscriptions query.  Both of these queries
// live in the same file, and return to us a GraphQLList, but this one will get us back the subscriptions
// that the user has.
export function getListByUser(isLoading = true) {
  return dispatch => {
    dispatch({
      type: SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST,
      error: null,
      isLoading
    })

    return axios.post(routeApi, query({
      operation: 'subscriptionsByUser',
      fields: ['id', 'user { name, email }', 'crate { id, name, description }', 'createdAt']
    }))
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE,
            error: null,
            isLoading: false,
            list: response.data.data.subscriptionsByUser
          })
        } else {
          console.error(response)
        }
      })
      .catch(error => {
        dispatch({
          type: SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Get single subscription
// This function operates similarly to the two functions above, but it will be getting back a single
// subscription rather than a list of subscriptions.  The particular subscription it is requesting to the subscription
// query is determined by the 'id' argument that is passed in.  If the query is successful, it will update the global
// store property 'subscription' and in that object it will be updating the 'item' property.
export function get(slug, isLoading = true) {
  return dispatch => {
    dispatch({
      type: SUBSCRIPTIONS_GET_REQUEST,
      isLoading
    })

    return axios.post(routeApi, query({
      operation: 'subscription',
      variables: { slug },
      fields: ['id', 'user { name, email }', 'crate { id, name, description }', 'createdAt']
    }))
      .then(response => {
        dispatch({
          type: SUBSCRIPTIONS_GET_RESPONSE,
          error: null,
          isLoading: false,
          item: response.data.data.subscription
        })
      })
      .catch(error => {
        dispatch({
          type: SUBSCRIPTIONS_GET_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Create subscription
// This function is one that allows a subscription to be created if the correct conditionals are met.
// It makes a request to the subscription mutations file and in particular, it requests from the 
// function subscriptionCreate.  It passes in an argument variable of 'crateId'.
export function create(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'subscriptionCreate',
      variables,
      fields: ['id']
    }))
  }
}

// Remove subscription
// This function allows us to remove a subscription by making a request to the subscriptionRemove
// mutation in the same file as the function above.  This passes in an argument variable of 'id' which will
// be used to specify the subscription to remove.
export function remove(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'subscriptionRemove',
      variables,
      fields: ['id']
    }))
  }
}
