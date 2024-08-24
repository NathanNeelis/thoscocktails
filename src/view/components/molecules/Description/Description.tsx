import React from "react";
import { Tags } from "@src/view/components";
import { CocktailCollection } from "@src/types";

import $ from "./Description.module.scss";

interface Props {
  cocktail: CocktailCollection;
}

const Description: React.FC<Props> = ({ cocktail }) => {
  return (
    <div className={$.descriptionWrapper}>
      <div className={$.descriptionHeader}>
        <div className={$.tagsWrapper}>
          <Tags tagCollection={cocktail.fields.tags} />
        </div>
        <h2>{cocktail.fields.name.toUpperCase()}</h2>
      </div>

      <div className={$.descriptionContent}>
        <p>{cocktail.fields.description}</p>
      </div>
    </div>
  );
};

export default Description;
