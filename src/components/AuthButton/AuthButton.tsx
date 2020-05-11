import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { googleAuthClientId } from "../../config/keys";

function AuthButton() {
  const [loggedIn, setLoggedIn] = useState(false);

  const onError = (error: Error) => {
    console.log(error);
  };

  const onLoginSuccess = (response: any) => {
    console.log(response);
    setLoggedIn(true);
  };

  const onLogoutSuccess = () => {
    setLoggedIn(false);
  };

  return loggedIn ? (
    <GoogleLogout
      clientId={googleAuthClientId}
      onLogoutSuccess={onLogoutSuccess}
      onFailure={() => onError(Error("Logout error"))}
    />
  ) : (
    <GoogleLogin
      clientId={googleAuthClientId}
      onSuccess={onLoginSuccess}
      onFailure={onError}
    />
  );
}

export default AuthButton;
