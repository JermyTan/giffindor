import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { UserContext } from "../../../context-providers/UserProvider";
import { AuthContext } from "../../../context-providers/AuthProvider";

type Props = {
  style?: any;
  className?: string;
};

function AuthButton(props: Props) {
  const { user } = useContext(UserContext);
  const { login, logout } = useContext(AuthContext);

  return (
    <Button
      data-testid="auth-button"
      content={user ? "Logout" : "Login"}
      onClick={user ? logout : login}
      style={props.style}
      className={props.className}
    />
  );
}

export default AuthButton;
