import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { UserContext } from "../../../context-providers/UserProvider";

type Props = {
  style?: any;
  className?: string;
};

function AuthButton(props: Props) {
  const { user, login, logout } = useContext(UserContext);

  return (
    <Button
      content={user ? "Logout" : "Login"}
      onClick={user ? logout : login}
      style={props.style}
      className={props.className}
    />
  );
}

export default AuthButton;
