import React, { createContext } from "react";
import { useFavourites } from "../utils/custom-hooks";
import { Gif } from "../components/body/gif-item/GifItem";
import { useSelector } from "react-redux";
import { getUser } from "../redux/selectors";

type FavouritesContextType = {
  isFavourite: (gifId: string) => boolean;
  favourites: Gif[];
  addToFavourites: (gifId: string) => void;
  removeFromFavourites: (gifId: string) => void;
};

export const FavouritesContext = createContext<FavouritesContextType>({
  isFavourite: (gifId: string) => false,
  favourites: [],
  addToFavourites: (gifId: string) => {},
  removeFromFavourites: (gifId: string) => {},
});

function FavouritesProvider(props: any) {
  const user = useSelector(getUser);

  const [
    favouriteGifIds,
    favourites,
    addToFavourites,
    removeFromFavourites,
  ] = useFavourites(user?.uid ?? "");

  return (
    <FavouritesContext.Provider
      value={{
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
