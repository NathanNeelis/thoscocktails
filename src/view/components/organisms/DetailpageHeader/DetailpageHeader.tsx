import React from "react";
import { Logo, Hero } from "@src/view/components";

import $ from "./DetailpageHeader.module.scss";

const DetailpageHeader: React.FC = () => {
  return (
    <header className={$.header}>
      <div className={$.logo}>
        <Logo />
      </div>
      <Hero />
    </header>
  );
};

export default DetailpageHeader;
