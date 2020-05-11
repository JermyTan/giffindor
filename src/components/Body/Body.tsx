import React, { useState, useEffect } from "react";
import {
  Container,
  makeStyles,
  GridList,
  GridListTile,
} from "@material-ui/core";
import axios from "axios";
import { giphyApiKey } from "../../config/keys";

type Gif = {
  id: string;
  title: string;
  gifUrl: string;
  uploadDate: Date;
  uploader: string;
};
/*
".id";
".title";
".images.fixed_width.url";
".import_datetime";
".user.display_name";
*/
function Body() {
  const [gifs, setGifs] = useState(Array<Gif>());

  // 1-based
  const retrieveGifs = (offset: number, limit: number) => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}&offset=${offset}&limit=${limit}`
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const parsedData: Gif[] = response.data.data.map((value: any) => {
            return {
              id: value.id,
              title: value.title,
              gifUrl: value.images.fixed_width.url,
              uploadData: value.import_datetime,
              uploader: value.username,
            };
          });

          setGifs(gifs.concat(parsedData));
        }
      });
  };

  useEffect(() => {
    retrieveGifs(0, 25);
  }, []);

  return (
    <Container>
      <GridList>
        {gifs.map((gif: Gif) => {
          return (
            <GridListTile key={gif.id}>
              <img src={gif.gifUrl} alt={gif.title} />
            </GridListTile>
          );
        })}
      </GridList>
    </Container>
  );
}

export default Body;
