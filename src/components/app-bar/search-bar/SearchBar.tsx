import React, { useState } from "react";
import { Input, Icon, Transition } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { getShowFavourites } from "../../../redux/selectors";
import { setSearchTerm } from "../../../redux/actions";
import "./SearchBar.scss";

type Props = {
  className?: string;
};

const hideStyle = {
  visibility: "hidden",
};

function SearchBar(props: Props) {
  const showFavourites = useSelector(getShowFavourites);
  const dispatch = useDispatch();
  const updateSearchTerm = (searchTerm: string) => {
    dispatch(setSearchTerm(searchTerm));
  };
  const [inputTerm, setInputTerm] = useState("");

  const clearSearch = () => {
    setInputTerm("");
    updateSearchTerm("");
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
        event.key === "Enter" && updateSearchTerm(inputTerm);
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
