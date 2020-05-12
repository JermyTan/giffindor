import React from "react";
import { Segment, Input } from "semantic-ui-react";
import AuthButton from "../buttons/auth-button/AuthButton";
import "./Header.css";

function Header() {
  return (
    <Segment className="header-bar" raised compact>
      <AuthButton className="header-field" />
      <strong className="header-title">Trending</strong>
      <Input
        className="header-field"
        placeholder="Search..."
        onKeyDown={(event: any) => console.log(event.key)}
      />
    </Segment>
  );
}

export default Header;
