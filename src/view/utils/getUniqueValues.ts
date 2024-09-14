import { CocktailCollection } from "@src/types";

export function getUniqueValues(data: Array<CocktailCollection>): string[] {
  let uniqueValues = new Set<string>();

  // specific for ingredients. todo: refactor to a more general fucntion
  data.forEach((item) => {
    item.fields.filterIngredients.forEach((ingredient) => {
      uniqueValues.add(ingredient.toLocaleLowerCase());
    });
  });

  return Array.from(uniqueValues);
}

export function isValueInArray(value: string, valuesArray: string[]): boolean {
  if (!value || !valuesArray) {
    return false;
  }
  return valuesArray.includes(value);
}

export function removeValueFromArray(
  array: string[],
  valueToRemove: string
): string[] {
  return array.filter((item) => item !== valueToRemove);
}
