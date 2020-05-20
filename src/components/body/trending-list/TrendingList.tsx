import React from "react";
import GifList from "../gif-list/GifList";
import { IndexRange } from "react-virtualized";
import { Gif } from "../gif-item/GifItem";
import { useTrendingGif } from "../../../utils/custom-hooks";

function TrendingList() {
  const [loading, gifs, hasNextPage, fetchTrendingGifs] = useTrendingGif();

  return (
    <GifList
      hasNextPage={hasNextPage as boolean}
      isNextPageLoading={loading as boolean}
      gifs={gifs as Gif[]}
      loadNextPage={fetchTrendingGifs as (params: IndexRange) => any}
    />
  );
}

export default TrendingList;
