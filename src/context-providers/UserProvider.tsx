import React, { createContext, useState } from "react";

type User = {
  uid: string;
  displayName: string;
};

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: (user: User | null) => {},
});

function UserProvider(props: any) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
