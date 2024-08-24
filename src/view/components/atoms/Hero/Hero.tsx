import React from "react";

import $ from "./Hero.module.scss";

interface Props {
  cocktailImage: string;
  alt: string;
}

const Hero: React.FC<Props> = (cocktailImage, alt) => {
  console.log(cocktailImage);
  return (
    <div className={$.hero}>
      <img src={cocktailImage.cocktailImage} alt={alt} />
    </div>
  );
};

export default Hero;
