import React from "react";
import { BartenderType } from "@src/types";

import $ from "./Bartender.module.scss";

interface Props {
  bartender: BartenderType;
}

const Bartender: React.FC<Props> = ({ bartender }) => {
  console.log(bartender);
  return (
    <div className={$.bartenderWrapper}>
      <div className={$.bartenderProfileImage}>
        <img
          src={bartender.fields.profilePhoto.fields.file.url}
          alt={bartender.fields.profilePhoto.fields.description}
        />
      </div>
      <div className={$.bartenderProfileDetails}>
        <h3>{bartender.fields.name}</h3>
        <h4>{bartender.fields.title}</h4>
        <p>
          <span>{bartender.fields.quote}</span>
        </p>
      </div>
    </div>
  );
};

export default Bartender;
