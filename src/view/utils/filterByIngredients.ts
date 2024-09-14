import { CocktailCollection } from "@src/types";
// move to utils
export function filterCocktailsByIngredients(
  cocktails: CocktailCollection[],
  availableIngredients: string[]
) {
  let newCocktailCollection = cocktails.filter((cocktail) =>
    cocktail.fields.filterIngredients.every((ingredient) =>
      availableIngredients.includes(ingredient.toLocaleLowerCase())
    )
  );

  return newCocktailCollection;
}
