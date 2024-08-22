import React from "react";
import { Tags } from "@src/view/components";

import $ from "./Description.module.scss";

interface Props {
  description: string;
}

const Description: React.FC<Props> = ({ description }) => {
  return (
    <div className={$.descriptionWrapper}>
      <div className={$.descriptionHeader}>
        <div className={$.tagsWrapper}>{/* <Tags /> */}</div>
        <h2>El Diablo</h2>
      </div>

      <div className={$.descriptionContent}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Description;
