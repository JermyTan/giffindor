import React, { useContext, useState } from "react";
import { Input, Icon, Transition } from "semantic-ui-react";
import { SearchContext } from "../../../context-providers/SearchProvider";

type Props = {
  style?: any;
  className?: string;
};

function SearchBar(props: Props) {
  const { setSearchTerm } = useContext(SearchContext);
  const [inputTerm, setInputTerm] = useState("");

  return (
    <Input
      className="header-field"
      placeholder="Search..."
      value={inputTerm}
      onChange={(event, data) => setInputTerm(data.value)}
      onKeyDown={(event: any) => {
        event.key === "Enter" && setSearchTerm(inputTerm);
      }}
      icon={
        <Transition visible={inputTerm !== ""} unmountOnHide animation="scale">
          <Icon
            link
            name="close"
            onClick={() => {
              setSearchTerm("");
              setInputTerm("");
            }}
          />
        </Transition>
      }
    />
  );
}

export default SearchBar;
