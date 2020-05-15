import React, { useContext, useState } from "react";
import { Input, Icon, Transition } from "semantic-ui-react";
import { SearchContext } from "../../../context-providers/SearchProvider";
import { FavouritesContext } from "../../../context-providers/FavouritesProvider";
import "./SearchBar.scss";

type Props = {
  className?: string;
};

const hideStyle = {
  visibility: "hidden",
};

function SearchBar(props: Props) {
  const { setSearchTerm } = useContext(SearchContext);
  const { showFavourites } = useContext(FavouritesContext);
  const [inputTerm, setInputTerm] = useState("");

  const clearSearch = () => {
    setInputTerm("");
    setSearchTerm("");
  };

  showFavourites && inputTerm && clearSearch();

  return (
    <Input
      data-testid="search-bar"
      style={showFavourites ? hideStyle : {}}
      className={props.className}
      placeholder="Search..."
      value={inputTerm}
      onChange={(event, data) => setInputTerm(data.value)}
      onKeyDown={(event: any) => {
        event.key === "Enter" && setSearchTerm(inputTerm);
      }}
      icon={
        <Transition visible={inputTerm !== ""} unmountOnHide animation="scale">
          <Icon link name="close" onClick={clearSearch} />
        </Transition>
      }
    />
  );
}

export default SearchBar;
