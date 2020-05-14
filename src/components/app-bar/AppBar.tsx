import React from "react";
import { Segment } from "semantic-ui-react";
import AuthButton from "./auth-button/AuthButton";
import SearchBar from "./search-bar/SearchBar";
import "./AppBar.scss";

function AppBar() {
  return (
    <Segment className="app-bar" raised>
      <AuthButton className="header-field" />
      <strong className="header-title">Trending</strong>
      <SearchBar className="header-field" />
    </Segment>
  );
}

export default AppBar;
