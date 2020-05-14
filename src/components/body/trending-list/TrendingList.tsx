import React, { useRef, useReducer } from "react";
import { Item, Loader } from "semantic-ui-react";
import {
  useInfiniteScroll,
  useTrendingGif,
  Action,
} from "../../../utils/custom-hooks";
import GifItem, { Gif } from "../gif-item/GifItem";

type ListState = {
  gifs: Gif[];
  fetching: boolean;
};

type PageState = {
  page: number;
};

export const pageReducer = (state: PageState, action: any) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
};

export const gifReducer = (state: ListState, action: Action) => {
  switch (action.type) {
    case "CONCAT_GIFS":
      return { ...state, gifs: state.gifs.concat(action.gifs) };
    case "FETCH_GIFS":
      return { ...state, fetching: action.fetching };
    default:
      return state;
  }
};

function TrendingList() {
  const [pageState, pageDispatch] = useReducer(pageReducer, { page: 0 });
  const [listState, listDispatch] = useReducer(gifReducer, {
    gifs: [],
    fetching: true,
  });

  let bottomBoundaryRef = useRef(null);
  useTrendingGif(pageState, listDispatch);
  useInfiniteScroll(bottomBoundaryRef, pageDispatch);

  return (
    <>
      <Item.Group divided>
        {listState.gifs.map((gif, index) => (
          <GifItem key={index} gif={gif} />
        ))}
      </Item.Group>
      {listState.fetching && (
        <Loader inline="centered" active inverted size="huge" />
      )}
      <div id="page-bottom-boundary" ref={bottomBoundaryRef} />
    </>
  );
}

export default TrendingList;
