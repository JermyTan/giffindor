import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";
import { FavouritesContext } from "../../../../context-providers/FavouritesProvider";
import "../RevealingLabel.scss";

type Props = {
  size?: "big" | "small" | "mini" | "tiny" | "large" | "huge" | "massive";
  gifId: string;
};

function FavouriteButton(props: Props) {
  const { isFavourite, addToFavourites, removeFromFavourites } = useContext(
    FavouritesContext
  );

  const { size, gifId } = props;
  const favourited = isFavourite(gifId);

  return (
    <Icon
      name={favourited ? "star" : "star outline"}
      className="revealing-label-container white-text"
      size={size}
      link
      onClick={() => {
        favourited ? removeFromFavourites(gifId) : addToFavourites(gifId);
      }}
    >
      <span className="revealing-label">Favourite</span>
    </Icon>
  );
}

export default FavouriteButton;
