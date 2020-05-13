import React, { useState, createContext } from "react";

type FavouritesContextType = {
  showFavourites: boolean;
  setShowFavourites: (showFavaourites: boolean) => void;
};

export const FavouritesContext = createContext<FavouritesContextType>({
  showFavourites: false,
  setShowFavourites: (showFavaourites: boolean) => {},
});

function FavouritesProvider(props: any) {
  const [showFavourites, setShowFavourites] = useState(false);

  return (
    <FavouritesContext.Provider
      value={{
        showFavourites: showFavourites,
        setShowFavourites: setShowFavourites,
      }}
    >
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesProvider;
