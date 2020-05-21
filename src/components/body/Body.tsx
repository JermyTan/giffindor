import React from "react";
import FavouritesList from "./favourites-list/FavouritesList";
import TrendingList from "./trending-list/TrendingList";
import SearchList from "./search-list/SearchList";
import { useSelector } from "react-redux";
import { getSearchTerm, getShowFavourites } from "../../redux/selectors";

function Body() {
  const searchTerm = useSelector(getSearchTerm);
  const showFavourites = useSelector(getShowFavourites);

  const renderGifList = () => {
    if (showFavourites) {
      return <FavouritesList />;
    } else if (searchTerm) {
      return <SearchList />;
    } else {
      return <TrendingList />;
    }
  };

  return renderGifList();
}

export default Body;
