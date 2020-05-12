import React from "react";
import { Icon } from "semantic-ui-react";
import "../RevealingLabel.scss";

type Props = {
  size?: "big" | "small" | "mini" | "tiny" | "large" | "huge" | "massive";
};

function FavouriteButton(props: Props) {
  return (
    <>
      <Icon
        name="star"
        className="revealing-label-container white-text"
        size={props.size}
        link
      >
        <span className="revealing-label">Favourite</span>
      </Icon>
    </>
  );
}

export default FavouriteButton;
