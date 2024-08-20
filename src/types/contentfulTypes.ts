import { Sys } from "contentful";

export interface CocktailCollection {
  fields: Cocktail;
  sys: Sys;
}

type Cocktail = {
  name: string;
  image: ImageDetails;
  ingredients: Array<string>;
  tags: Array<string>;
  method: string;
  bartender: Bartender;
};

type Bartender = {
  fields: {
    name: string;
    title: string;
    quote: string;
    profilePhoto: {
      name: string;
      title: string;
      quote?: string;
      profilePhoto: ImageDetails;
    };
  };
  sys: Sys;
};

type ImageDetails = {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: Number;
        image: {
          width: Number;
          height: Number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
};
