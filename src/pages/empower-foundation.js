import React, { useEffect, useState, useRef } from "react"
import "../static/style/globalCss/platform-page.scss"
import "../static/style/globalCss/style.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import banner from "../static/images/video/banner.mp4"
import Slider from "react-slick"
import RequestDemo from "../components/requestDemo"
import GreyArrow from "../static/images/left-arrow-grey.svg"
import EmpModules from "../components/empModule"
import EmpModulesMobile from "../components/EmpModuleMobile"
import Parser from "html-react-parser"
import BannerHeader from "../components/bannerHeader"
import Underline from "../components/underline"
import platformbanner from "../static/images/platform.webp"
import proven from "../static/images/proven.png"
import Loadable from "@loadable/component"
import {
  FetchedEmpowerFoundationPageData,
  FetchedHomePageData,
  FetchedPartnerPageData,
} from "../services/helperFunctions"
import VideoComponent from "../components/videoComponent"
import DownloadBtn from "../components/download-btn"
import downloadIcon from "../static/images/component-img/download_black.svg"
import eng1 from "../static/images/engagement1.png"
import eng2 from "../static/images/enga2.png"
import { Helmet } from "react-helmet"

const UnderlineButton = Loadable(() => import("../components/underlineButton"))
const LoadableCardsMobile = Loadable(() => import("../components/cards-mobile"))
const LoadableCards = Loadable(() => import("../components/cards"))

