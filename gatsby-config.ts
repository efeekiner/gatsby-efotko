import type { GatsbyConfig } from "gatsby";
import adapter from "gatsby-adapter-netlify";

const config: GatsbyConfig = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
    imageCDN: false,
  }),
  siteMetadata: {
    title: `Ekiner.dev Blog`,
    description: "A blog written by me, about stuff that I find interesting.",
    image: `/ekiner-logo.png`,
    siteUrl: `https://ekiner.dev`,
    twitterUsername: `@MehmetEfeEkiner`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};

export default config;
