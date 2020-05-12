import React from "react";
import { Item, Icon, Image } from "semantic-ui-react";
import { Gif } from "../gif-list/GifList";
import "./GifItem.css";

type Props = {
  gif: Gif;
};

function GifItem(props: Props) {
  const { title, gifUrl, uploader, uploadDate, profileUrl } = props.gif;

  return (
    <Item>
      <Item.Image src={gifUrl} size="medium" rounded />
      <Item.Content>
        <Item.Header className="white-text">{title}</Item.Header>
        <Item.Extra>
          <Image src={profileUrl} size="tiny" rounded bordered />
        </Item.Extra>
        <Item.Meta className="white-meta-text">
          Uploader: <strong>{uploader}</strong>
        </Item.Meta>
        <Item.Meta className="white-meta-text">
          Upload date: <strong>{uploadDate}</strong>
        </Item.Meta>
        <Item.Extra>
          <Icon name="star" className="white-text" />
          <Icon name="share alternate" className="white-text" />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}

export default GifItem;
