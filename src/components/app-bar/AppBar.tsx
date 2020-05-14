import React, { useContext } from "react";
import { Segment } from "semantic-ui-react";
import AuthButton from "./auth-button/AuthButton";
import SearchBar from "./search-bar/SearchBar";
import { FavouritesContext } from "../../context-providers/FavouritesProvider";
import { SearchContext } from "../../context-providers/SearchProvider";
import "./AppBar.scss";

function AppBar() {
  const { showFavourites } = useContext(FavouritesContext);
  const { searchTerm } = useContext(SearchContext);

  const renderTitle = () => {
    if (showFavourites) {
      return "Favourites";
    } else if (searchTerm) {
      return "Search";
    } else {
      return "Trending";
    }
  };

  return (
    <Segment className="app-bar" raised>
      <AuthButton className="header-field" />
      <strong className="header-title">{renderTitle()}</strong>
      <SearchBar className="header-field" />
    </Segment>
  );
}

export default AppBar;
