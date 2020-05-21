import React, { createContext } from "react";
import { provider, auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { toggleFavourites, setUser } from "../redux/actions";

type AuthContextType = {
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
});

function AuthProvider(props: any) {
  const dispatch = useDispatch();

  const login = () => {
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

        dispatch(setUser(user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
        dispatch(toggleFavourites(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider value={{ login: login, logout: logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
