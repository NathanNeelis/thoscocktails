import React from "react";

import $ from "./CocktailCard.module.scss";
import ImageWrapper from "../../atoms/ImageWrapper/ImageWrapper";

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
        <div className={$.tags}>
          <div className={$.tag}>citrus</div>
          <div className={$.tag}>sour</div>
        </div>
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

        <div className={$.tags}>
          <div className={$.tag}>citrus</div>
          <div className={$.tag}>sour</div>
        </div>
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

        <div className={$.tags}>
          <div className={$.tag}>citrus</div>
          <div className={$.tag}>sour</div>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
