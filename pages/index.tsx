import Head from "next/head";
import { createClient } from "contentful";
import { Header, CocktailCard } from "@src/view/components";
import { CocktailCollection } from "@src/types";

import $ from "./index.module.scss";

interface Props {
  cocktailCollection: Array<CocktailCollection>;
}

const Home: React.FC<Props> = ({ cocktailCollection }) => {
  return (
    <div className={$.container}>
      <Head>
        <title>Tho&apos;s Cocktails</title>
        <meta
          name="description"
          content="Het cocktail menu van Tho's Cocktails"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />

      <main>
        <CocktailCard cocktailCollection={cocktailCollection} />
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
  // console.log("return header", cocktails.items[0].fields);
  return {
    props: {
      cocktailCollection: cocktails.items,
    },
  };
}

export default Home;
