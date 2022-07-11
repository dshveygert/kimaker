import type { GatsbyConfig } from "gatsby";
import {environment} from "./environment";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `kimaker`,
    siteUrl: environment.host
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": environment.gaID
    }
  }, "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};

export default config;
