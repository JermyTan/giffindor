import React from "react";
import { Item, Image } from "semantic-ui-react";
import { Gif } from "../gif-list/GifList";
import FavouriteButton from "../buttons/favourite-button/FavouriteButton";
import ShareButton from "../buttons/share-button/ShareButton";
import "./GifItem.css";
import PlaceholderImage from "../../assets/placeholder-image.gif";

type Props = {
  gif: Gif;
};

function GifItem(props: Props) {
  const { title, gifUrl, uploader, uploadDate, profileUrl } = props.gif;

  return (
    <Item>
      <Item.Image size="medium" rounded>
        <img
          className="placeholder-image"
          src={PlaceholderImage}
          alt={title}
          data-src={gifUrl}
        />
      </Item.Image>
      <Item.Content>
        <Item.Header className="white-text">{title}</Item.Header>
        <Item.Extra>
          <Image size="tiny" rounded>
            <img
              className="placeholder-image"
              src={PlaceholderImage}
              alt={uploader}
              data-src={profileUrl}
            />
          </Image>
        </Item.Extra>
        <Item.Meta className="white-meta-text">
          Uploader: <strong>{uploader}</strong>
        </Item.Meta>
        <Item.Meta className="white-meta-text">
          Upload Date: <strong>{uploadDate}</strong>
        </Item.Meta>
        <Item.Extra>
          <FavouriteButton size="large" />
          <ShareButton size="large" gif={props.gif} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}

export default GifItem;
