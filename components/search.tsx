"use cilent";
import React from "react";
import { Input } from "@/components/ui/input";
import { useSearchContext } from "@/lib/hook";
function Search() {
  const { searchQuery, handleChangeSearchQuery } = useSearchContext();
  return (
    <Input
      className="w-[500px]"
      type="search"
      placeholder="Search Here bruhh"
      value={searchQuery}
      onChange={(e) => handleChangeSearchQuery(e.target.value)}
    />
  );
}

export default Search;
