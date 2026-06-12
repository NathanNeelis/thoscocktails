import { useState, useEffect } from "react";
import Head from "next/head";
import { createClient } from "contentful";
import { Header, Logo, CocktailCard } from "@src/view/components";
import { CocktailCollection } from "@src/types";
import { getUniqueValues, filterCocktailsByIngredients } from "@src/view/utils";

import $ from "./index.module.scss";

/* 
  resource for dynamic search
  https://dev.to/alais29dev/building-a-real-time-search-filter-in-react-a-step-by-step-guide-3lmm
  */

interface Props {
  cocktailCollection: Array<CocktailCollection>;
}

const Home: React.FC<Props> = ({ cocktailCollection }) => {
  // initiate states
  const [filteredCocktailCollection, setFilteredCocktailCollection] =
    useState(cocktailCollection);

  const [searchTerm, setSearchTerm] = useState("");
  const uniqueIngredients: string[] = getUniqueValues(cocktailCollection);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(
    () => {
      if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem("ingredients") || "[]");
      }
      return [];
    },
  );
  const [thoRaySummerOnly, setThoRaySummerOnly] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("thoRaySummer") || "false");
    }
    return false;
  });

  // ThoRaySUmmer callback function
  const handleThoRaySummerChange = (checked: boolean) => {
    setThoRaySummerOnly(checked);
    updateFilteredCollection(searchTerm, selectedIngredients, checked);
  };

  const updateFilteredCollection = (
    search: string,
    ingredients: string[],
    thoRaySummer: Boolean,
  ) => {
    let filtered = cocktailCollection;

    // Filter by ingredients
    if (ingredients.length > 0) {
      filtered = filterCocktailsByIngredients(filtered, ingredients);
    }

    // Filter by search term
    if (search) {
      filtered = filtered.filter((cocktail) =>
        cocktail.fields.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (thoRaySummer) {
      filtered = filtered.filter(
        (cocktail) => cocktail.fields.thoRaySummer === true,
      );
    }

    setFilteredCocktailCollection(filtered);
  };

  // Searchbar input change handler
  const handleSearchInputChange = (search: string): void => {
    setSearchTerm(search);
    updateFilteredCollection(search, selectedIngredients, thoRaySummerOnly);
  };

  // Callback function to handle input filters
  const handleFilterInputChange = (ingredients: string[]): void => {
    setSelectedIngredients(ingredients);
    updateFilteredCollection(searchTerm, ingredients, thoRaySummerOnly);
  };

  useEffect(() => {
    localStorage.setItem("ingredients", JSON.stringify(selectedIngredients));
  }, [selectedIngredients]);

  useEffect(() => {
    localStorage.setItem("thoRaySummer", JSON.stringify(thoRaySummerOnly));
  }, [thoRaySummerOnly]);

  return (
    <div className={$.container}>
      <Head>
        <title>Tho&apos;s Cocktails</title>
        <meta
          name="description"
          content="Het cocktail menu van Tho's Cocktails"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- MANIFEST  --> */}
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Header
        onChangeCallback={handleSearchInputChange}
        ingredients={uniqueIngredients}
        onFilterChangeCallback={handleFilterInputChange}
        onThoRaySummerChange={handleThoRaySummerChange}
      />

      <main>
        {filteredCocktailCollection.length === 0 ? (
          // TODO: update the empty state
          <p>No cocktails found</p> // should be component
        ) : (
          <CocktailCard cocktailCollection={filteredCocktailCollection} />
        )}
      </main>

      <footer></footer>
    </div>
  );
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCES_TOKEN as string,
  });

  const cocktails = await client.getEntries({ content_type: "cocktailRecipe" });

  return {
    props: {
      cocktailCollection: cocktails.items,
    },
  };
}

export default Home;
