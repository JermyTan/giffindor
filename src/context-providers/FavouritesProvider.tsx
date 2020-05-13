import React, { useContext, useState, createContext } from "react";
import { UserContext } from "./UserProvider";

type FavouritesContextType = {
  showFavourites: boolean;
  setShowFavourites: (showFavaourites: boolean) => void;
};

export const FavouritesContext = createContext<FavouritesContextType>({
  showFavourites: false,
  setShowFavourites: (showFavaourites: boolean) => {},
});

function FavouritesProvider(props: any) {
  const { user } = useContext(UserContext);
  const [showFavourites, setShowFavourites] = useState(false);

  return (
    <FavouritesContext.Provider
      value={{
        showFavourites: showFavourites,
        setShowFavourites: (showFavourites: boolean) =>
          setShowFavourites(showFavourites && user !== null),
      }}
    >
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesProvider;
