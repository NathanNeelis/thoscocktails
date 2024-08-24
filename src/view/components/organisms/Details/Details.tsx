import React from "react";
import {
  Ingredients,
  Description,
  Method,
  Creator,
} from "@src/view/components";
import { CocktailCollection } from "@src/types";

import $ from "./Details.module.scss";

interface Props {
  cocktail: CocktailCollection;
}

const Details: React.FC<Props> = ({ cocktail }) => {
  return (
    <div className={$.details}>
      {/* cocktail description  */}
      <Description cocktail={cocktail} />

      {/* ingredients  */}
      <Ingredients ingredients={cocktail.fields.ingredients} />

      {/* method  */}
      <Method method={cocktail.fields.method} />

      {/* creator  */}
      <Creator bartender={cocktail.fields.bartender} />
    </div>
  );
};

export default Details;
