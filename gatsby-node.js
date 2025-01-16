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


exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  const requestData = async (url, nodeType) => {
    const response = await axios.get(url);
    return {
      id: `${nodeType}-1`, // Unique ID for each node
      parent: `__SOURCE__`,
      internal: {
        type: nodeType,
      },
      children: [],
      journey: response.data.data, // Store fetched data in a consistent field
    };
  };

  const requests = [
    {
      url: `${process.env.STRAPI_URL}/api/home-v3s?pagination[start]=0&pagination[limit]=1000&populate=*`,
      type: "homeV3Page",
    },
    {
      url: `${process.env.STRAPI_URL}/api/platform-v3s?pagination[start]=0&pagination[limit]=1000&populate=*`,
      type: "platformV3Page",
    },
    {
      url: `${process.env.STRAPI_URL}/api/partner-v3s?pagination[start]=0&pagination[limit]=1000&populate=*`,
      type: "partnerPage",
    },
    {
      url: `${process.env.STRAPI_URL}/api/company-v3s?pagination[start]=0&pagination[limit]=1000&populate=*`,
      type: "companyPage",
    },
    {
      url: `${process.env.STRAPI_URL}/api/careers?pagination[start]=0&pagination[limit]=1000&populate=*`,
      type: "careerPage",
    },
    {
      url: `${process.env.STRAPI_URL}/api/sub-pages?populate[dynamicCmp][populate]=*`,
      type: "empPage",
    },
    {
      url: `${process.env.STRAPI_URL}/api/aws-consulting-partners?pagination[start]=0&pagination[limit]=1000&populate=*`,
      type: "awsPage",
    },
    {
      url: `${process.env.STRAPI_URL}/api/aws-partners/?pagination[start]=0&pagination[limit]=1000&populate=*`,
      type: "awsPartnerPage",
    },
    {
      url: `${process.env.STRAPI_URL}/api/gcp-partners/?pagination[start]=0&pagination[limit]=1000&populate=*`,
      type: "gcpPartnerPage",
    },
    {
      url: `${process.env.STRAPI_URL}/api/gcp-consulting-partners?pagination[start]=0&pagination[limit]=1000&populate=*`,
      type: "gcpPage",
    },
    {
      url: `${process.env.STRAPI_URL}/api/blogs?populate[dynamicCmp][populate]=*`,
      type: "blogPage",
    },
    {
      url: `${process.env.STRAPI_URL}/api/cmp-grps?populate[dynamicCmp][populate]=*`,
      type: "cmpGrps",
    },
    {
      url: `${process.env.STRAPI_URL}/api/unique-about-luimqs?pagination[start]=0&pagination[limit]=1000&populate=*`,
      type: "aboutLumiqPage",
    },
    {
      url: `${process.env.STRAPI_URL}/api/devops-pages?pagination[start]=0&pagination[limit]=1000&populate=*`,
      type: "devopsPage",
    },
    {
      url: `${process.env.STRAPI_URL}/api/pryzms?pagination[start]=0&pagination[limit]=1000&populate[dynamicCmp][populate]=*`,
      type: "pryzm",
    },
    {
      url: `${process.env.STRAPI_URL}/api/gen-ais/?pagination[start]=0&pagination[limit]=1000&[populate]=*`,
      type: "genai",
    },
    {
      url: `${process.env.STRAPI_URL}/api/aws-foundations/?pagination[start]=0&pagination[limit]=1000&[populate]=*`,
      type: "awsFoundation",
    },
    
  ];
  const responses = await Promise.all(
    requests.map(async ({ url, type }) => await requestData(url, type))
  );
  // Create nodes for each response
  responses.forEach((response, index) => {
    const digest = crypto
      .createHash("md5")
      .update(JSON.stringify(response))
      .digest("hex");
    response.internal.contentDigest = digest;
    createNode(response);
  });

}

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
  console.log("****************successfully fetched blog data during build***************");
 
  // Create pages for each blog:
  blogs.forEach(({ node }) => {
      createPage({
        path: `/resources/detailedBlog/${node.attributes.slug}`, // URL for the blog page
        component: path.resolve(`src/templates/template.js`), // Template for the blog
        context: {  node},
      });
  });
};
