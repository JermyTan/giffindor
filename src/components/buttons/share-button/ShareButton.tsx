import React from "react";
import { Icon } from "semantic-ui-react";
import "../RevealingLabel.scss";

type Props = {
  size?: "big" | "small" | "mini" | "tiny" | "large" | "huge" | "massive";
};

function ShareButton(props: Props) {
  return (
    <>
      <Icon
        name="share alternate"
        className="revealing-label-container white-text"
        size={props.size}
      >
        <span className="revealing-label">Share</span>
      </Icon>
    </>
  );
}

export default ShareButton;
