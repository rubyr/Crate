// Imports
import axios from "axios" // axios is a promise-based http client similar to fetch()
import { query, mutation } from "gql-query-builder" // graphql query builder
import cookie from "js-cookie" // javascript cookie manager

// App Imports
import { routeApi } from "../../../setup/routes" // api url 

// Actions Types (used for redux)
export const LOGIN_REQUEST = "AUTH/LOGIN_REQUEST"
export const LOGIN_RESPONSE = "AUTH/LOGIN_RESPONSE"
export const SET_USER = "AUTH/SET_USER"
export const LOGOUT = "AUTH/LOGOUT"

// Actions

// Set a user after login or using localStorage token
/**
 * @function
 * @param {string} token user's login token
 * @param {import("../Profile").User} user user object that holds the user's details
 * @returns {object} redux payload with type and user object
 */
export function setUser(token, user) { // this function sets up axios for use with the backend
  if (token) { 
    // set the axios headers to have the token within them
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}` 
  } else {
    // remove the auth token from the headers
    delete axios.defaults.headers.common["Authorization"] 
  }
  // returns redux action obj
  return { type: SET_USER, user } 
}

// Login a user using credentials
/**
 * @function
 * @param {object} userCredentials object holding the user's name and password
 * @param {boolean?} isLoading optional parameter that sets isLoading in redux state
 * @returns {(dispatch: (a: object) => void) => Promise<void>}
 */
export function login(userCredentials, isLoading = true) {
  return (dispatch) => { // returns a function that takes in a dispatch object
    dispatch({ // dispatch a login request to the redux store
      type: LOGIN_REQUEST,
      isLoading,
    })

    return axios
      .post( // post a query to the api for a login request
        routeApi,
        query({ // query builder from gql library
          operation: "userLogin",
          variables: userCredentials,
          fields: ["user {name, email, role}", "token"],
        })
      )
      .then((response) => { // after we get a response,
        let error = ""

        if (response.data.errors && response.data.errors.length > 0) { 
          error = response.data.errors[0].message // if we get back an error then store it
        } else if (response.data.data.userLogin.token !== "") {
          const token = response.data.data.userLogin.token // grab the token and user details from response
          const user = response.data.data.userLogin.user

          dispatch(setUser(token, user)) // store the current user token and object in store

          loginSetUserLocalStorageAndCookie(token, user) // save user details in cookies/LS
        }

        dispatch({
          type: LOGIN_RESPONSE, // dispatch a login response to the store
          error,
        })
      })
      .catch((error) => { // if there's any errors
        dispatch({
          type: LOGIN_RESPONSE, // dispatch a login response with an error msg to the store
          error: "Please try again",
        })
      })
  }
}

// Set user token and info in localStorage and cookie
/**
 * @function
 * @param {string} token user's login token
 * @param {import("../Profile").User} user user object with details
 * @returns {void}
 */
export function loginSetUserLocalStorageAndCookie(token, user) {
  // Update token
  window.localStorage.setItem("token", token) // stores the user token within localStorage
  window.localStorage.setItem("user", JSON.stringify(user)) // ls is contained in the user's browser

  // Set cookie for SSR
  cookie.set("auth", { token, user }, { path: "/" }) // as a backup, also sets a cookie in the user's browser
}

// Register a user
/**
 * @function
 * @param {*} userDetails contains the user's name, email, password
 * @returns {(dispatch: *) => Promise<import("axios").AxiosResponse<any>>} response with new user object
 */
export function register(userDetails) {
  return (dispatch) => {
    return axios.post(
      routeApi,
      mutation({ // post a mutation to the api for a signup with the user details
        operation: "userSignup",
        variables: userDetails,
        fields: ["id", "name", "email"],
      })
    )
  }
}

// Log out user and remove token from localStorage
/**
 * @function logout
 * @returns {(dispatch: import("redux").Dispatch) => void} redux dispatch event
 */
export function logout() {
  return (dispatch) => {
    // redux function
    logoutUnsetUserLocalStorageAndCookie() // remove user tokens from LS and cookies

    dispatch({
      type: LOGOUT, // dispatch logout event to store
    })
  }
}

// Unset user token and info in localStorage and cookie
/**
 * @function
 * @returns {void}
 */
export function logoutUnsetUserLocalStorageAndCookie() {
  // Remove token
  window.localStorage.removeItem("token")
  window.localStorage.removeItem("user")

  // Remove cookie
  cookie.remove("auth")
}

// Get user gender
/**
 * @returns {(dispatch: any) => Promise<import("axios").AxiosResponse<any>>} object with all genders 
 */
export function getGenders() {
  return (dispatch) => {
    return axios.post(
      routeApi, // dispatch a query to the api for the userGenders, getting back an id and a name for each
      query({
        operation: "userGenders",
        fields: ["id", "name"],
      })
    )
  }
}
