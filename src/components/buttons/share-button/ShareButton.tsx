import React, { useState } from "react";
import { Icon, Modal, TransitionablePortal, Image } from "semantic-ui-react";
import { Gif } from "../../gif-list/GifList";
import SocialMediaButton from "../social-media-buttons/SocialMediaButtons";
import "../RevealingLabel.scss";

type Props = {
  gif: Gif;
  size?: "big" | "small" | "mini" | "tiny" | "large" | "huge" | "massive";
};

function ShareButton(props: Props) {
  const [sharing, setSharing] = useState(false);
  const { gif } = props;

  return (
    <>
      <Icon
        name="share alternate"
        className="revealing-label-container white-text"
        size={props.size}
        link
        onClick={() => setSharing(true)}
      >
        <span className="revealing-label">Share</span>
      </Icon>
      <TransitionablePortal
        open={sharing}
        transition={{ animation: "scale", duration: 300 }}
      >
        <Modal
          open={true}
          closeIcon
          onClose={() => setSharing(false)}
          size="small"
        >
          <Modal.Header>{gif.title}</Modal.Header>
          <Modal.Content image>
            <Image src={gif.gifUrl} size="medium" />
            <Modal.Description>
              <a href={gif.gifUrl} target="_blank" rel="noopener noreferrer">
                <strong>Sharing link</strong>
              </a>
              <br />
              <br />
              <SocialMediaButton gifUrl={gif.gifUrl} />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </TransitionablePortal>
    </>
  );
}

export default ShareButton;
