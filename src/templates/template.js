import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

const BlogTemplate = ({ pageContext }) => {
 
  // const blog = data.strapiBlogDetail.blogs[0];
  const content=pageContext.node.attributes;
  console.log(content, 'king');
  return (
    <>
    <Helmet>
        <title>{"title"}</title>
        <meta name="description" content={"description"} />
        <meta property="og:title" content={content.header} />
        <meta property="og:description" content={content.slug} />
        <meta property="og:image" content={`${process.env.STRAPI_URL + content.imageUrl}`} />
      </Helmet>
    <div className="preview-page">
      <div className="page-content">
        <div className="flex">
          <h1>{content.header}</h1>
          <h2 className="tw-pt-8">{content.slug}</h2>
          <div className="tw-pt-3">
            <img src={`${process.env.STRAPI_URL + content.imageUrl}`}/>
          </div>
        </div>
      </div>
    </div>
    </>
    

  );
};



export default BlogTemplate;
