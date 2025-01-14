/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const axios = require("axios")
const crypto = require("crypto")
const path = require("path");
 
const {graphql} =require('gatsby');
const { json } = require('stream/consumers');



exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
 
  // Fetch the blog details
  const result = await graphql(`
    query MyQuery {
  allStrapiBlog {
    edges {
      node {
        attributes {
          author
          blogType
          header
          imageUrl
          description
          slug
        }
      }
    }
  }
}
  `);
 
  if (result.errors) {
    console.error(result.errors);
    throw new Error("Failed to fetch data for blog pages");
  }
 
  // Access the blogs data
  const blogs = result.data.allStrapiBlog.edges;
  console.log(JSON.stringify(blogs),"***************")
 
  // Create pages for each blog
  blogs.forEach(({ node }) => {
   
      createPage({
        path: `/blog/${node.attributes.slug}`, // URL for the blog page
        component: path.resolve(`src/templates/template.js`), // Template for the blog
        context: {  node},
      });
  });
};
