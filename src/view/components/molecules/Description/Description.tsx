import React from "react";
import { Tags } from "@src/view/components";
import { CocktailCollection } from "@src/types";

import $ from "./Description.module.scss";

interface Props {
  cocktail: CocktailCollection;
}

const Description: React.FC<Props> = ({ cocktail }) => {
  const thoRaySummer = cocktail.fields.thoRaySummer;

  return (
    <div className={$.descriptionWrapper}>
      <div className={$.descriptionHeader}>
        {thoRaySummer && (
          <div className={$.thoRaySummer}>
            <p className={$.trs}>Available during </p>
            <p>ThoRay Summer 2026</p>
          </div>
        )}
        <h2>{cocktail.fields.name.toUpperCase()}</h2>
        <div className={$.tagsWrapper}>
          <Tags tagCollection={cocktail.fields.tags} />
        </div>
      </div>

      <div className={$.descriptionContent}>
        <p>{cocktail.fields.description}</p>
      </div>
    </div>
  );
};

export default Description;
