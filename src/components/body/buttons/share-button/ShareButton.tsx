import React, { useState } from "react";
import {
  Icon,
  Modal,
  TransitionablePortal,
  Image,
  Button,
  Label,
  Transition,
} from "semantic-ui-react";
import { Gif } from "../../gif-item/GifItem";
import SocialMediaButton from "./social-media-buttons/SocialMediaButtons";
import CopyToClipBoard from "react-copy-to-clipboard";
import "../RevealingLabel.scss";

type Props = {
  gif: Gif;
  size?: "big" | "small" | "mini" | "tiny" | "large" | "huge" | "massive";
};

function ShareButton(props: Props) {
  const [sharing, setSharing] = useState(false);
  const [copied, setCopied] = useState(false);
  const { title, gifUrl } = props.gif;

  const nativeSharingIsSupported = () => !!(navigator as any).share;

  const share = () => {
    (navigator as any).share({ url: gifUrl });
  };

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
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content image>
            <Image src={gifUrl} size="medium" />
            <Modal.Description>
              <p style={{ display: "flex" }}>
                <CopyToClipBoard
                  text={gifUrl}
                  onCopy={() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1000);
                  }}
                >
                  <Label as="a">
                    <strong>Sharing link</strong>
                  </Label>
                </CopyToClipBoard>
                <Transition visible={copied} unmountOnHide duration="250">
                  <span style={{ paddingInlineStart: "1rem" }}>
                    Link copied
                  </span>
                </Transition>
              </p>
              <p>
                {nativeSharingIsSupported() ? (
                  <Button
                    primary
                    compact
                    content="Share to other apps"
                    onClick={share}
                  />
                ) : (
                  <SocialMediaButton gifUrl={gifUrl} />
                )}
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </TransitionablePortal>
    </>
  );
}

export default ShareButton;
