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
      <Description description={cocktail.fields.description} />

      {/* ingredients  */}
      <Ingredients />

      {/* method  */}
      <Method />

      {/* creator  */}
      <Creator />
    </div>
  );
};

export default Details;
