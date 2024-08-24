import React from "react";
import { Bartender } from "@src/view/components";
import { BartenderType } from "@src/types";

import $ from "./Creator.module.scss";

interface Props {
  bartender: BartenderType;
}

const Creator: React.FC<Props> = ({ bartender }) => {
  return (
    <div className={$.creatorWrapper}>
      <div className={$.creatorHeader}>
        <h3>Crafted for you by</h3>
      </div>

      <div className={$.creatorContent}>
        <Bartender bartender={bartender} />
      </div>
    </div>
  );
};

export default Creator;
