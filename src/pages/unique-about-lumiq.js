import React, { useEffect, useState, useRef } from "react"
import "../static/style/pageStyle/unique-about-lumiq.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BannerHeader from "../components/bannerHeader"
import Underline from "../components/underline"
import Count from "../components/count"
import Loadable from "@loadable/component"
import { graphql, useStaticQuery } from "gatsby"
import Parser from "html-react-parser"

const NewHome = props => {
  const data = useStaticQuery(
    graphql`
      {
        allAboutLumiqPage {
          nodes {
              journey {
                attributes {
                  cmpName
                  header
                  subHeader
                  paragraph
                  dynamicCmp {
                    Text
                    description
                    imageUrl
                    header
                    l1
                    l2
                    l3
                  }
                }
              }
          }
        }
      }
    `
  )
  const footerHeader = data.allAboutLumiqPage.nodes[0].journey[0]
  const firmlyRooted = data.allAboutLumiqPage.nodes[0].journey[1]
  const unlocking = data.allAboutLumiqPage.nodes[0].journey[2]
  const differentiators = data.allAboutLumiqPage.nodes[0].journey[3]
  const differentiators02 = data.allAboutLumiqPage.nodes[0].journey[4]
    const differentiators03 = data.allAboutLumiqPage.nodes[0].journey[5]
      const differentiators04 = data.allAboutLumiqPage.nodes[0].journey[6]
  const [isNavBarOpen, setIsNavBarOpen] = useState(true);
  const imgAlt = "enterprise ai"

  return (
    <div
      className={`what-is-unique-about-lumiq ${
        isNavBarOpen ? "" : "no-scroll"
      }`}
    >
      <div className="page-content">
        {/* -------- Banner start -------- */}
        <div className="banner-wrapper">
          <div className="page-wrapper">
            <div className="page-banner">
              <div className="banner-header">
                <BannerHeader
                  header={footerHeader?.attributes?.header}
                  subHeader={footerHeader?.attributes?.subHeader}
                  line={"two-line"}
                  headingType={"bannerTitle"}
                />
              </div>
              <div className="banner-header-mobile">
                <BannerHeader
                  header={"What Is  <br/> Unique About <br/>  LUMIQ"}
                  subHeader={footerHeader?.attributes?.subHeader}
                  line={"three-line"}
                  headingType={"bannerTitle"}
                />
              </div>
              <div className="banner-img-container">
                <div className="banner-img">
                  <img
                    src={`${
                      process.env.STRAPI_URL +
                      footerHeader?.attributes?.dynamicCmp[0]?.imageUrl
                    }`}
                    alt="bannerImg"
                  />
                </div>
                {/* change letter to div */}
                <div className="banner-detaild-content">
                  <table>
                    <thead>
                      <th colspan="2">
                        <div className="table-header">
                          <h2 className="heading-md">
                            {footerHeader?.attributes?.dynamicCmp[1]?.Text}
                          </h2>
                          <p>
                            {
                              footerHeader?.attributes?.dynamicCmp[1]
                                ?.description
                            }
                          </p>
                        </div>
                      </th>
                    </thead>
                    <tbody>
                      <td>
                        <div className="table-content">
                          <h2 className="heading-md">
                            {footerHeader?.attributes?.dynamicCmp[2]?.Text}
                          </h2>
                          <p>
                            {
                              footerHeader?.attributes?.dynamicCmp[2]
                                ?.description
                            }
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="table-content">
                          <h2 className="heading-md">
                            {footerHeader?.attributes?.dynamicCmp[3]?.Text}
                          </h2>
                          <p>
                            {
                              footerHeader?.attributes?.dynamicCmp[3]
                                ?.description
                            }
                          </p>
                        </div>
                      </td>
                    </tbody>
                    <tr>
                      <td>
                        <div className="table-content">
                          <h2 className="heading-md">
                            {footerHeader?.attributes?.dynamicCmp[4]?.Text}
                          </h2>
                          <p>
                            {
                              footerHeader?.attributes?.dynamicCmp[4]
                                ?.description
                            }
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="table-content">
                          <h2 className="heading-md">
                            {footerHeader?.attributes?.dynamicCmp[5]?.Text}
                          </h2>
                          <p>
                            {
                              footerHeader?.attributes?.dynamicCmp[5]
                                ?.description
                            }
                          </p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="banner-detailed-content-mobile">
                  <div className="content-details header">
                    <h2 className="heading-md">
                      {footerHeader?.attributes?.dynamicCmp[1]?.Text}
                    </h2>
                    <p>
                      {footerHeader?.attributes?.dynamicCmp[1]?.description}
                    </p>
                  </div>
                  <div className="content-details">
                    <h2 className="heading-md">
                      {footerHeader?.attributes?.dynamicCmp[2]?.Text}
                    </h2>
                    <p>
                      {footerHeader?.attributes?.dynamicCmp[2]?.description}
                    </p>
                  </div>
                  <div className="content-details">
                    <h2 className="heading-md">
                      {footerHeader?.attributes?.dynamicCmp[3]?.Text}
                    </h2>
                    <p>
                      {footerHeader?.attributes?.dynamicCmp[3]?.description}
                    </p>
                  </div>
                  <div className="content-details">
                    <h2 className="heading-md">
                      {footerHeader?.attributes?.dynamicCmp[4]?.Text}
                    </h2>
                    <p>
                      {footerHeader?.attributes?.dynamicCmp[4]?.description}
                    </p>
                  </div>
                  <div className="content-details">
                    <h2 className="heading-md">
                      {footerHeader?.attributes?.dynamicCmp[5]?.Text}
                    </h2>
                    <p>
                      {footerHeader?.attributes?.dynamicCmp[5]?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------- Banner end -------- */}
        <div className="clear"></div>
        <Underline />

        {/* --------section 01 start -------- */}
        <div className="firmly-rooted">
          <div className="page-wrapper ">
            <div className="main-container">
              <div className="left-content">
                <BannerHeader
                  header={firmlyRooted?.attributes?.header}
                  line={"three-line"}
                />
                <p className="heading-sm disable-mobile">
                  {firmlyRooted?.attributes?.subHeader}
                </p>
              </div>
              <div className="right-content">
                <img
                  src={`${
                    process.env.STRAPI_URL +
                    firmlyRooted?.attributes?.dynamicCmp[0]?.imageUrl
                  }`}
                  alt={imgAlt}
                />
                <p className="heading-sm active-mobile">
                  {firmlyRooted?.attributes?.dynamicCmp[0]?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* --------section 01 end -------- */}

        <Underline />
        <div className="clear"></div>
        {/* --------section 02 start building our data -------- */}

        {/* --------new section added here and count number are also changed below this section -------- */}
        <div className="unlocking-the-lumiq">
          <div className="page-wrapper ">
            <div className="main-container">
              <BannerHeader
                header={unlocking?.attributes?.header}
                line={"two-line"}
              />

              <div className="unlocking-inner-container">
                <h3 className="heading-sm sub-title">
                  {unlocking?.attributes?.subHeader}
                </h3>
                <div className="unlocking-inner">
                  {unlocking?.attributes?.dynamicCmp?.map((val, idx) => (
                    <div className="unlocking-inner-section">
                      <div className="unlocking-inner-icon">
                        <img
                          src={`${process.env.STRAPI_URL + val?.imageUrl}`}
                          alt={imgAlt}
                        />
                      </div>
                      <p>{val?.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <Underline />

        <div className="differentiators-section">
          <div className="page-wrapper">
            <div className="differentiators-inner">
              <BannerHeader header={"Differentiators"} line={"single-line"} />
              <div className="differentiators-inner-container">
                <Count count={"01"} />
                <BannerHeader
                  header={differentiators04?.attributes?.header}
                  line={"single-line"}
                  class="heading-md"
                  headingType="h3"
                />
                <p className="black-sub-header">{differentiators04?.attributes?.subHeader}</p>
                <p className="grey-sub-header">{differentiators04?.attributes?.paragraph}               </p>
                <div>
                <img src={`${process.env.STRAPI_URL +differentiators04?.attributes?.dynamicCmp[0]?.imageUrl}`} alt={imgAlt}/>
                </div>
              </div>
              <Underline />  
              <div className="differentiators-inner-container">
                <Count count={"02"} />
                <BannerHeader
                  header={differentiators03?.attributes?.header}
                  line={"single-line"}
                  class="heading-md"
                  headingType="h3"
                />
                <p className="black-sub-header"> {differentiators03?.attributes?.subHeader}</p>
                <p className="grey-sub-header">{differentiators03?.attributes?.paragraph}</p>
                <div>
                  <img src={`${process.env.STRAPI_URL +differentiators03?.attributes?.dynamicCmp[0]?.imageUrl}`} alt={imgAlt} />
                </div>
              </div>
              <Underline />  
              <div className="differentiators-inner-container">
                <Count count={"03"} />
                <BannerHeader
                  header={differentiators?.attributes?.header}
                  line={"single-line"}
                  class="heading-md"
                  headingType="h3"
                />
                <p className="black-sub-header">
                {differentiators?.attributes?.subHeader}
                </p>
                <p className="grey-sub-header">
                {differentiators?.attributes?.paragraph}
                </p>
                <div className="differentiators-block">
                {differentiators?.attributes?.dynamicCmp?.map((val,idx)=>(
                  <p>{Parser(val?.Text)}
                </p>
                ))}
                </div>
              </div>
              <Underline />
              <div className="differentiators-inner-container">
                <Count count={"04"} />
                <BannerHeader
                  header={differentiators02?.attributes?.header}
                  line={"single-line"}
                  class="heading-md"
                  headingType="h3"
                />
                <p className="black-sub-header">
                {differentiators02?.attributes?.subHeader}
                </p>
                <p className="grey-sub-header">
                {differentiators02?.attributes?.paragraph}
                </p>
                <div className="differentiators-block">
                  <h3>Most common themes customer deploy with LUMIQ</h3>

                  {differentiators02?.attributes?.dynamicCmp?.map((val,idx)=>(
                    <div className="customer-deploy">
                    <p className="customer-deploy-heading">
                      {val?.header}
                    </p>
                    <p className="customer-deploy-details">
                      {val?.l1} <br />{val?.l2}
                      <br /> {val?.l3}
                    </p>
                  </div>
                  ))}
                </div>
              </div>
              {/* <Underline />              */}
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <Underline />
      </div>
    </div>
  )
}

export default NewHome
