import React from "react";
import { Icon } from "semantic-ui-react";

type Props = {
  className?: string;
  size?: "big" | "small" | "mini" | "tiny" | "large" | "huge" | "massive";
};

function FavouriteButton(props: Props) {
  return <Icon name="star" className={props.className} size={props.size} />;
}

export default FavouriteButton;
