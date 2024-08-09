import React from "react";
import { ImageWrapper } from "@src/view/components";

import $ from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <div className={$.hero}>
      <img
        src="/images/eldiablo.jpeg"
        alt="Professional image of the El Diablo cocktail"
      />
    </div>
  );
};

export default Hero;
