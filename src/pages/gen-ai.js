import React, { useRef, useState } from "react"
import BannerHeaderNew from "../components/bannerHeader-new"
import { Link, graphql, useStaticQuery } from "gatsby"
import { genaiData } from "../services/helperFunctions"
import Parser from "html-react-parser"
import "../static/style/pageStyle/gen-ai.scss"
import BannerHeader from "../components/bannerHeader"
import BlackBtn from "../components/black-btn"
import Underline from "../components/underline"
import VideoComponent from "../components/videoComponent"
import bannerVideo from "../static/images/gen-ai/banner-video.mp4"
import genaiVideo from "../static/images/gen-ai/genai-video.mp4"
import bannervideoBg from "../static/images/gen-ai/bannervideo-bg.svg"
import genaivideoBg from "../static/images/gen-ai/genaiVideo-bg.png"
import journeyImage from "../static/images/gen-ai/genai-journey.png"
import downloadBlack from "../static/images/gen-ai/download-black.svg"
import DownloadBtn from "../components/download-btn"
import VideoRunningBehind from "../components/videoRunningBehind"
import cross from "../static/images/cross.svg"
import { Helmet } from "react-helmet"

const GenAI = props => {
  const data = useStaticQuery(
    graphql`
      {
        allGenai {
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
                  cardHeading
                  iconUrl
                  content
                  textcardHeading
                  textcardSubheading
                  textcardParagraph
                }
              }
            }
          }
        }
      }
    `
  )

  const [isNavBarOpen, setIsNavBarOpen] = useState(true)
  const [isImageOpen,setIsImageOpen]=useState(true)
  const videoref = useRef(null);
  console.log(data)
  const {
    banner,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
  } = genaiData(data)
  const handleDownload = (e) => {
    e.stopPropagation()
    const link = document.createElement('a');
    link.href = journeyImage;
    link.download = 'GenAI journey.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const scrollToVideo = (ref) => {
    videoref.current.scrollIntoView({ behavior: "smooth" });
  };
  const setIsOpen=()=>{
    setIsImageOpen(!isImageOpen)
  }
  const title = "Lumiq | GenAI | Succeed in Data Transformation";
  const description = "We help enterprises scale and transform completely with AI-driven products and solutions. While doing this, we help guide their employees and clients better."

  return (
    <>
      <div className={`platform-v3 gen-ai  ${isNavBarOpen ? "" : "no-scroll"}`}>
      <Helmet htmlAttributes={{
          lang: 'en'
        }}>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={banner.subheading} />
          <meta property="og:description" content="Brief description of your blog post." />
          <meta property="og:image" content={`${process.env.STRAPI_URL + banner.imageUrl}`} />
          <meta property="og:type" content="website" />
        </Helmet>
        <div className="page-content">
          {/* section 1 */}
          <div className="section-01">
            <div className="page-wrapper">
              <div className="main-container">
                <div className="content-details">
                  <div className="main-content">
                    <div className="banner-video">
                      <VideoRunningBehind
                        video={bannerVideo}
                        poster={bannervideoBg}
                      />
                    </div>

                    <div className="banner-content">
                      <BannerHeaderNew
                        headingType={"bannerTitle"}
                        header={banner.heading}
                        line={"single-line"}
                      />
                      <h2 className="banner-subheading">{banner.subheading}</h2>
                    </div>
                  </div>
                  <div className="second-content">
                    <div className="text-content">
                      <div className="first-para">
                        <h2>{Parser(banner.dynamicCmp[0]?.heading)}</h2>
                      </div>
                      <div className="last-para">
                        <p><span>“ </span>{Parser(banner.dynamicCmp[0]?.paragraph)}<span> ”</span></p>
                      </div>
                    </div>
                    <div className="image-content">
                      <img
                        src={`${process.env.STRAPI_URL + banner.imageUrl}`}
                        alt="banner-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* section2 */}
          <div className="section-021">
            <div className="page-wrapper">
              <div className="main-container">
                <div className="content-details">
                  <div className="main-content">
                    <div className="head-div">
                      <BannerHeader
                        header={section2.heading}
                        line={"single-line"}
                      />
                    </div>
                    <div className="main-subhead">
                      <h2>{section2.subheading}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-022">
            <div className="page-wrapper">
            <div className="image-container">
              <div className="image" onClick={setIsOpen}>
                <img src={journeyImage} alt="journey-image"/>
                <div className="link-images">
                  <div className="image-download">
                    <img src={downloadBlack} onClick={handleDownload} alt="download-icon"/>
                  </div>
                  {/* <div className="image-share">
                          <img src={shareBlack} alt="share-icon"/>
                        </div> */}
                </div>
              </div>
            </div>
            </div>
            {!isImageOpen && (
              <div className="full-image-modal">
                <div className="icon-parent">
                  <div className="cross-icon" onClick={setIsOpen}>
                        <img src={cross} alt="cross-btn" />
                  </div>
                </div>
                  <div className="modal-head-div">
                    <h2>{Parser(section2.heading)}</h2>
                  </div>
                  <div className="modal-main-subhead">
                    <h2>{section2.subheading}</h2>
                  </div>
                  <div>
                  <img src={journeyImage} alt="journey-detail" />
                </div>
              </div>
            )}
          </div>

          {/* section-03 */}
          <div className="section-03">
            <div className="page-wrapper">
              <div className="main-container">
                <div className="content-details">
                  <div className="main-content">
                    <div className="main-image">
                      <img
                        src={`${process.env.STRAPI_URL + section3.imageUrl}`}
                        alt="framework-icon"
                      />
                    </div>
                    <div className="head-div">
                      <BannerHeader
                        header={section3.heading}
                        line={"single-line"}
                      />
                    </div>
                  </div>
                  <div className="card-contents">
                    {section3.dynamicCmp.map((content, index) => (
                      <div className="cards" key={index}>
                        <div className="header">
                          <div className="icon">
                            <img
                              src={`${
                                process.env.STRAPI_URL + content.iconUrl
                              }`}
                              alt="icon-image"
                            />
                          </div>
                          <div className="heading">
                            <h2>{Parser(content.cardHeading)}</h2>
                          </div>
                        </div>
                        <div className="para">
                          <p>{Parser(content.content)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="button" onClick={scrollToVideo}>
                    <Link>
                      <BlackBtn
                        text={"Watch A Video Showcasing The Use Case"}
                      />
                    </Link>
                  </div>
                  <div className="button-mobile" onClick={scrollToVideo}>
                    <Link>
                      <BlackBtn
                        text={"Watch Use Case"}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Underline />
          {/* section4 */}
          <div className="section-04">
            <div className="page-wrapper">
              <div className="main-container">
                <BannerHeader header={section4.heading} line={"single-line"} />
                <div className="elements">
                  {section4.subheading.split(",").map((content, index) => (
                    <div className="ele-child" key={index}>
                      <p>{content}</p>
                    </div>
                  ))}
                </div>
                <div className="use-case">
                  <p>{section4.dynamicCmp[0].heading}</p>
                  <h2>{section4.dynamicCmp[0].paragraph}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-wrapper">
            <div className="page-wrapper">
              <div className="page-banner">
                <div className="video-area">
                  <div className="video-inner" ref={videoref}>
                    <h3>GenAI Use Case</h3>
                    <div className="image-container-header">
                      <VideoComponent
                        video={genaiVideo}
                        poster={genaivideoBg}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-042">
            <div className="page-wrapper">
              <div className="main-container">
                <div className="last-content">
                  <div className="line">
                    <p>Couldn’t find your use case above?</p>
                  </div>
                  <div className="button">
                    <Link
                      to="/get-started"
                      state={"applyForAJob"}
                      name="devops"
                    >
                      <BlackBtn
                        text={"Connect With Us and We’ll Make It Happen"}
                      />
                    </Link>
                  </div>
                  <div className="button-mobile">
                    <Link
                      to="/get-started"
                      state={"applyForAJob"}
                      name="devops"
                    >
                      <BlackBtn
                        text={"Connect With Us"}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Underline />
          <div className="section-05">
            <div className="page-wrapper">
              <div className="main-container">
                <BannerHeader header={section5.heading} line={"single-line"} />
                <div className="text-card">
                  {section5.dynamicCmp.map((content, index) => (
                    <div className="card" key={index}>
                      <div className="top">
                        <p>Benefits</p>
                      </div>
                      <div className="heading">
                        <h2>{Parser(content.heading)}</h2>
                      </div>
                      <div className="para">
                        <p>{content.paragraph}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Underline />
          <div className="section-06">
            <div className="page-wrapper">
              <div className="main-container">
                <BannerHeader header={section6.heading} line={"single-line"} />
                <div className="content-details">
                  <div className="text">
                    <p>{Parser(section6.subheading)}</p>
                  </div>
                  <div className="link">
                    <DownloadBtn
                      text="Download The Ebook To Learn More"
                      pdf={"Ebook.pdf"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Underline />
          <div className="section-07">
            <div className="page-wrapper">
              <div className="main-container">
                <div className="main-content">
                  <div className="subheading">
                    <p>{section7.heading}</p>
                  </div>
                  <BannerHeader
                    header={section7.subheading}
                    line={"single-line"}
                  />
                </div>
                {section7.dynamicCmp.map((content, index) => (
                  <div className="content-details" key={index}>
                    <div className="heading">
                      <h2>{content.textcardHeading}</h2>
                    </div>
                    <div className="tvm">
                      <div className="tvm-inner">
                        <p>Threat Vs Mitigation</p>
                      </div>
                    </div>
                    <div className="full-detail">
                      <div className="content-threat">
                        {content?.textcardSubheading
                          .split("*")
                          .map((tcontent, tindex) => (
                            <div className="threat-element">
                              <p>{tcontent}</p>
                            </div>
                          ))}
                      </div>
                      <div className="content-mitigation">
                        {content?.textcardParagraph
                          .split("*")
                          .map((mcontent, mindex) => (
                            <div className="mitig-element">
                              <p>{mcontent}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default GenAI
