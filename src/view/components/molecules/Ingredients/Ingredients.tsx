import React from "react";

import $ from "./Ingredients.module.scss";

const Ingredients: React.FC = () => {
  return (
    <div className={$.ingredientsWrapper}>
      <h3>Ingredients</h3>
      <ul>
        <li>40ml Tequilia</li>
        <li>15ml Creme de Cassis</li>
        <li>25ml Lime Juice</li>
        <li>Ginger Beer</li>
        <li>Lime wedge for Garnish</li>
      </ul>
    </div>
  );
};

export default Ingredients;
