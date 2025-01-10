import React, { useEffect, useState } from "react";
import { SearchBar } from "./header.style";

interface SelectProps {
  isMobileNavOpen: boolean;
}

const SearchBarComponent: React.FC<SelectProps> = ({ isMobileNavOpen }) => {
  const [debouncedText, setDebouncedText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(searchText);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <SearchBar
      type="text"
      value={debouncedText}
      placeholder="Enter an item"
      isMobileNavOpen={isMobileNavOpen}
      onChange={handleSearchChange}
      className="search-input"
    />
  );
};

export default SearchBarComponent;
