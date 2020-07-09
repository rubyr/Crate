import React from "react";
import jest from "jest";
import ProfileEditor from "./ProfileEditor"
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import { Provider } from "react-redux";
import { createStore } from "redux";

describe('ProfileEditor', () => {
  it("should render without crashing", () => {
    render(<Provider store={/* help */}><ProfileEditor /></Provider>);
  })

  it("should load a form for entering user data", () => {
    const { getByPlaceholderText } = render(<ProfileEditor />)
    expect(getByPlaceholderText("Name")).toBeInTheDocument();
  })
})
