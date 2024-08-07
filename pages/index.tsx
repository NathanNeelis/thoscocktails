import { createClient } from "contentful";

import $ from "./index.module.scss";

interface Props {}

const Home: React.FC<Props> = ({}) => {
  return (
    <div className={$.container}>
      <p>hello world</p>

      <main></main>

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
