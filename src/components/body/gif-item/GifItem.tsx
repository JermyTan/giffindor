import React, { useContext } from "react";
import { Item, Image } from "semantic-ui-react";
import FavouriteButton from "../buttons/favourite-button/FavouriteButton";
import ShareButton from "../buttons/share-button/ShareButton";
import PlaceholderImage from "../../../assets/placeholder-image.gif";
import AvatarImage from "../../../assets/avatar.jpg";
import { UserContext } from "../../../context-providers/UserProvider";
import ProgressiveImage from "react-progressive-graceful-image";
import "./GifItem.scss";

export type Gif = {
  id: string;
  title: string;
  gifUrl: string;
  uploadDate: string;
  uploader: string;
  profileUrl: string;
};

type Props = {
  gif: Gif;
};

function GifItem(props: Props) {
  const { title, gifUrl, uploader, uploadDate, profileUrl } = props.gif;
  const { user } = useContext(UserContext);

  return (
    <Item>
      <Item.Image size="medium" rounded>
        <ProgressiveImage src={gifUrl} placeholder={PlaceholderImage}>
          {(src: string) => <img src={src} alt={title} />}
        </ProgressiveImage>
      </Item.Image>
      <Item.Content>
        <Item.Header className="white-text">{title}</Item.Header>
        <Item.Extra>
          <Image size="tiny" rounded>
            <ProgressiveImage
              src={profileUrl ?? AvatarImage}
              placeholder={PlaceholderImage}
            >
              {(src: string) => <img src={src} alt={title} />}
            </ProgressiveImage>
          </Image>
        </Item.Extra>
        <Item.Meta className="white-meta-text">
          Uploader: <strong>{uploader ?? "Unknown"}</strong>
        </Item.Meta>
        <Item.Meta className="white-meta-text">
          Upload Date: <strong>{uploadDate}</strong>
        </Item.Meta>
        <Item.Extra>
          {user && <FavouriteButton size="large" gifId={props.gif.id} />}
          <ShareButton size="large" gif={props.gif} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}

export default GifItem;
