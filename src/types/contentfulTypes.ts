export interface CocktailCollection {
  fields: Cocktail;
  sys: any;
}

type Cocktail = {
  name: string;
  slug: string;
  image: ImageDetails;
  filterIngredients: Array<string>;
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
  sys: any;
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
