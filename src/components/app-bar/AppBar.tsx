import React from "react";
import { Segment } from "semantic-ui-react";
import AuthButton from "./auth-button/AuthButton";
import SearchBar from "./search-bar/SearchBar";
import { useSelector } from "react-redux";
import { getSearchTerm, getShowFavourites } from "../../redux/selectors";
import "./AppBar.scss";

function AppBar() {
  const searchTerm = useSelector(getSearchTerm);
  const showFavourites = useSelector(getShowFavourites);

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
