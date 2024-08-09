import React from "react";

import $ from "./Method.module.scss";

const Method: React.FC = () => {
  return (
    <div className={$.methodWrapper}>
      <div className={$.methodHeader}>
        <h3>Method</h3>
      </div>

      <div className={$.methodContent}>
        <ol>
          <li>
            Add the tequila, creme de cassis and lime juice into a shaker with
            ice and shake until well-chilled.
          </li>
          <li>
            Strain into a Collins glass over fresh ice and top with the ginger
            beer.
          </li>
          <li>Garnish with a lime wedge.</li>
        </ol>
      </div>
    </div>
  );
};

export default Method;
