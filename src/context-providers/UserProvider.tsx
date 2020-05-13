import React, { createContext, useState } from "react";
import { provider, auth } from "../firebase";

type User = {
  uid: string;
  displayName: string;
};

type UserContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  setUser: (user: User | null) => {},
});

function UserProvider(props: any) {
  const [user, setUser] = useState<User | null>(null);

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
      .then(() => setUser(null))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <UserContext.Provider
      value={{
        user: user,
        login: login,
        logout: logout,
        setUser: setUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
