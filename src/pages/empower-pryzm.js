import React, { useEffect, useState, useRef } from "react"
import "../static/style/globalCss/platform-page.scss"
import "../static/style/globalCss/style.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import RequestDemo from "../components/requestDemo"
import Parser from "html-react-parser"
import BannerHeader from "../components/bannerHeader"
import Underline from "../components/underline"
import platformbanner from "../static/images/pryzm-video.png"
import DownloadBtn from "../components/download-btn"
import { empPryzmData } from "../services/helperFunctions"
import "../static/style/pageStyle/empower-pryzm.scss"
import BannerHeaderNew from "../components/bannerHeader-new"
import discCircle from "../static/images/disc-circle.svg"
import leftArrow from "../static/images/leftArrow.svg"
import PryzmFeatures from "../components/pryzm-feature"
import BlackBtn from "../components/black-btn"
import VideoComponent from "../components/videoComponent"
import pryzmVideo from "../static/images/Pryzm-video.mp4"
import { Helmet } from "react-helmet"

const EmpPryzm = props => {
  const data = useStaticQuery(
    graphql`
      {
        allPryzm {
          nodes {
            journey {
              attributes {
                cmpName
                heading
                subheading
                imageUrl
                dynamicCmp {
                  heading
                  paragraph
                  featureHeading
                  cards {
                    cardHeading
                    iconUrl
                    content
                  }
                }
              }
            }
          }
        }
      }
    `
  )

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

  const [activeTab, setActiveTab] = useState(0)
  const [dActiveTab, setDActiveTab] = useState(true)
  const [mobileActiveTab, setMobileActiveTab] = useState(false)
  const [mdActiveTab, setMDActiveTab] = useState(false)
  const handleClick = header => {
    setActiveTab(header)
    setDActiveTab(!dActiveTab)
    if (activeTab === header) {
      setDActiveTab(!dActiveTab)
    }
    // console.log(activeTab, "as")
  }
  const handleClickMobile = header => {
    // console.log(header, "header")
    setMobileActiveTab(header)
    setMDActiveTab(!mdActiveTab)
    if (mobileActiveTab === header) {
      setMDActiveTab(!mdActiveTab)
    }
  }

  const { banner, section2, section3, section4, section5 } = empPryzmData(data)
  const title = "Lumiq | emPower Pryzm | Succeed in Data Transformation";
  const description = "We help enterprises scale and transform completely with AI-driven products and solutions. While doing this, we help guide their employees and clients better."

  return (
    <>
      <div
        className={`platform-v3 emPower-Pryzm  ${
          isNavBarOpen ? "" : "no-scroll"
        }`}
      >
        <Helmet htmlAttributes={{
          lang: 'en'
        }}>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={banner.subparagraph} />
          <meta property="og:description" content="Brief description of your blog post." />
          <meta property="og:image" content={`${process.env.STRAPI_URL + banner.imageUrl}`} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://lumiq.ai/empower-pryzm" />
        </Helmet>
        <div className="page-content">
          {/* section 1 */}
          <div className="section-01">
            <div className="page-wrapper">
              <div className="main-container">
                <div className="content-details">
                  <div className="para-main">
                    <BannerHeaderNew
                      headingType={"bannerTitle"}
                      header={banner.heading}
                      line={"single-line"}
                    />
                    <h2 className="para-mid-color">{Parser(banner.subheading)}</h2>
                  </div>
                  <div className="para-mid">
                    <h2>{Parser(banner.paragraph)}</h2>
                  </div>
                  <div className="para-last">
                    <p>{banner.subparagraph}</p>
                  </div>
                  <div className="btn-area">
                    <Link to="/get-started" name="get-startd">
                      {" "}
                      <BlackBtn text={"Get Started"} />
                    </Link>
                  </div>
                </div>
                <div className="content-images">
                  <img src={`${process.env.STRAPI_URL + banner.imageUrl}`} alt="banner"/>
                </div>
              </div>
              <div className="main-container-mobile">
                  <div className="para-main">
                    <BannerHeaderNew
                      headingType={"bannerTitle"}
                      header={banner.heading}
                      line={"single-line"}
                    />
                    <h2 className="para-mid-color">{Parser(banner.subheading)}</h2>
                  </div>
                  <div className="content-images">
                     <img src={`${process.env.STRAPI_URL + banner.imageUrl}`} alt="banner-image"/>
                  </div>
                  <div className="para-mid">
                    <h2>{Parser(banner.paragraph)}</h2>
                  </div>
                  <div className="para-last">
                    <p>{banner.subparagraph}</p>
                  </div>
                  <div className="btn-area">
                    <Link to="/get-started" name="get-startd">
                      {" "}
                      <BlackBtn text={"Get Started"} />
                    </Link>
                  </div>
              </div>
            </div>
          </div>

          <div className="banner-wrapper">
            <div className="page-wrapper">
              <div className="page-banner">
                <div className="video-area">
                  <div className="video-inner">
                    <h3>emPower Pryzm</h3>
                    <div className="image-container-header">
                      <VideoComponent
                        video={pryzmVideo}
                        poster={platformbanner}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-02">
            <div className="page-wrapper">
              <div className="main-container">
                <div className="single-content">
                  <h2>{Parser(section2.heading)}</h2>
                </div>
                <div className="double-content">
                  <div className="double-content-first">
                    <h2>{section2.subheading}</h2>
                  </div>
                  <div className="double-content-second">
                    <p>{section2.dynamicCmp[0].paragraph}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Underline />
          <div className="section-03">
            <div className="page-wrapper ">
              <div className="main-container">
                <BannerHeader header={section3.heading} line={"two-line"} />
                <div className="content">
                  {section3.dynamicCmp.map((content, index) => (
                    <>
                      <div className="content-details">
                        <h3 className="benefit-heading">
                          {Parser(content.heading)}
                        </h3>
                        <div className="fs-link">
                          <p>{content.paragraph}</p>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div className="emp-request-demo">
                  <Link>
                  <DownloadBtn
                    text="Download Pryzm Data Sheet"
                    pdf={"PRYZM_Datasheet.pdf"}
                  />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Underline />
          <div className="section-04">
            <div className="page-wrapper ">
              <div className="main-container">
                <BannerHeader
                  header="Exploring the <br />
                  Fundamental Features"
                  line={"two-line"}
                />
                <div className="feature">
                  <div className="feature-heading">
                    <ul>
                      {section4.dynamicCmp.map((content, index) => (
                        <>
                          <li onClick={() => handleClick(index)} key={index}>
                            <h2
                              className={`${
                                activeTab === index
                                  ? "list-heading-active"
                                  : "list-heading"
                              }`}
                            >
                              {content.featureHeading}
                            </h2>
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                  <div className="feature-heading-mobile">
                    <ul>
                      {section4.dynamicCmp.map((content, index) => (
                        <>
                          <li
                            onClick={() => handleClickMobile(index)}
                            key={index}
                          >
                            <h2
                              className={`${
                                mobileActiveTab === index && mdActiveTab
                                  ? "list-heading-active"
                                  : "list-heading"
                              }`}
                            >
                              {content.featureHeading}
                            </h2>
                          </li>
                          <div
                            className="feature-content-mobile"
                            onClick={() => handleClickMobile(index)}
                          >
                            {index === mobileActiveTab && mdActiveTab && (
                              <>
                                {section4.dynamicCmp[mobileActiveTab].cards.map(
                                  (content, index2) => (
                                    <PryzmFeatures
                                      content={content}
                                      index={index2}
                                    />
                                  )
                                )}
                                <p className="mobile-close-button"></p>
                              </>
                            )}
                          </div>
                        </>
                      ))}
                    </ul>
                  </div>

                  <div className="feature-content">
                    {section4.dynamicCmp[activeTab].cards.map(
                      (content, index) => (
                        <PryzmFeatures content={content} index={index} />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Underline />
          <div className="section-05">
            <div className="page-wrapper ">
              <div className="main-container">
                <BannerHeader header={section5.heading} line={"single-line"} />
                <div className="content">
                  <div className="paragraph">
                    <h2>{Parser(section5.subheading)}</h2>
                  </div>
                  <div className="steps">
                    {section5.dynamicCmp[0].paragraph
                      .split(",")
                      .map((content, index) => (
                        <>
                          <div className="steps-inner">
                            <h4>STEP {index + 1}</h4>
                            <div className="disc-circle">
                              <img src={discCircle} alt="circle-icon" />
                            </div>
                            <div className="para">
                              <h2>{content}</h2>
                            </div>
                          </div>
                        </>
                      ))}
                  </div>
                  <div className="link-para">
                    <div className="arrow">
                      <img src={leftArrow} alt="arrow"/>
                    </div>
                    <div className="link-paragraph">
                      <p>{section5.dynamicCmp[1].heading}</p>
                    </div>
                  </div>
                  <div className="quote-para">
                    <h2>
                      <span>“ </span>
                      {section5.dynamicCmp[1].paragraph}
                      <span> ”</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Underline />
          <div className="section-06">
            <div className="page-wrapper">
              <RequestDemo />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmpPryzm
