import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
import SEO from "../components/seo"
import "../static/style/globalCss/common.scss"

import "../static/style/globalCss/common.scss"
// import Layout from "../components/Layout"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Whale watching for all</h1>
    <p>Come see extraordinary whales!</p>
    <StaticImage
      src="../images/whale-watching.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A surfacing whale"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </>
)

export default IndexPage