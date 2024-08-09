import Head from "next/head";
import { createClient } from "contentful";

import $ from "./index.module.scss";
import Hero from "@src/view/components/atoms/Hero/Hero";
import DetailpageHeader from "@src/view/components/organisms/DetailpageHeader/DetailpageHeader";

interface Props {}

const CocktailPage: React.FC<Props> = ({}) => {
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
      <DetailpageHeader />

      <main className={$.main}>
        {/* cocktail description  */}

        {/* ingredients  */}

        {/* method  */}

        {/* creator  */}
      </main>

      <footer></footer>
    </div>
  );
};

// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID as string,
//     accessToken: process.env.CONTENTFUL_ACCES_TOKEN as string,
//   });

//   const header = await client.getEntries({ content_type: "header" });

//   return {
//     props: {
//       header: header.items,
//     },
//   };
// }

export default CocktailPage;
