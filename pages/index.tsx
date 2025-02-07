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
  const [searchCocktailCollection, setSearchCocktailCollection] =
    useState(cocktailCollection);

  const uniqueIngredients: string[] = getUniqueValues(cocktailCollection);

  // Searchbar input change handler.
  // Takes a searchterm string and updates the cocktail collection
  const handleSearchInputChange = (searchTerm: string): void => {
    const filteredItems = cocktailCollection.filter((cocktail) =>
      cocktail.fields.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Todo. Combine with filter functionality. Challange; both use e.target.value.
    setSearchCocktailCollection(filteredItems);
  };

  // callback function to handle input filters
  // takes the available ingredients and updates the collection
  const handleFilterInputChange = (availableIngredients: string[]): void => {
    const filteredItems = filterCocktailsByIngredients(
      cocktailCollection,
      availableIngredients
    );
    // console.log("availalbe", availableIngredients);
    setSearchCocktailCollection(filteredItems);
  };

  return (
    <div className={$.container}>
      <Head>
        <title>Tho&apos;s Cocktails</title>
        <meta
          name="description"
          content="Het cocktail menu van Tho's Cocktails"
        />
        <link rel="icon" href="www.dev.nathanneelis.nl/favicon.ico" />
        {/* <!-- MANIFEST  --> */}
        <link rel="manifest" href="www.dev.nathanneelis.nl/manifest.json" />
      </Head>

      <Header
        onChangeCallback={handleSearchInputChange}
        ingredients={uniqueIngredients}
        onFilterChangeCallback={handleFilterInputChange}
      />

      <main>
        {searchCocktailCollection.length === 0 ? (
          // TODO: update the empty state
          <p>No cocktails found</p> // should be component
        ) : (
          <CocktailCard cocktailCollection={searchCocktailCollection} />
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
