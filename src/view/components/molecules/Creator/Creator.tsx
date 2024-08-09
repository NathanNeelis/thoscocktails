import React from "react";
import { Bartender } from "@src/view/components";

import $ from "./Creator.module.scss";

const Creator: React.FC = () => {
  return (
    <div className={$.creatorWrapper}>
      <div className={$.creatorHeader}>
        <h3>Crafted for you by</h3>
      </div>

      <div className={$.creatorContent}>
        <Bartender />
      </div>
    </div>
  );
};

export default Creator;
