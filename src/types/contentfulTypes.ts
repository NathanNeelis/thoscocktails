import { Sys } from "contentful";

export interface CocktailCollection {
  fields: Cocktail;
  sys: Sys;
}

type Cocktail = {
  name: string;
  slug: string;
  image: ImageDetails;
  ingredients: Array<string>;
  tags: Array<string>;
  description: string;
  method: string;
  bartender: BartenderType;
};

export type BartenderType = {
  fields: {
    name: string;
    title: string;
    quote: string;
    profilePhoto: ImageDetails;
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
