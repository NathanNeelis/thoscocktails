import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { createClient } from "contentful";
import { Details, DetailpageHeader } from "@src/view/components";
import { CocktailCollection } from "@src/types";

import $ from "./index.module.scss";

interface Props {
  cocktail: CocktailCollection;
}
interface Context {
  params: {
    slug: string;
  };
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const CocktailPage: React.FC<Props> = ({ cocktail }) => {
  return (
    <div>
      <Head>
        <title>Tho&apos;s Cocktails</title>
        <meta
          name="description"
          content="Het cocktail menu van Tho's Cocktails"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {/* header  */}
      <DetailpageHeader cocktail={cocktail} />

      <main className={$.main}>
        <Details cocktail={cocktail} />
      </main>

      <footer></footer>
    </div>
  );
};

export const getStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCES_TOKEN as string,
  });

  const cocktails = await client.getEntries({
    content_type: "cocktailRecipe",
  });

  return {
    paths:
      cocktails.items.map((item) => ({
        params: { slug: item.fields.slug || "" },
      })) ?? [],
    fallback: false, // Can be 'false', 'true', or 'blocking'
  };
};

export async function getStaticProps<Params>(context: Context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCES_TOKEN as string,
  });

  const params = context.params;
  const { slug } = params;

  const cocktail = await client.getEntries({
    content_type: "cocktailRecipe",
    "fields.slug[match]": slug,
  });

  return {
    props: {
      cocktail: cocktail.items[0],
    },
  };
}

export default CocktailPage;
