import Head from "next/head";
import { createClient } from "contentful";
import { Header, CocktailCard } from "@src/view/components";

import $ from "./index.module.scss";

interface Props {}

const Home: React.FC<Props> = ({}) => {
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
        <CocktailCard />
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

export default Home;
