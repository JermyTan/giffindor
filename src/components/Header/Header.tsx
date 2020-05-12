import React from "react";
import { Segment, Input } from "semantic-ui-react";
import AuthButton from "../AuthButton/AuthButton";

function Header() {
  return (
    <Segment
      raised
      compact
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#00BCD4",
        borderRadius: 0,
        top: 0,
        width: "100%",
        position: "sticky",
        zIndex: 100,
      }}
    >
      <AuthButton style={{ minWidth: "20%" }} />
      <strong style={{ fontSize: "2rem", margin: "0 1rem 0 1rem" }}>
        Trending
      </strong>
      <Input
        placeholder="Search..."
        style={{ minWidth: "20%" }}
        onKeyDown={(event: any) => console.log(event.key)}
      />
    </Segment>
  );
}

export default Header;
