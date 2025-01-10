import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  SearchField,
  SearchResults,
  SearchWrapper,
  SelectSearchWrapper,
} from "./select.style";

interface SelectProps {
  data: string[];
  placeholder: string;
  toggleMobileNav: any;
  isMobileNavOpen: boolean;
}

const Select: React.FC<SelectProps> = ({
  data,
  placeholder,
  isMobileNavOpen,
  toggleMobileNav,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<string>(placeholder);
  const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedText, setDebouncedText] = useState<string>("");

  const listData = useMemo(() => {
    const filteredData = searchText
      ? data.filter((item) =>
          item.toLowerCase().includes(searchText.toLowerCase())
        )
      : data;

    return Array.from(new Set(filteredData));
  }, [data, searchText]);

  const closeSelect = useCallback((item: string, index: number) => {
    setSelectedIndex(index);
    setSelectedItem(item);
    setIsOpenSelect(false);
  }, []);

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
  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  return (
    <SelectSearchWrapper onClick={() => setIsOpenSelect(!isOpenSelect)}>
      {isOpenSelect && (
        <SearchWrapper isMobileNavOpen={isMobileNavOpen}>
          <SearchField>
            <input
              type="text"
              placeholder="Search for items..."
              value={debouncedText}
              onChange={handleSearchChange}
              onClick={handleInputClick}
            />
          </SearchField>

          <SearchResults>
            {listData.map((item, index) => (
              <li
                key={index}
                onClick={() => closeSelect(item, index)}
                className={selectedIndex === index ? "active" : ""}
              >
                {item}
              </li>
            ))}
          </SearchResults>
        </SearchWrapper>
      )}
    </SelectSearchWrapper>
  );
};

export default Select;
