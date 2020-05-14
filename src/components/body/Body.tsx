import React, { useContext } from "react";
import { Container } from "semantic-ui-react";
import "./Body.scss";
import FavouritesList from "./favourites-list/FavouritesList";
import TrendingList from "./trending-list/TrendingList";
import { FavouritesContext } from "../../context-providers/FavouritesProvider";

function Body() {
  const { showFavourites } = useContext(FavouritesContext);

  return (
    <Container className="body">
      {showFavourites ? <FavouritesList /> : <TrendingList />}
    </Container>
  );
}

export default Body;
