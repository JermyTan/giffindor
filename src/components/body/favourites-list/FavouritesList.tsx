import React, { useContext } from "react";
import { FavouritesContext } from "../../../context-providers/FavouritesProvider";
import GifList from "../gif-list/GifList";
import { IndexRange } from "react-virtualized";

function FavouritesList() {
  const { favourites } = useContext(FavouritesContext);

  return (
    <GifList
      hasNextPage={false}
      isNextPageLoading={false}
      gifs={favourites}
      loadNextPage={(params: IndexRange) => {}}
    />
  );
}

export default FavouritesList;
