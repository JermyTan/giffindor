import React from "react";
import ReactDom from "react-dom";
import AuthButton from "../AuthButton";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UserContext } from "../../../../context-providers/UserProvider";
import { AuthContext } from "../../../../context-providers/AuthProvider";
import { create } from "react-test-renderer";

afterEach(cleanup);

function generateAuthButton(loggedIn: boolean = false) {
  // create mock
  const login = jest.fn();
  const logout = jest.fn();
  const mockUser = { uid: "123", displayName: "Jeremy" };

  const authButton = (
    <UserContext.Provider
      value={{ user: loggedIn ? mockUser : null, setUser: jest.fn() }}
    >
      <AuthContext.Provider value={{ login: login, logout: logout }}>
        <AuthButton className="header-field" />
      </AuthContext.Provider>
    </UserContext.Provider>
  );

  return {
    authButton: authButton,
    login: login,
    logout: logout,
  };
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<AuthButton />, div);

  const authButtonWithLoggedOutState = generateAuthButton().authButton;
  ReactDom.render(authButtonWithLoggedOutState, div);

  const authButtonWithLoggedInState = generateAuthButton(true).authButton;
  ReactDom.render(authButtonWithLoggedInState, div);
});

it("renders login state correctly", () => {
  const { authButton } = generateAuthButton();
  const { getByTestId } = render(authButton);

  expect(getByTestId("auth-button")).toHaveTextContent("Login");
});

it("renders logout state correctly", () => {
  const { authButton } = generateAuthButton(true);
  const { getByTestId } = render(authButton);

  expect(getByTestId("auth-button")).toHaveTextContent("Logout");
});

it("calls login correctly", () => {
  const { authButton, login, logout } = generateAuthButton();
  const tree = create(authButton);

  tree.root.findByType("button").props.onClick();

  expect(login).toHaveBeenCalledTimes(1);
  expect(logout).toHaveBeenCalledTimes(0);
});

it("calls logout correctly", () => {
  const { authButton, login, logout } = generateAuthButton(true);
  const tree = create(authButton);

  tree.root.findByType("button").props.onClick();

  expect(login).toHaveBeenCalledTimes(0);
  expect(logout).toHaveBeenCalledTimes(1);
});

it("matches login snapshot", () => {
  const { authButton } = generateAuthButton();
  const tree = create(authButton).toJSON();

  expect(tree).toMatchSnapshot();
});

it("matches logout snapshot", () => {
  const { authButton } = generateAuthButton(true);
  const tree = create(authButton).toJSON();

  expect(tree).toMatchSnapshot();
});
