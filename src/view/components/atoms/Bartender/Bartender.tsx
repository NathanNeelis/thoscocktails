import React from "react";

import $ from "./Bartender.module.scss";

const Bartender: React.FC = () => {
  return (
    <div className={$.bartenderWrapper}>
      <div className={$.bartenderProfileImage}>
        <img src="/images/thomas.jpeg" alt="Photo of Thomas" />
      </div>
      <div className={$.bartenderProfileDetails}>
        <h3>Thomas</h3>
        <h4>Mixologist</h4>
        <p>
          <span>A great cocktail is a story in a glass. </span>
        </p>
      </div>
    </div>
  );
};

export default Bartender;
