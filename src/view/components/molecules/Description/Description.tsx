import React from "react";
import { Tags } from "@src/view/components";

import $ from "./Description.module.scss";

const Description: React.FC = () => {
  return (
    <div className={$.descriptionWrapper}>
      <div className={$.descriptionHeader}>
        <div className={$.tagsWrapper}>
          <Tags />
        </div>
        <h2>El Diablo</h2>
      </div>

      <div className={$.descriptionContent}>
        <p>
          A tall, long, refreshing mule style drink that mixes grassy tequila
          with full flavoured blackcurrant liqueur and topped with fiery ginger
          beer.
        </p>
      </div>
    </div>
  );
};

export default Description;
