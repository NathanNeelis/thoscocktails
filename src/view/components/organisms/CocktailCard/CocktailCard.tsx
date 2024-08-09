import React from "react";
import { Tags } from "@src/view/components";

import $ from "./CocktailCard.module.scss";

type Props = {};

const CocktailCard: React.FC<Props> = ({}) => {
  return (
    <div className={$.cards}>
      <div className={$.cocktailCardWrapper}>
        <div className={$.cocktailImageWrapper}>
          <img
            src="/images/eldiablo.jpeg"
            alt="El Diablo cocktail visual"
            className={$.cocktailImage}
          />
        </div>
        <div className={$.cocktailTitle}>
          <h2>El Diablo</h2>
        </div>

        {/* tags */}
        <Tags />
      </div>

      <div className={$.cocktailCardWrapper}>
        <div className={$.cocktailImageWrapper}>
          <img
            src="/images/bramble.jpeg"
            alt="El Diablo cocktail visual"
            className={$.cocktailImage}
          />
        </div>
        <div className={$.cocktailTitle}>
          <h2>Bramble</h2>
        </div>

        <Tags />
      </div>

      <div className={$.cocktailCardWrapper}>
        <div className={$.cocktailImageWrapper}>
          <img
            src="/images/long-island.jpg"
            alt="long island cocktail visual"
            className={$.cocktailImage}
          />
        </div>
        <div className={$.cocktailTitle}>
          <h2>Long Island</h2>
        </div>

        <Tags />
      </div>
    </div>
  );
};

export default CocktailCard;
