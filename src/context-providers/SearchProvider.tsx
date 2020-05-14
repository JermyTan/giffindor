import React, { createContext, useState } from "react";

type SearchContextType = {
  searchTerm: string;
  setSearchTerm: (newSearchTerm: string) => void;
};

export const SearchContext = createContext<SearchContextType>({
  searchTerm: "",
  setSearchTerm: (newSearchTerm: string) => {},
});

function SearchProvider(props: any) {
  const [searchTerm, setSearchTerm] = useState("");

  const setSearchTerms = (input: string) => {
    console.log(input);
    setSearchTerm(input);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm: searchTerm,
        setSearchTerm: setSearchTerms,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
