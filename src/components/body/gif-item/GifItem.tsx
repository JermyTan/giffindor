import React from "react";
import { Item, Image, Container } from "semantic-ui-react";
import FavouriteButton from "../buttons/favourite-button/FavouriteButton";
import ShareButton from "../buttons/share-button/ShareButton";
import AvatarImage from "../../../assets/avatar.jpg";
import ProgressiveImage from "react-progressive-graceful-image";
import PlaceholderImage from "../../../assets/placeholder-image.gif";
import { useSelector } from "react-redux";
import { getUser } from "../../../redux/selectors";
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
  style?: any;
  onLoad?: () => void;
};

function GifItem(props: Props) {
  const { title, gifUrl, uploader, uploadDate, profileUrl } = props.gif;
  const user = useSelector(getUser);

  return (
    <div
      style={{
        ...props.style,
      }}
    >
      <Container className="item-container">
        <Item.Group>
          <Item>
            <Item.Image
              size="medium"
              rounded
              src={gifUrl}
              onLoad={props.onLoad}
            />
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
        </Item.Group>
      </Container>
    </div>
  );
}

export default GifItem;
