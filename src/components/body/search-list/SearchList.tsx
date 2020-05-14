import React, { useContext, useRef, useReducer } from "react";
import { Item, Loader } from "semantic-ui-react";
import { gifReducer, pageReducer } from "../trending-list/TrendingList";
import { useSearchGif, useInfiniteScroll } from "../../../utils/custom-hooks";
import GifItem from "../gif-item/GifItem";
import { SearchContext } from "../../../context-providers/SearchProvider";

function SearchList() {
  const { searchTerm } = useContext(SearchContext);
  const [pageState, pageDispatch] = useReducer(pageReducer, {
    page: 0,
  });
  const [listState, listDispatch] = useReducer(gifReducer, {
    gifs: [],
    fetching: true,
  });

  let bottomBoundaryRef = useRef(null);
  useSearchGif(pageState, searchTerm, listDispatch);
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

export default SearchList;
