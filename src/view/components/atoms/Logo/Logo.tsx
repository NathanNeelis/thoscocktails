import React from "react";
import { ImageWrapper } from "@src/view/components";

import $ from "./Logo.module.scss";

const Logo: React.FC = () => {
  return (
    <ImageWrapper
      className={$.logoImage}
      alt="Logo Tho's Cocktails"
      src="/logo_thos-cocktails_v2.svg"
      width={65}
      height={65}
      priority
    />
  );
};

export default Logo;
