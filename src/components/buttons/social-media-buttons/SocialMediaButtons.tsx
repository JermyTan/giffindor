import React from "react";
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
import "./SocialMediaButtons.scss";

type Props = {
  gifUrl: string;
};

function SocialMediaButtons(props: Props) {
  const { gifUrl } = props;

  return (
    <div className="social-media-icons-container">
      <FacebookShareButton url={gifUrl} className="social-media-icon">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TelegramShareButton url={gifUrl} className="social-media-icon">
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <WhatsappShareButton url={gifUrl} className="social-media-icon">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <EmailShareButton url={gifUrl} className="social-media-icon">
        <EmailIcon size={32} round />
      </EmailShareButton>
      <LinkedinShareButton url={gifUrl} className="social-media-icon">
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <LineShareButton url={gifUrl} className="social-media-icon">
        <LineIcon size={32} round />
      </LineShareButton>
    </div>
  );
}

export default SocialMediaButtons;
