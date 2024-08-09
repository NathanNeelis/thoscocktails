import React from "react";
import {
  Ingredients,
  Description,
  Method,
  Creator,
} from "@src/view/components";

import $ from "./Details.module.scss";

type Props = {};

const Details: React.FC<Props> = ({}) => {
  return (
    <div className={$.details}>
      {/* cocktail description  */}
      <Description />

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
