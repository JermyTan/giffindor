import React, { useContext } from "react";
import GifList from "../gif-list/GifList";
import { IndexRange } from "react-virtualized";
import { Gif } from "../gif-item/GifItem";
import { useSearchGif } from "../../../utils/custom-hooks";
import { SearchContext } from "../../../context-providers/SearchProvider";

function SearchList() {
  const { searchTerm } = useContext(SearchContext);
  const [loading, gifs, hasNextPage, fetchSearchGifs] = useSearchGif(
    searchTerm
  );

  return (
    <GifList
      hasNextPage={hasNextPage as boolean}
      isNextPageLoading={loading as boolean}
      gifs={gifs as Gif[]}
      loadNextPage={fetchSearchGifs as (params: IndexRange) => any}
    />
  );
}

export default SearchList;
