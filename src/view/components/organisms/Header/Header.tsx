import React, { useState } from "react";
import { Logo } from "@src/view/components";

import $ from "./Header.module.scss";

type Props = {
  onChangeCallback?: (value: string) => void;
};

const Header: React.FC<Props> = ({ onChangeCallback }) => {
  // initiate states
  const [value, setValue] = useState("");

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
      <div className={$.filters}>
        <img
          src="/icons/filter.svg"
          alt="filter icon"
          className={$.filterIcon}
        />
      </div>
    </header>
  );
};

export default Header;
