import React, { useContext } from "react";
import { Item } from "semantic-ui-react";
import { FavouritesContext } from "../../../context-providers/FavouritesProvider";
import GifItem, { Gif } from "../gif-item/GifItem";

function FavouritesList() {
  const { favourites } = useContext(FavouritesContext);

  return (
    <Item.Group divided>
      {favourites.map((gif: Gif, value) => (
        <GifItem key={value} gif={gif} />
      ))}
    </Item.Group>
  );
}

export default FavouritesList;