const EmpFoundation = props => {
  const data = useStaticQuery(
    graphql`
      {
        allEmpPage {
          nodes{
            journey {
              attributes {
                pageName
                dynamicCmp {
                  header
                  paragraph
                  subHeader
                  modules {
                    header
                    paragraph
                    images
                  }
                  logo {
                    description
                    logoUrl
                  }
                  cmpname
                }
              }
            }
          }
        }
        allHomeV3Page {
          nodes {
              journey {
                attributes {
                  cmpname
                  headers
                  header3
                  paragraph
                  imageUrl
                  dynamicCmp {
                    Text
                    description
                    imageUrl
                  }
                }
            }
          }
        }
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
  const {
    homePageObj,
    financialServices,
    cardMap,
    cardData,
    cardClient,
    lumiqProduct,
    testimonialSlider,
  } = FetchedHomePageData(data.allHomeV3Page.nodes[0].journey)
  const {
    partnerPageObj,
    cloudImages,
    partnerImages,
    channelImages,
    imageAlt,
  } = FetchedPartnerPageData(data.allPartnerPage.nodes[0].journey)

//   console.log(data.allHomeV3Page.nodes[0].journey,data.allPartnerPage.nodes[0].journey,"king",empHeader,"hello")

  useEffect(() => {
    if (props?.location?.state) {
      const id = Object.values(props?.location?.state)
        .filter(
          (value, index) =>
            typeof value === "string" &&
            index !== Object.keys(props?.location?.state).length - 1
        )
        .join("")
      if (id) {
        const partnersLocation = document.getElementById(id)
        if (partnersLocation) {
          partnersLocation.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }, [props?.location?.state])
  const [isNavBarOpen, setIsNavBarOpen] = useState(true)
  const {
    empHeader,
    empProducts,
    empModules,
    empModuleArray,
  } = FetchedEmpowerFoundationPageData(
    data?.allEmpPage?.nodes[0].journey[0]?.attributes?.dynamicCmp
  )
  
  const imgAlt = "enterprise ai"
  return (
    <>
      {empHeader && (
        <div
          className={`platform-v3 emPower-foundation emPower-page ${
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
                      headingType={"bannerTitle"}
                      header={empHeader?.header}
                      subHeader={empHeader?.subHeader}
                      line={"single-line"}
                    />
                    {/* <div className="emp-data-products-details">
                      <p>{Parser(empHeader?.subHeader)}</p>
                    </div> */}
                  </div>

                  <div className="video-area">
                    <div className="video-inner">
                      <h3>{Parser(empHeader?.header)}</h3>
                      <div className="image-container-header">
                        {/* <Player
                          playsInline
                          poster={platformbanner}
                          src={banner}
                        /> */}
                        <VideoComponent
                          video={banner}
                          poster={platformbanner}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* -------- Banner end -------- */}

            <Underline />
            {/* -------- section-02  start what are data products -------- */}

            <div className="section-02 emp-products">
              <div className="page-wrapper" id="whatAreDataProducts">
                <div className="emp-content">
                  <div className="emp-data-products-details">
                    <p>{Parser(empProducts?.paragraph)}</p>
                  </div>
                  <div className="emp-data-products-logos">
                    <div className="emp-products">
                      <div className="emp-products-logo">
                        <img
                          src={`${
                            process.env.STRAPI_URL +
                            empProducts?.logo[0].logoUrl
                          }`}
                          alt={imgAlt}
                        />
                      </div>
                      <p>{Parser(empProducts?.logo[0].description)}</p>
                    </div>
                    <div className="emp-products">
                      <div className="emp-products-logo">
                        <img
                          src={`${
                            process.env.STRAPI_URL +
                            empProducts?.logo[1].logoUrl
                          }`}
                          alt={imgAlt}
                        />
                      </div>
                      <p>{Parser(empProducts?.logo[1].description)}</p>
                    </div>
                    <div className="emp-products">
                      <div className="emp-products-logo">
                        <img
                          src={`${
                            process.env.STRAPI_URL +
                            empProducts?.logo[2].logoUrl
                          }`}
                          alt={imgAlt}
                        />
                      </div>
                      <p>{Parser(empProducts?.logo[2].description)}</p>
                    </div>
                    <div className="emp-products">
                      <div className="emp-products-logo">
                        <img
                          src={`${
                            process.env.STRAPI_URL +
                            empProducts?.logo[3].logoUrl
                          }`}
                          alt={imgAlt}
                        />
                      </div>
                      <p>{Parser(empProducts?.logo[3].description)}</p>
                    </div>
                  </div>
                  <div className="emp-request-demo">
                    <DownloadBtn
                      text="Download emPower Foundation Data Sheet"
                      pdf={"emPOWER_DataSheet.pdf"}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* -------- section-02 end -------- */}

            <Underline />

            {/* -------- proven architcture start -------- */}

            <div className="proven-arc">
              <div className="page-wrapper">
                <BannerHeader
                  header={"Proven <br/> Architecture"}
                  line={"two-line"}
                />
                <div className="proven-img">
                  <img src={proven} alt="proven" />
                </div>
              </div>
            </div>

            {/* -------- proven architcture end -------- */}

            <Underline />

            {/* -------- section-03 start -------- */}

            <div className="section-03">
              <div className="page-wrapper">
                <div className="content">
                  <BannerHeader header={empModules?.header} line={"two-line"} />
                  <div className="modules-container">
                    <EmpModules
                      moduleArray={empModuleArray}
                      learnMore={false}
                    />
                  </div>
                  <div className="modules-container-mobile">
                    <EmpModulesMobile
                      moduleArray={empModuleArray}
                      learnMore={false}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* -------- section-03 end -------- */}

            <Underline />

            {/**      financial services start */}

            <div className="section-05">
              <div className="page-wrapper ">
                <div className="main-container">
                  <BannerHeader
                    header="Tailored for <br/> Financial Services"
                    line={"two-line"}
                  />
                  <div className="content">
                    {financialServices.map((content, index) => (
                      <div className="content-details" key={index}>
                        <h3 className="heading-sm">{content.header}</h3>
                        <div className="fs-link">
                          <div className="fs-left-arrow">
                            <img src={GreyArrow} alt={imgAlt} />
                          </div>
                          <span className="fs-text">{content.paragraph}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/**      financial services end */}

            <Underline />
            {/* Partnership Type */}
            <div className="partners-types">
              <div className="page-wrapper">
                <BannerHeader header={"Partners"} line={"single-line"} />
                <div className="partners-types-inner">
                  <div className="partner-box cloud-partner">
                    <div className="left-title">
                      <BannerHeader
                        header={partnerPageObj["cloud-partners-header"]}
                        line={"two-line"}
                        class="heading-sm"
                      />
                    </div>
                    <div className="right-details">
                      <p>
                        {Parser(partnerPageObj["cloud-partners-subHeader"])}
                      </p>
                      <div className="logo-box">
                        {cloudImages.map((images, index) => (
                          <div className="partner-logo">
                            <div className="img-box">
                              <img
                                src={`${process.env.STRAPI_URL + images}`}
                                alt={imageAlt}
                              />
                            </div>
                            {index === 0 && (
                              <Link
                                to="/aws-partner"
                                target="_blank"
                                name="aws-partner"
                              >
                                <UnderlineButton text={"Learn More"} />
                              </Link>
                            )}
                            {index === 1 && (
                              <Link
                                to="/gcp-partner"
                                target="_blank"
                                name="gcp-partner"
                              >
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
                        {Parser(
                          partnerPageObj["technology-Partners-subHeader"]
                        )}
                      </p>
                      <div className="logo-box">
                        {partnerImages.map((image, index) => (
                          <div className="partner-logo" key={index}>
                            <img
                              src={`${process.env.STRAPI_URL + image}`}
                              alt={imageAlt}
                            />
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
                            <img
                              src={`${process.env.STRAPI_URL + images}`}
                              alt={imageAlt}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Underline />
            {/* Engagement model start */}
            <div className="section-04">
              <div className="page-wrapper ">
                <div className="main-container">
                  <BannerHeader
                    header="Engagement <br/> Models"
                    line={"two-line"}
                  />
                  <p>At the start of our engagements, LUMIQ conducts a discovery workshop aimed at identifying the necessary data sources
                     for specific use cases. We then implement our emPower Foundation product to seamlessly ingest both structured and 
                     unstructured data into the required channels. Our engagement models offer flexibility: with our Managed Services model, 
                     we build and manage platforms and use cases, while our Custom Development model 
                    leverages emPower Foundation to innovate and develop new use cases such as MLOps, Gen AI, and Data Modeling.</p>
                  <div className="emp-section">
                    <div className="emp-content emp-content-models">
                      <div className="models-content">
                        <h3 className="heading-sm" aria-label="emp-alt">
                          {homePageObj[`section-02-${lumiqProduct[3]}-header3`]}
                        </h3>
                        <div className="engagement-img">
                          <img src={eng1} alt={imgAlt} />
                        </div>
                      </div>
                      <div className="models-content">
                        <h3 className="heading-sm" aria-label="emp-alt">
                          {homePageObj[`section-02-${lumiqProduct[4]}-header3`]}
                        </h3>
                        <div className="engagement-img">
                          <img src={eng2} alt={imgAlt} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Engagement model end */}
            <Underline />

            {/* --------new section added here and count number are also changed below this section -------- */}
            <div className="what-is-unique-about-lumiq">
              <div className="page-wrapper ">
                <div className="main-container">
                  <BannerHeader
                    header={homePageObj["what-is-unique"]}
                    line={"two-line"}
                  />

                  <h3 className="heading-sm sub-title">
                    {homePageObj["what-is-unique-header3"]}
                  </h3>
                  {/* <Underline class={"max-width-100"} /> */}
                  <div className="what-is-unique-container">
                    {homePageObj["what-is-unique-dynamicCmp"]?.map(
                      (val, idx) => (
                        <div className="what-is-unique-inner" key={idx}>
                          <div className="what-is-unique-img">
                            <img
                              src={`${process.env.STRAPI_URL + val.imageUrl}`}
                              alt={imgAlt}
                            />
                          </div>
                          <p>{val?.description}</p>
                        </div>
                      )
                    )}
                  </div>
                  <Link
                    to="/unique-about-lumiq"
                    className="desktop-responsive-class"
                    name="unique"
                  >
                    <UnderlineButton text="Explore more on what’s unique about LUMIQ" />
                  </Link>
                  <Link
                    to="/unique-about-lumiq"
                    className="mobile-responsive-class"
                    name="unique mobile"
                  >
                    <UnderlineButton text="Explore more" />
                  </Link>
                </div>
              </div>
            </div>

            <Underline />
            {/* --------new section added here and count number are also changed below this section -------- */}

            {/* --------section 06 start Our clients trust us.  -------- */}
            <div className="section-06">
              <div className="page-wrapper">
                <div className="main-container" id="customerSuccess">
                  <BannerHeader
                    header={"Our clients trust us. <br/> Here's why!"}
                    line={"two-line"}
                  />
                  <div className="card-container">
                    <div className="testimonialDesktop" aria-label="slider">
                      <Slider {...testimonialSlider}>
                        {cardMap.map(i => {
                          return (
                            <LoadableCards
                              key={i}
                              cardData={cardData[i]}
                              cardClient={cardClient[i]}
                            />
                          )
                        })}
                      </Slider>
                    </div>
                  </div>
                  <div className="card-container-mobile ">
                    <div className="testimonialDesktop">
                      {cardMap.map(i => {
                        return (
                          <LoadableCardsMobile
                            key={i}
                            cardData={cardData[i]}
                            cardClient={cardClient[i]}
                          />
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className="customer-success-book">
                  <a
                    href="/customer-success-book"
                    target="_blank"
                    rel="noopener noreferrer"
                    name="Customer"
                  >
                    <button className="right-arrow-btn download-btn underline-remove-effect">
                      <p>View Customer Success Book</p>
                      <span className="arrow">
                        <img src={downloadIcon} alt={imgAlt} />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* --------section 06 end -------- */}

            <Underline />

            {/* -------- section 04 start -------- */}

            <div className="section-04">
              <div className="page-wrapper">
                <RequestDemo />
              </div>
            </div>

            {/* -------- section 04 end -------- */}

            <Underline />
          </div>
        </div>
      )}
    </>
  )
}

export default EmpFoundation
