/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})
const strapiConfig = {
  apiURL: process.env.STRAPI_URL || "http://127.0.0.1:1337",
  collectionTypes: ["blog","blog-detail","pryzm"],
};
module.exports = {
  siteMetadata: {
    title: `Wondrous World of Whale Watching`,
    description: `Come and enjoy an experience of a lifetime! Watch whales with us!`,
    author: `@digitalocean`,
    keywords: `whales, marine life, trip, recreation`,
    image: `https://webbk.lumiq.ai/uploads/img2_3ed067960c.png`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve:`gatsby-plugin-apollo`,
      options: {
        uri: `${process.env.STRAPI_URL}/graphql`
      }
    },
  ],
}
