import React, { useRef, useCallback, useEffect, useReducer } from "react";
import axios from "axios";
import { Container, Item, Icon } from "semantic-ui-react";
import { giphyApiKey } from "../../config/keys";
import "./GifList.css";

type Gif = {
  id: string;
  title: string;
  gifUrl: string;
  uploadDate: string;
  uploader: string;
};

type ListState = {
  gifs: Gif[];
  fetching: boolean;
};

type PageState = {
  page: number;
};

const STACK_GIFS = "STACK_GIFS";
const FETCHING_GIFS = "FETCHING_GIFS";
const NEXT_PAGE = "NEXT_PAGE";
const LIMIT = 10;

/*
".id";
".title";
".images.fixed_width.url";
".import_datetime";
".user.display_name";
*/
function GifList() {
  const gifReducer = (state: ListState, action: any) => {
    switch (action.type) {
      case STACK_GIFS:
        return { ...state, gifs: state.gifs.concat(action.gifs) };
      case FETCHING_GIFS:
        return { ...state, fetching: action.fetching };
      default:
        return state;
    }
  };

  const pageReducer = (state: PageState, action: any) => {
    switch (action.type) {
      case NEXT_PAGE:
        return { ...state, page: state.page + 1 };
      default:
        return state;
    }
  };

  const [pageState, pageDispatch] = useReducer(pageReducer, { page: 0 });
  const [listState, listDispatch] = useReducer(gifReducer, {
    gifs: [],
    fetching: true,
  });

  useEffect(() => {
    retrieveGifs(LIMIT * pageState.page, LIMIT);
  }, [pageState.page]);

  // 1-based
  const retrieveGifs = (offset: number, limit: number) => {
    listDispatch({ type: FETCHING_GIFS, fetching: true });
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
              uploadDate: value.import_datetime,
              uploader: value.username,
            };
          });

          console.log(parsedData);
          listDispatch({ type: STACK_GIFS, gifs: parsedData });
        }
        listDispatch({ type: FETCHING_GIFS, fetching: false });
      })
      .catch((error: Error) => {
        console.log(error);
        listDispatch({ type: FETCHING_GIFS, fetching: false });
      });
  };

  // implement infinite scrolling with intersection observer
  let bottomBoundaryRef = useRef(null);
  const scrollObserver = useCallback((node) => {
    new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.intersectionRatio > 0) {
          pageDispatch({ type: NEXT_PAGE });
        }
      });
    }).observe(node);
  }, []);

  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [bottomBoundaryRef]);

  return (
    <Container style={{ marginBottom: "4rem" }}>
      <Item.Group divided>
        {listState.gifs.map((gif) => {
          return (
            <Item key={gif.id}>
              <Item.Image src={gif.gifUrl} size="medium" />

              <Item.Content>
                <Item.Header className="white-text">{gif.title}</Item.Header>
                <Item.Meta className="white-meta-text">
                  Uploader: <strong>{gif.uploader}</strong>
                </Item.Meta>
                <Item.Meta className="white-meta-text">
                  Upload date: <strong>{gif.uploadDate}</strong>
                </Item.Meta>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
      <div id="page-bottom-boundary" ref={bottomBoundaryRef} />
    </Container>
  );
}

export default GifList;
