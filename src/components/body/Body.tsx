import React, { useContext } from "react";
import { Container } from "semantic-ui-react";
import "./Body.scss";
import FavouritesList from "./favourites-list/FavouritesList";
import TrendingList from "./trending-list/TrendingList";
import SearchList from "./search-list/SearchList";
import { FavouritesContext } from "../../context-providers/FavouritesProvider";
import { SearchContext } from "../../context-providers/SearchProvider";

function Body() {
  const { showFavourites } = useContext(FavouritesContext);
  const { searchTerm } = useContext(SearchContext);

  const renderGifList = () => {
    if (showFavourites) {
      return <FavouritesList />;
    } else if (searchTerm) {
      return <SearchList />;
    } else {
      return <TrendingList />;
    }
  };

  return <Container className="body">{renderGifList()}</Container>;
}

export default Body;
