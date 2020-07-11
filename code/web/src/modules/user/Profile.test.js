import React from "react"
import Profile from "./Profile"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Provider } from "react-redux"
import { createStore, compose } from "redux"
import { rootReducer } from "../../setup/store"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history";
import { SET_USER } from "./api/actions"
import { logout } from "./api/actions";
jest.mock("./api/actions");

const renderTestWrapper = () => {
  const store = createStore(rootReducer, compose())
  const user = {
    id: 1,
    name: "jack jackson",
    bio: "i love clothes so much i bought all of them",
    email: "jackj@clotheslovers.co",
    address: "4444 Doiwannacare St NYC NY 98210",
    image: "/this/is/not/a/file.jpg"
  }
  store.dispatch({ type: SET_USER, user })
  const history = createMemoryHistory();
  return {...render(
    <Router history={history}>
      <Provider store={store}>
        <Profile />
      </Provider>
    </Router>
  ), history, store}
}

describe('Profile', () => {
  it("should render without crashing", () => {
    renderTestWrapper()
  })

  it("should load a header with an edit button, and a logout button", () => {
    const { getByText } = renderTestWrapper()
    expect(getByText("My profile")).toBeInTheDocument()
    expect(getByText("mode_edit")).toBeInTheDocument() // edit button
    expect(getByText("Logout")).toBeInTheDocument()
  })

  it("should load all available user data", () => {
    const { getByText, getByAltText } = renderTestWrapper()
    expect(getByText("jack jackson")).toBeInTheDocument()
    expect(getByText("i love clothes so much i bought all of them")).toBeInTheDocument()
    expect(getByText("jackj@clotheslovers.co")).toBeInTheDocument()
    expect(getByText("4444 Doiwannacare St NYC NY 98210")).toBeInTheDocument()
    expect(getByAltText("jack jackson")).toBeInTheDocument() // user img
  })

  it("should redirect user when edit button is clicked", () => {
    const { getByText, history } = renderTestWrapper()
    fireEvent.click(getByText("mode_edit"));
    expect(history.location.pathname).toBe("/user/profile/edit");
  })

  it("should log the user out when the logout button is clicked", () => {
    const logoutMock = jest.fn(() => ({ type: "AUTH/LOGOUT" }));
    logout.mockImplementation(logoutMock);
    const { getByText } = renderTestWrapper()
    fireEvent.click(getByText("Logout"));
    expect(logoutMock).toHaveBeenCalled();
  })
})
