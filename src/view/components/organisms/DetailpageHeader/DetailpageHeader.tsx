import React from "react";
import { Logo, Hero } from "@src/view/components";
import { CocktailCollection } from "@src/types";

import $ from "./DetailpageHeader.module.scss";

interface Props {
  cocktail: CocktailCollection;
}

const DetailpageHeader: React.FC<Props> = ({ cocktail }) => {
  return (
    <header className={$.header}>
      <div className={$.logo}>
        <Logo />
      </div>
      <Hero
        cocktailImage={cocktail.fields.image.fields.file.url}
        alt={cocktail.fields.image.fields.description}
      />
    </header>
  );
};

export default DetailpageHeader;
