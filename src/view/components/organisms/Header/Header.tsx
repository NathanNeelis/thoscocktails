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
  onThoRaySummerChange?: (checked: boolean) => void;
};

const Header: React.FC<Props> = ({
  onChangeCallback,
  ingredients,
  onFilterChangeCallback,
  onThoRaySummerChange,
}) => {
  // initiate states
  const [value, setValue] = useState("");
  const [filterSetActive, setFilterSetActive] = useState(false);
  const [filtersActive, setFiltersActive] = useState(false);
  const [filterValues, setFilterValues] = useState<string[]>([]);
  const [trsChecked, setTrsChecked] = useState(true);

  const fitlerBlock = classnames([
    $.filterWrapper,
    filterSetActive && $.filterBlockActive,
  ]);

  useEffect(() => {
    // initial state. All ingredients are available.
    checkAllCheckboxes("ingredientsFilter");
    setTrsChecked(false);
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

  // Tho Ray SUmmer filter
  const handleTrsFilterChange = (checked: boolean) => {
    setTrsChecked(checked);

    if (onThoRaySummerChange) {
      onThoRaySummerChange(checked);
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

    if (swipeDistance > 320) {
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
        <section
          className={fitlerBlock}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* TRS FILTER  */}
          <div className={$.trsFilter}>
            <h3>Available during ThoRay Summer</h3>
            <form id="trsFilter">
              <fieldset>
                <div className={$.checkboxWrapper}>
                  <input
                    type="checkbox"
                    id="thoraysummerfilter"
                    checked={trsChecked}
                    className={$.customCheckbox}
                    onChange={(e) => {
                      handleTrsFilterChange(e.target.checked);
                    }}
                  />

                  <label
                    className={$.customCheckboxLabel}
                    htmlFor="thoraysummerfilter"
                  >
                    ThoRaySummer<span></span>
                  </label>
                </div>
              </fieldset>
            </form>
          </div>

          {/* INGREDIENTS FILTER  */}
          <div className={$.ingrFilter}>
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
        </section>
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
