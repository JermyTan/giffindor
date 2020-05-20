import React from "react";
import {
  List,
  CellMeasurer,
  CellMeasurerCache,
  InfiniteLoader,
  AutoSizer,
  Index,
  IndexRange,
} from "react-virtualized";
import GifItem, { Gif } from "../gif-item/GifItem";
import { Loader } from "semantic-ui-react";
import "./GifList.scss";

type Props = {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  gifs: Gif[];
  loadNextPage: (params: IndexRange) => any;
};

const cellMeasurerCache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 100,
});

function GifList({
  hasNextPage,
  isNextPageLoading,
  gifs,
  loadNextPage,
}: Props) {
  const gifCount = hasNextPage ? gifs.length + 1 : gifs.length;
  const loadMoreGifs = isNextPageLoading
    ? (params: IndexRange) => {}
    : loadNextPage;

  const isGifLoaded = (params: Index) =>
    !hasNextPage || params.index < gifs.length;

  const rowRenderer = ({ index, parent, key, style }: any) => {
    return isGifLoaded({ index }) ? (
      <CellMeasurer
        key={key}
        cache={cellMeasurerCache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        {({ measure }) => (
          <GifItem onLoad={measure} gif={gifs[index]} style={style} />
        )}
      </CellMeasurer>
    ) : (
      <Loader inline="centered" active inverted size="huge" />
    );
  };

  return (
    <InfiniteLoader
      isRowLoaded={isGifLoaded}
      loadMoreRows={loadMoreGifs as (params: IndexRange) => any}
      rowCount={gifCount}
      threshold={0}
    >
      {({ onRowsRendered, registerChild }) => (
        <AutoSizer>
          {({ width, height }) => (
            <List
              rowCount={gifCount}
              width={width}
              height={height}
              rowHeight={cellMeasurerCache.rowHeight}
              rowRenderer={rowRenderer}
              deferredMeasurementCache={cellMeasurerCache}
              overscanRowCount={2}
              onRowsRendered={onRowsRendered}
              ref={registerChild}
            />
          )}
        </AutoSizer>
      )}
    </InfiniteLoader>
  );
}

export default GifList;
