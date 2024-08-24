import React, { useState } from "react";
import { Logo } from "@src/view/components";
import classnames from "classnames";

import $ from "./Header.module.scss";

type Props = {
  onChangeCallback?: (value: string) => void;
};

const Header: React.FC<Props> = ({ onChangeCallback }) => {
  // initiate states
  const [value, setValue] = useState("");
  const [filterSetActive, setFilterSetActive] = useState(false);
  const [filtersActive, setFiltersActive] = useState(true);

  const fitlerBlock = classnames([
    $.filterWrapper,
    filterSetActive && $.filterBlockActive,
  ]);

  // change input handler. Takes a change event. Uses a callback function to update parent
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    // if the component receives a callback, invoke it,
    // and pass the input value as an argument
    if (onChangeCallback) {
      onChangeCallback(inputValue); // Invoke the callback with the new input value
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default Enter key behavior
    }
  };

  const activateFilters = () => {
    console.log("clicked filters");
    // update state
    setFilterSetActive(!filterSetActive);
  };

  return (
    <header className={$.headerWrapper}>
      {/* logo */}
      <div className={$.logo}>
        <Logo />
      </div>

      {/* searchbar  */}
      <div className={$.searchBar}>
        <form>
          <fieldset>
            <label htmlFor="">Zoek je cocktail</label>
            <input
              type="text"
              value={value}
              name="searchbar"
              id="searchbar"
              className={$.input}
              placeholder="Zoek je cocktail"
              onChange={handleChange}
              onSubmit={(e) => {
                e.preventDefault();
              }}
              onKeyDown={handleKeyDown}
            />
          </fieldset>
        </form>
      </div>

      {/* filters */}
      <button className={$.filters} onClick={activateFilters}>
        {!filterSetActive && (
          <img
            src="/icons/filter.svg"
            alt="filter icon"
            className={$.filterIcon}
          />
        )}
        {filterSetActive && (
          <img
            src="/icons/close.svg"
            alt="filter icon"
            className={$.filterIcon}
          />
        )}
      </button>
      <div className={fitlerBlock}>
        <p>filter state is now active. ADD FILTERS HERE </p>
      </div>

      {/* {filtersActive && (
        <div className={$.filtersUsed}>
          <p>There are filters active</p>
        </div>
      )} */}
    </header>
  );
};

export default Header;
