import React, { useState, createContext, useContext } from "react";
import { useFavourites } from "../utils/custom-hooks";
import { UserContext } from "./UserProvider";
import { Gif } from "../components/gif-list/GifList";

type FavouritesContextType = {
  showFavourites: boolean;
  setShowFavourites: (showFavaourites: boolean) => void;
  isFavourite: (gifId: string) => boolean;
  favourites: Gif[];
  addToFavourites: (gifId: string) => void;
  removeFromFavourites: (gifId: string) => void;
};

export const FavouritesContext = createContext<FavouritesContextType>({
  showFavourites: false,
  setShowFavourites: (showFavaourites: boolean) => {},
  isFavourite: (gifId: string) => false,
  favourites: [],
  addToFavourites: (gifId: string) => {},
  removeFromFavourites: (gifId: string) => {},
});

function FavouritesProvider(props: any) {
  const { user } = useContext(UserContext);
  const [showFavourites, setShowFavourites] = useState(false);
  const [
    favouriteGifIds,
    favourites,
    addToFavourites,
    removeFromFavourites,
  ] = useFavourites(user?.uid ?? "");

  return (
    <FavouritesContext.Provider
      value={{
        showFavourites: showFavourites,
        setShowFavourites: setShowFavourites,
        isFavourite: (gifId: string) =>
          (favouriteGifIds as Set<string>).has(gifId),
        favourites: favourites as Gif[],
        addToFavourites: addToFavourites as (gifId: string) => void,
        removeFromFavourites: removeFromFavourites as (gifId: string) => void,
      }}
    >
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesProvider;
