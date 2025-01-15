import React, { useState, useRef, useEffect } from "react"
import "aos/dist/aos.css"
import "../static/style/pageStyle/partner-page.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
// import BannerHeader from "../components/bannerHeader"
import Underline from "../components/underline"
// import UnderlineButton from '../components/underlineButton'
import Parser from "html-react-parser"
import Layout from "../components/Layout"
import { FetchedPartnerPageData } from "../services/helperFunctions"
import Loadable from "@loadable/component";


// Define dynamic imports for components
const BannerHeader = Loadable(() => import("../components/bannerHeader"));
const UnderlineButton = Loadable(() => import("../components/underlineButton"));


function PartnersPage(props) {
  const data = useStaticQuery(
    graphql`
      {
        allPartnerPage {
    nodes {
      journey {
        attributes {
          cmpname
          dynamicCmp {
            imageUrl
          }
          header
          paragraph
          subHeader
        }
      }
    }
  }
      }
    `
  )
  useEffect(() => {
    if(props?.location?.state){
      const id = Object.values(props?.location?.state)
      .filter((value, index) => typeof value === "string" && index !== Object.keys(props?.location?.state).length - 1)
      .join("");
      if (id) {
        const partnersLocation = document.getElementById(id);
        if (partnersLocation) {
          partnersLocation.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  },[props?.location?.state])

  const {
    partnerPageObj,
    cloudImages,
    partnerImages,
    channelImages,
    imageAlt,
  } = FetchedPartnerPageData(data.allPartnerPage.nodes[0].journey)
  const [isNavBarOpen, setIsNavBarOpen] = useState(true)
  const imgAlt = "enterprise ai"
  return (
      <div className={`partner-pagev2 ${isNavBarOpen ? "" : "no-scroll"}`} id="ourPartners">
        <div className="page-content">
          {/* Banner Start */}
          <div className="partner-banner">
            <div className="page-wrapper">
              <BannerHeader
                header={partnerPageObj["header-header"]}
                subHeader={partnerPageObj["header-subHeader"]}
                line={"two-line"}
              />
              <div className="banner-image-section">
                <img src={`${process.env.STRAPI_URL + partnerPageObj["header-images"]}`} alt="lumiq-banner" />
              </div>
            </div>
          </div>
          {/* Partnership Quote */}
          <div className="partnes-quotes">
            <div className="page-wrapper">
              <h4 className="partner-quote-desktop heading-sm">
                {Parser(partnerPageObj["header-paragraph"])}
              </h4>
            </div>
          </div>
          <Underline />
          {/* Partnership Type */}
          <div className="partners-types">
            <div className="page-wrapper">
              <div className="partners-types-inner" >
                <div className="partner-box cloud-partner">
                  <div className="left-title">
                    <BannerHeader
                      header={partnerPageObj["cloud-partners-header"]}
                      line={"two-line"}
                      class="heading-sm"
                    />
                  </div>
                  <div className="right-details">
                    <p>{Parser(partnerPageObj["cloud-partners-subHeader"])}</p>
                    <div className="logo-box">
                      {cloudImages.map((images, index) => (
                        <div className="partner-logo">
                          <div className="img-box">
                            <img src={`${process.env.STRAPI_URL + images}`} alt={imageAlt} />
                          </div>
                          {(index === 0) && (
                            <Link to="/aws-partner"  target="_blank" name="aws-consulting-partner">
                              <UnderlineButton text={"Learn More"} />
                            </Link> 
                          )}
                          {(index === 1) && (
                            <Link to="/gcp-partner"  target="_blank" name="aws-consulting-partner">
                              <UnderlineButton text={"Learn More"} />
                            </Link> 
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="partner-box tech-partner">
                  <div className="left-title">
                    <BannerHeader
                      header={partnerPageObj["technology-Partners-header"]}
                      line={"two-line"}
                      class="heading-sm"
                    />
                  </div>
                  <div className="right-details">
                    <p>
                      {Parser(partnerPageObj["technology-Partners-subHeader"])}
                    </p>
                    <div className="logo-box">
                      {partnerImages.map((image, index) => (
                        <div className="partner-logo" key={index}>
                          <img src={`${process.env.STRAPI_URL + image}`} alt={imageAlt} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="partner-box channel-partner">
                  <div className="left-title">
                    <BannerHeader
                      header={partnerPageObj["channel-partners-header"]}
                      line={"two-line"}
                      class="heading-sm"
                    />
                  </div>
                  <div className="right-details">
                    <p>
                      {Parser(partnerPageObj["channel-partners-subHeader"])}
                    </p>
                    <div className="logo-box">
                      {channelImages.map((images, index) => (
                        <div className="partner-logo" key={index}>
                          <img src={`${process.env.STRAPI_URL + images}`} alt={imageAlt} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Underline />
        </div>
      </div>
    // <h1>Hello</h1>
    
  )
}

export default PartnersPage
