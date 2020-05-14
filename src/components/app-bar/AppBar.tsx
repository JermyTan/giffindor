import React from "react";
import { Segment, Input, Icon } from "semantic-ui-react";
import AuthButton from "./auth-button/AuthButton";
import "./AppBar.css";

function AppBar() {
  return (
    <Segment className="app-bar" raised>
      <AuthButton className="header-field" />
      <strong className="header-title">Trending</strong>
      <Input
        className="header-field"
        placeholder="Search..."
        onKeyDown={(event: any) => console.log(event.key)}
        icon={<Icon link name="close" />}
      />
    </Segment>
  );
}

export default AppBar;
