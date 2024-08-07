import React from "react";

import $ from "./CocktailCard.module.scss";

type Props = {};

const CocktailCard: React.FC<Props> = ({}) => {
  return (
    <div className={$.cocktailCardWrapper}>
      <p>Titel</p>
    </div>
  );
};

export default CocktailCard;
