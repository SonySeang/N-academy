"use client";

import React, { createContext, useState, ReactNode } from "react";

interface SearchContextProvider {
  children: ReactNode;
}
interface TSearchContext {
  searchQuery: string;
  handleChangeSearchQuery: (newValue: string) => void;
}

export const SearchContext = createContext<TSearchContext | null>(null);

function SearchContextProvider({ children }: SearchContextProvider) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeSearchQuery = (newValue: string) => {
    setSearchQuery(newValue);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        handleChangeSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
