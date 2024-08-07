import React from "react";
import { Logo } from "@src/view/components";

import $ from "./Header.module.scss";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <header className={$.headerWrapper}>
      {/* logo */}
      <div className={$.logo}>
        <Logo />
      </div>

      {/* searchbar  */}
      <form className={$.searchBar}>
        <fieldset>
          <label htmlFor="">Zoek je cocktail</label>
          <input
            type="text"
            name="searchbar"
            id="searchbar"
            className={$.input}
            placeholder="Zoek je cocktail"
            onInput={(e) => {
              // do something
            }}
          />
        </fieldset>
      </form>

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
