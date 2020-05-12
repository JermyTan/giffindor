import React, { useState } from "react";
import { Icon, Modal, TransitionablePortal, Image } from "semantic-ui-react";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
  LineShareButton,
  LineIcon,
} from "react-share";
import "../RevealingLabel.scss";
import "../SocialMediaIcons.scss";
import { Gif } from "../../gif-list/GifList";

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
              <div className="social-media-icons-container">
                <FacebookShareButton
                  url={gif.gifUrl}
                  className="social-media-icon"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TelegramShareButton
                  url={gif.gifUrl}
                  className="social-media-icon"
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
                <WhatsappShareButton
                  url={gif.gifUrl}
                  className="social-media-icon"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <EmailShareButton
                  url={gif.gifUrl}
                  className="social-media-icon"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
                <LinkedinShareButton
                  url={gif.gifUrl}
                  className="social-media-icon"
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <LineShareButton url={gif.gifUrl} className="social-media-icon">
                  <LineIcon size={32} round />
                </LineShareButton>
              </div>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </TransitionablePortal>
    </>
  );
}

export default ShareButton;
