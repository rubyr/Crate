import React from "react"
import ProfileEditor from "./ProfileEditor"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Provider } from "react-redux"
import { createStore, compose } from "redux"
import { rootReducer } from "../../setup/store"
import { MemoryRouter } from "react-router-dom"
import { SET_USER } from "./api/actions"
import { update as updateProfile } from "./api/actions";
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
  return render(
    <MemoryRouter>
      <Provider store={store}>
        <ProfileEditor />
      </Provider>
    </MemoryRouter>
  )
}

describe('ProfileEditor', () => {
  it("should render without crashing", () => {
    renderTestWrapper()
  })

  it("should load a form for entering user data", () => {
    const { getByPlaceholderText, getByText } = renderTestWrapper()
    expect(getByText("Edit Profile")).toBeInTheDocument()
    expect(getByPlaceholderText("Name")).toBeInTheDocument()
    expect(getByPlaceholderText("Bio")).toBeInTheDocument()
    expect(getByPlaceholderText("Email")).toBeInTheDocument()
    expect(getByPlaceholderText("Address")).toBeInTheDocument()
    expect(getByText("Save")).toBeInTheDocument()
  })

  it("should prepopulate form with user data from store", () => {
    const { getByDisplayValue, getByAltText } = renderTestWrapper()
    expect(getByDisplayValue("jack jackson")).toBeInTheDocument()
    expect(getByDisplayValue("i love clothes so much i bought all of them")).toBeInTheDocument()
    expect(getByDisplayValue("jackj@clotheslovers.co")).toBeInTheDocument()
    expect(getByDisplayValue("4444 Doiwannacare St NYC NY 98210")).toBeInTheDocument()
    expect(getByAltText("User Image")).toBeInTheDocument()
  })

  it("should update its state when fields are changed", () => {
    const { getByDisplayValue, getByPlaceholderText } = renderTestWrapper()
    fireEvent.change(getByPlaceholderText("Name"), {target: {value: "sbeven jeven"}})
    expect(getByDisplayValue("sbeven jeven")).toBeInTheDocument()
  })

  it('should call api/actions.js/update() with new user info when save is clicked', () => {
    const mockUpdate = jest.fn((user) => ({type: "", data: {}, then: () => ({catch: () => ({then: () => {}})})}))
    updateProfile.mockImplementation(mockUpdate)
    const { getByText, getByPlaceholderText } = renderTestWrapper()
    fireEvent.change(getByPlaceholderText("Name"), {target: {value: "sbeven jeven"}})
    fireEvent.click(getByText("Save"))
    expect(mockUpdate).toHaveBeenCalled()
  })
})
