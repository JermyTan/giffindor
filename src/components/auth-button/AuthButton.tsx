import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { provider, auth } from "../../firebase";
import { UserContext } from "../../context-providers/UserProvider";

type Props = {
  style?: any;
  className?: string;
};

function AuthButton(props: Props) {
  const userContext = useContext(UserContext);

  const onError = (error: Error) => {
    console.log(error);
  };

  const onLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((response) => {
        const uid = response.user?.uid ?? "";
        const displayName = response.user?.displayName ?? "";
        const user =
          uid && displayName
            ? {
                uid: uid,
                displayName: displayName,
              }
            : null;

        userContext.setUser(user);
      })
      .catch(onError);
  };

  const onLogout = () => {
    auth
      .signOut()
      .then(() => {
        userContext.setUser(null);
      })
      .catch(onError);
  };

  return userContext.user ? (
    <Button onClick={onLogout} style={props.style} className={props.className}>
      Logout
    </Button>
  ) : (
    <Button onClick={onLogin} style={props.style} className={props.className}>
      Login
    </Button>
  );
}

export default AuthButton;
