import React from "react";

import $ from "./Ingredients.module.scss";

interface Props {
  ingredients: Array<string>;
}

const Ingredients: React.FC<Props> = ({ ingredients }) => {
  return (
    <div className={$.ingredientsWrapper}>
      <h3>Ingredients</h3>
      <ul>
        {ingredients &&
          ingredients.map((ingredient) => {
            return <li key={ingredient}>{ingredient}</li>;
          })}
      </ul>
    </div>
  );
};

export default Ingredients;
