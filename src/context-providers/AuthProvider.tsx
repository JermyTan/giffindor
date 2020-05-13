import React, { createContext, useContext } from "react";
import { FavouritesContext } from "./FavouritesProvider";
import { UserContext } from "./UserProvider";
import { provider, auth } from "../utils/firebase";

type AuthContextType = {
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
});

function AuthProvider(props: any) {
  const { setUser } = useContext(UserContext);
  const { setShowFavourites } = useContext(FavouritesContext);

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

        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        setShowFavourites(false);
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
