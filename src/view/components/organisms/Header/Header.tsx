import React, { useState, useRef, useEffect } from "react";
import { Logo } from "@src/view/components";
import classnames from "classnames";
import {
  checkAllCheckboxes,
  areAllCheckboxesChecked,
  getCheckedCheckboxValues,
} from "@src/view/utils";

import $ from "./Header.module.scss";

type Props = {
  onChangeCallback?: (value: string) => void;
  onFilterChangeCallback?: (value: string[]) => void;
  ingredients: Array<string>;
};

const Header: React.FC<Props> = ({
  onChangeCallback,
  ingredients,
  onFilterChangeCallback,
}) => {
  // initiate states
  const [value, setValue] = useState("");
  const [filterSetActive, setFilterSetActive] = useState(false);
  const [filtersActive, setFiltersActive] = useState(false);
  const [filterValues, setFilterValues] = useState<string[]>([]);

  const fitlerBlock = classnames([
    $.filterWrapper,
    filterSetActive && $.filterBlockActive,
  ]);

  useEffect(() => {
    // initial state. All ingredients are available.
    checkAllCheckboxes("ingredientsFilter");
  }, []);

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

  // Ingredients filter
  const handleFilterChange = () => {
    let currentFilters: string[] = filterValues;
    currentFilters = getCheckedCheckboxValues("ingredientsFilter");

    if (!areAllCheckboxesChecked("ingredientsFilter")) {
      setFiltersActive(true);
    }

    if (onFilterChangeCallback) {
      onFilterChangeCallback(currentFilters); // Invoke the callback with the new input value
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default Enter key behavior
    }
  };

  const activateSetFilters = () => {
    setFilterSetActive(!filterSetActive);
  };

  const DeactivateFilters = () => {
    setFiltersActive(false);
    checkAllCheckboxes("ingredientsFilter");
    handleFilterChange();
  };

  // Filter touch
  // When swiped down in filter, close filter
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    let swipeDistance = touchEndY.current - touchStartY.current;

    if (swipeDistance > 120) {
      setFilterSetActive(!filterSetActive);
      swipeDistance = 0;
      touchEndY.current = 0;
      touchStartY.current = 0;
    }
  };

  return (
    <header className={$.header}>
      <div className={$.headerWrapper}>
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
        <button className={$.filters} onClick={activateSetFilters}>
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

        {/* FILTERBLOCK should be compontent  */}
        <div
          className={fitlerBlock}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <h3>Your available ingredients</h3>
          <form id="ingredientsFilter">
            <fieldset>
              {ingredients &&
                ingredients.map((ingredient) => {
                  return (
                    <div className={$.checkboxWrapper} key={ingredient}>
                      <input
                        type="checkbox"
                        id={ingredient}
                        value={ingredient}
                        className={$.customCheckbox}
                        onChange={handleFilterChange}
                      />
                      <label
                        className={$.customCheckboxLabel}
                        htmlFor={ingredient}
                      >
                        {ingredient} <span></span>
                      </label>
                    </div>
                  );
                })}
            </fieldset>
          </form>
        </div>
      </div>

      {/* FILTERSNOTIFICATION should be component  */}
      {filtersActive && (
        <div className={$.filtersActive}>
          <div className={$.filterNotificationWrapper}>
            <button onClick={activateSetFilters} className={$.regular}>
              There are filters active
            </button>
            <button onClick={DeactivateFilters}>Disable</button>
          </div>
        </div>
      )}
      {!filtersActive && <div className={$.filtersInactive}></div>}
    </header>
  );
};

export default Header;
