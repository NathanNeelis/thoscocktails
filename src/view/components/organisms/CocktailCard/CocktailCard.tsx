import React from "react";
import { Tags } from "@src/view/components";
import { CocktailCollection } from "@src/types";
import classNames from "classnames";

import $ from "./CocktailCard.module.scss";

type Props = {
  cocktailCollection: Array<CocktailCollection>;
};

const CocktailCard: React.FC<Props> = ({ cocktailCollection }) => {
  return (
    <div className={$.cards}>
      {cocktailCollection &&
        cocktailCollection.map((cocktail) => {
          const targetURL = `/cocktail/${cocktail.fields.slug}`;
          const thoRaySummer = cocktail.fields.thoRaySummer;

          return (
            <a
              href={targetURL}
              className={$.cocktailCardWrapper}
              key={cocktail.fields.name}
            >
              <div className={$.cocktailImageWrapper}>
                <img
                  src={cocktail.fields.image.fields.file.url}
                  alt={cocktail.fields.image.fields.description}
                  className={$.cocktailImage}
                />
              </div>

              {thoRaySummer && (
                <div className={$.trsBtn}>
                  <p>Available during ThoRay Summer 2026!</p>
                </div>
              )}

              <div
                className={classNames(
                  thoRaySummer ? $.cocktailTitle : $.cocktailTitle,
                )}
              >
                <h2>{cocktail.fields.name.toUpperCase()}</h2>
              </div>

              {/* tags */}
              <Tags tagCollection={cocktail.fields.tags} />
            </a>
          );
        })}
    </div>
  );
};

export default CocktailCard;
