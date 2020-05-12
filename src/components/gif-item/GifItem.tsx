import React from "react";
import { Item, Icon, Image } from "semantic-ui-react";
import { Gif } from "../gif-list/GifList";
import FavouriteButton from "../buttons/favourite-button/FavouriteButton";
import ShareButton from "../buttons/share-button/ShareButton";
import "./GifItem.css";

type Props = {
  gif: Gif;
};

function GifItem(props: Props) {
  const { id, title, gifUrl, uploader, uploadDate, profileUrl } = props.gif;

  return (
    <Item>
      <Item.Image src={gifUrl} size="medium" rounded />
      <Item.Content>
        <Item.Header className="white-text">{title}</Item.Header>
        <Item.Extra>
          <Image src={profileUrl} size="tiny" rounded />
        </Item.Extra>
        <Item.Meta className="white-meta-text">
          Uploader: <strong>{uploader}</strong>
        </Item.Meta>
        <Item.Meta className="white-meta-text">
          Upload Date: <strong>{uploadDate}</strong>
        </Item.Meta>
        <Item.Extra>
          <FavouriteButton size="large" />
          <ShareButton size="large" />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}

export default GifItem;
