import React, { useEffect, useState, useRef } from "react"
import "../static/style/globalCss/style.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { graphql, useStaticQuery } from "gatsby"
import Parser from "html-react-parser"
import arrow from "../static/images/component-img/PlatformArrow.svg"
import banner from "../static/images/video/banner.mp4"
import GreyArrow from "../static/images/left-arrow-grey.svg"
import { FetchedHomePageData } from "../services/helperFunctions"
import { Link } from "gatsby"
import Loadable from "@loadable/component"
import downloadIcon from "../static/images/component-img/download_black.svg"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

const LoadableCards = Loadable(() => import("../components/cards"))
const LoadableCardsMobile = Loadable(() => import("../components/cards-mobile"))
const LoadableRequestDemo = Loadable(() => import("../components/requestDemo"))
const UnderlineButton = Loadable(() => import("../components/underlineButton"))
const Underline = Loadable(() => import("../components/underline"));
const BannerHeader = Loadable(()=>import("../components/bannerHeader"));
const VideoComponent = Loadable(()=>import("../components/videoComponent"));
const CircleBtn = Loadable(()=>import("../components/circleBtn"));
const Count = Loadable(()=>import("../components/count"));
const LoadableFinancialServiceSlider = Loadable(() =>
  import("../components/financial-service-slider")
)
const LoadableJoinOurTeam = Loadable(() =>
  import("../components/join-our-team")
)
const NewHome = props => {
  const data = useStaticQuery(
    graphql`
      {
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
      }
    `
  )
  let slug = "how-to-turn-data-into-data-products"
  const [isNavBarOpen, setIsNavBarOpen] = useState(true)
  const {
    homePageObj,
    financialServices,
    cardMap,
    cardData,
    cardClient,
    lumiqProduct,
    testimonialSlider,
  } = FetchedHomePageData(data.allHomeV3Page.nodes[0]?.journey)
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
  const imgAlt = "enterprise ai"

  // console.log(data.allHomeV3Page.nodes[0].homeV3Page.journey, "journey")
  // console.log(homePageObj, "homePageObj12")
  const generateEmpower = () => {
    const empSection = []
    for (let i = 0; i < 2; i++) {
      console.log(homePageObj,"hello");
      empSection.push(
        <div className="emp-section">
          { (i=== 0 || i === 1 || i === 2) && <div className="emp-content">
            <div className="emp-heading">
              <h3 className="heading-sm" aria-label="emp-alt">
                {homePageObj[`section-02-${lumiqProduct[i]}-header3`]}
              </h3>
            </div>
            <div className="emp-text">
              <p>{homePageObj[`section-02-${lumiqProduct[i]}-paragraph`]}</p>
            </div>
            <div className="emp-explore">
              {(i === 0 || i === 1) && <Link
                to={`/${homePageObj[`section-02-${lumiqProduct[i]}-header3`].split(" ")[0].toLowerCase()}-${homePageObj[`section-02-${lumiqProduct[i]}-header3`].split(" ")[1].toLowerCase()}`}
                name="emp"
                state={"emp-foundation"}
              >
                <UnderlineButton text={"Explore"} />{" "}
              </Link>}
              {i === 2 && 
              <Link
                name="emp"
                state={"emp-foundation"}
              >
                <UnderlineButton text={"Explore"} />
              </Link>}
              
            </div>
          </div>
          }
          {/* {(i == 3) &&
             <div className="emp-content emp-content-models">
              <h2 className="heading-sm">Engagement Models</h2>
              <div className="emp-content-engagement-models">
                  {i===3&&
                  <>
                  <div className="models-content">
                    <h3 className="heading-sm" aria-label="emp-alt">
                      {homePageObj[`section-02-${lumiqProduct[i]}-header3`]}
                    </h3>
                    <p>{homePageObj[`section-02-${lumiqProduct[i]}-paragraph`]}</p>
                  </div>
                  </>
                  }
                  { i === 3 &&
                  <>
                  <div className="models-content">
                    <h3 className="heading-sm" aria-label="emp-alt">
                      {homePageObj[`section-02-${lumiqProduct[i+1]}-header3`]}
                    </h3>
                    <p>{homePageObj[`section-02-${lumiqProduct[i+1]}-paragraph`]}</p>
                  </div>
                  </>
                  }
              </div>
            </div>
          } */}
         
        </div>
      )
    }
    console.log(empSection,"hello");
    return empSection
  }

  return (
    <div className={`homev2 ${isNavBarOpen ? "" : "no-scroll"}`}>
      <SEO title="Succeed in Data Transformation" />
      <div className="page-content">
        {/* -------- Banner start -------- */}
        
        <div className="banner-wrapper">
          <div className="page-wrapper">
            <div className="page-banner">
              <div className="banner-header">
                <BannerHeader
                  header={homePageObj["banner"]}
                  subHeader={homePageObj["banner-header3"]}
                  line={"three-line"}
                  headingType={"bannerTitle"}
                />
              </div>
              <div className="banner-header-mobile">
                <BannerHeader
                  header={
                    "Accelerate Your <br/> Data Maturity <br/> With LUMIQ"
                  }
                  subHeader={homePageObj["banner-header3"]}
                  line={"three-line"}
                  headingType={"bannerTitle"}
                />
              </div>
              <div className="image-container-header">
                <VideoComponent
                  video={banner}
                  poster={homePageObj["banner-imageUrl"]}
                />
              </div>
            </div>
          </div>
        </div>
        {/* -------- Banner end -------- */}
        <div className="clear"></div>
        {/* -------- tour start -------- */}

        <div className="tour-container">
          <div className="page-wrapper">
            <div className="btn-row">
              <CircleBtn BtnText="Explore emPOWER" url="/empower" />
              <CircleBtn
                BtnText="Download brochure"
                pdf={"LUMIQ_Brochure.pdf"}
              />
            </div>
          </div>
        </div>
        {/* -------- tour end -------- */}

        <div className="clear"></div>

        {/* -------- tour  mobile start -------- */}
        <div className="tour-container-mobile">
          <div className="page-wrapper">
            <div className="pt-mobile">
              <div className="platform-box">
                <Link to="/empower" name="platform-page">
                  <div className="platform-tour-button">
                    <p className="text-black">Explore emPOWER</p>
                    <p className="arrow">
                      {/* <img src="../static/images/component-img/PlatformArrow.svg" alt={imgAlt}/> */}
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="request-demo">
              <CircleBtn
                BtnText="Download LUMIQ data sheet"
                pdf={"LUMIQ_infosheet.pdf"}
              />
            </div>
          </div>
        </div>
        {/* -------- tour  mobile end -------- */}

        <Underline />

        {/* --------banner header detail start -------- */}
        <div className="section-01">
          <div className="page-wrapper">
            <div className="content">
              <h2 className="heading-md details">
                {Parser(homePageObj["banner-H1"])}
              </h2>
            </div>
          </div>
        </div>
        {/* --------banner header details end -------- */}

        <Underline />

        {/* --------our clients start -------- */}
        <div className="section-02" aria-label="financial-slider">
          <LoadableFinancialServiceSlider />
        </div>
        {/* --------our clients start -------- */}

        <Underline />

        {/* --------section 01 start -------- */}
        <div className="section-03">
          <div className="page-wrapper ">
            <div className="main-container">
              <Count count={"01"} />
              <div className="top-content">
                <BannerHeader
                  header={homePageObj["section-01"]}
                  line={"three-line"}
                />

                <div className="image-container">
                  <img
                    src={`${
                      process.env.STRAPI_URL +
                      homePageObj["section-01-imageUrl"]
                    }`}
                    alt={imgAlt}
                  />
                </div>
              </div>
              <div className="bottom-content">
                <h3 className="heading-sm mobile-responsive ">
                  {homePageObj["section-01-header3"]}
                </h3>
                <div className="content">
                  <p className="text-sm">
                    {homePageObj["section-01-paragraph"]}
                  </p>
                  <div className="data-into-product">
                    <Link
                      to={`/resources/detailedBlog/${slug}`}
                      target="_blank"
                      name="blog"
                    >
                      <p className="text-sm">
                        Understand turning data into data products
                      </p>
                    </Link>

                    <p className="understanding-arrow">
                      <img src={arrow} alt={imgAlt}/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------section 01 end -------- */}

        <Underline />
        {/* --------section 02 start building our data -------- */}

        {/* --------new section added here and count number are also changed below this section -------- */}
        <div className="section-04 what-is-unique-about-lumiq">
          <div className="page-wrapper ">
            <div className="main-container">
              <Count count={"02"} />
              <BannerHeader
                header={homePageObj["what-is-unique"]}
                line={"two-line"}
              />

              <h3 className="heading-sm sub-title">
                {homePageObj["what-is-unique-header3"]}
              </h3>
              {/* <Underline class={"max-width-100"} /> */}
              <div className="what-is-unique-container">
                {homePageObj["what-is-unique-dynamicCmp"]?.map((val, idx) => (
                  <div className="what-is-unique-inner" key={idx}>
                    <div className="what-is-unique-img">
                      <img src={`${process.env.STRAPI_URL + val.imageUrl}`} alt={imgAlt} />
                    </div>
                    <p>{val?.description}</p>
                  </div>
                ))}
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

        <div className="section-04">
          <div className="page-wrapper ">
            <div className="main-container">
              <Count count={"03"} />
              <BannerHeader
                header={homePageObj["section-02"]}
                line={"two-line"}/>
              <h1 className="mobile-responsive">{homePageObj["section-02"]}</h1>
              <h3 className="heading-sm sub-title">
                {Parser(homePageObj["section-02-header3"])}
              </h3>
              {generateEmpower()}
            </div>
          </div>
        </div>
        {/* --------section 02 end -------- */}

        <Underline />

        {/* --------section 03 start  Purpose built for Financial Services-------- */}
        <div className="section-05">
          <div className="page-wrapper ">
            <div className="main-container">
              <Count count={"04"} />
              <BannerHeader
                header={homePageObj["section-03"]}
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
        {/* --------section 03 end -------- */}

        <Underline />

        {/* --------section 06 start Our clients trust us.  -------- */}
        <div className="section-06" id="customerSuccess">
          <div className="page-wrapper">
            <div className="main-container" id="customerSuccess">
              <Count count={"05"} />
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
              <a  href="/customer-success-book" target="_blank"  rel="noopener noreferrer" name="Customer">
                <button className="right-arrow-btn download-btn underline-remove-effect">
                  <p>View Customer Success Book</p>
                  <span className="arrow">
                    <img src={downloadIcon} alt={imgAlt}/>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* --------section 06 end -------- */}
        <Underline />
        <div className="section-08">
          <LoadableJoinOurTeam />
        </div>
        <Underline />
        <div className="section-09">
          <div className="page-wrapper">
            <LoadableRequestDemo />
          </div>
        </div>
        <Underline />
      </div>
    </div>
  )
}

export default NewHome
