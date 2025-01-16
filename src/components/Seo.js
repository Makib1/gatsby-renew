import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

function SEO(
    {
        metaTitle = "LUMIQ | Blog",
    metaDescription = "LUMIQ Blog description",
    ogTitle = "Default OG Title",
    ogDescription = "LUMIQ blog Og:description",
    ogImage = "https://lumiq.ai/static/lumiq-f31913638eef8c454d268b6f70719ae8.webp", // Replace with your actual default image URL
    ogAuthor = "LUMIQ teams",
    ogTags = ["lumiq"]
    }={}
) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//             keywords
//             image
//           }
//         }
//       }
//     `
//   )
//   const image = site.siteMetadata.image
//   const keywords = site.siteMetadata.keywords
//   const metaDescription = description || site.siteMetadata.description
//   const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang:"en",
      }}
      title={metaTitle}
    //   titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: ogTags,
        },
        {
          property: `og:title`,
          content: ogTitle,
        },
        {
          property: `og:description`,
          content: ogDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: ogImage,
        },
        {
          name: `twitter:creator`,
          content: ogAuthor || ``,
        },
        {
          name: `twitter:title`,
          content: ogTitle,
        },
        {
          name: `twitter:description`,
          content: ogDescription,
        },
      ]}
    />
  )
}


SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO