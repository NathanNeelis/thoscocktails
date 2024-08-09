import React from "react";

import $ from "./Tags.module.scss";

const Tags: React.FC = () => {
  return (
    <div className={$.tags}>
      <div className={$.tag}>citrus</div>
      <div className={$.tag}>sour</div>
    </div>
  );
};

export default Tags;
