import React, { useEffect, useState, useRef } from "react"
import "../static/style/pageStyle/aws-partner.scss"
import { graphql, useStaticQuery } from "gatsby"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Cards from "../components/cards"
import "aos/dist/aos.css"
/*! purgecss start ignore */ import "aos/src/sass/aos.scss" /*! purgecss end ignore */
import Underline from "../components/underline"
import CaseStudies from "../components/caseStudies"
import { FetchedAwsPartnerPageData } from "../services/helperFunctions"
import Parser from "html-react-parser"
import BannerHeader from "../components/bannerHeader"
import Loadable from "@loadable/component"
// import OurOfferingSlider from "../components/ourOfferingSlider"
import OurOffBgImage from "../static/images/our-off-bg.png"
// import AwardsSlider from "../components/awards-slider"
import OurOfferingSlider from "../components/our-offering-Slider"
import GetStartedModal from "../components/getStaredModal"
import AwardsSlider from "../components/awards-slider"

import awsFoundationImage from "../static/images/aws-partner/aws-foundation-link.png"
import awsFoundationImageMobile from "../static/images/aws-partner/aws-foundation-link-mobile.png"

const AwsConsultingPartner = props => {
  const data = useStaticQuery(
    graphql`
      {
        allAwsPartnerPage {
          nodes {
              journey {
                attributes {
                  dynamicCmp {
                    contextParagraph
                    Impact
                    Problem
                    Solution
                    cardHeading
                    content
                    iconUrl
                    id
                    imageUrl
                    statement
                    story
                  }
                  header
                  paragraph
                  subHeader
                  cmpName
                }
              }
          }
        }
      }
    `
  )
  // console.log(data?.allAwsPartnerPage?.nodes[0]?.awsPartnerPage?.journey, "adasdasd")
  const {
    settings,
    testimonialSlider,
    cardMap,
    cardData,
    cardClient,
    sections,
    cards,
    iconArr,
    awsSlider,
    tabs,
    allCaseStudy,
    awsIcon
  } = FetchedAwsPartnerPageData(data?.allAwsPartnerPage?.nodes[0]?.journey)
  console.log("sections", sections)
  const [isNavBarOpen, setIsNavBarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState(0)
  const [mobileActiveTab, setMobileActiveTab] = useState(false)
  const [activeIndexforImage, setActiveIndexforImage] = useState(0);

  const [dActiveTab, setDActiveTab] = useState(true)
  const [mdActiveTab, setMDActiveTab] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  // console.log(isOpen,'navbar')
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const handleIsOpenModal = (isModalOpen)=>{
    setIsModalOpen(!isModalOpen);
    setIsOpen(!isOpen)
  }
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
  const imgAlt = "enterprise ai"
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


  return (
    <div
      className={`aws-partner ${isNavBarOpen ? "" : "no-scroll"}`}
    >
      <div className="page-content">
        {/* -------- Banner start -------- */}
        <div className="banner-wrapper">

          <div className="page-wrapper">
            <div className="page-banner">
              <div className="banner-header">
                <BannerHeader headingType={"bannerTitle"} header={sections[0]["section-00"].header} class="heading-md" line={"three-line"} />
              </div>
              <div className="paragraph">
                <p>{Parser(sections[0]["section-00"].paragraph)}</p>
              </div>
              {/* <div className="award-heading">
                <h3>{sections[0]["section-00"].subHeader}</h3>
              </div>
              <div className="awards">
                {sections[0]["section-00"]?.dynamicCmp?.map((images, index) => (
                  <div className="awards-list" key={index}>
                    <img src={`${process.env.STRAPI_URL + images.imageUrl}`} alt={imgAlt} />
                  </div>
                ))}
              </div>
              <div className="awd-slider">
                <AwardsSlider awardImages={sections[0]["section-00"]?.dynamicCmp} />
              </div> */}
            </div>
          </div>
        </div>
        {/* -------- Banner end -------- */}

        <div className="clear"></div>
        <Underline />
        {/* --------We Achieved Competencies-------- */}
        <div className="devops-section">
          <div className="page-wrapper">
            <div className="content">
              <div className="aws-cons-right-details">
                <div className="left-heading">
                  <h2>{sections[2]["section-02"].header}</h2>
                  <p className="para">{sections[2]["section-02"].paragraph}</p>
                </div>
                <div className="right-image-click">
                  <div className="images-list">
                    {sections[2]["section-02"].dynamicCmp.map((item, index) => (
                      <div
                        className={`child image ${activeIndexforImage === index ? 'active' : 'inactive'}`}
                        onClick={() => setActiveIndexforImage(index)} >
                        <img src={`${process.env.STRAPI_URL + item.iconUrl}`} alt={imgAlt} />
                      </div>))}
                  </div>
                  <div className="image-content">
                    <h3>{sections[2]["section-02"].dynamicCmp[activeIndexforImage].cardHeading}</h3>
                    <p>{sections[2]["section-02"].dynamicCmp[activeIndexforImage].content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        {/* Proud Partners */}
        <div className="proud-partners">
          <div className="page-wrapper">
            <div className="main-container">
              <div className="partner-image-desktop">
                <a href={"/aws-foundation"} target="_blank">
                <img src={awsFoundationImage}  alt="aws-foundation"/>
                </a>
              </div>
              <div className="partner-image-mobile">
                <a href={"/aws-foundation"} target="_blank">
                <img src={awsFoundationImageMobile} alt="aws-foundation"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="clear"></div>
        <Underline />
        <div className="awards-section">
          <div className="page-wrapper">
            <div className="main-container">
              <div className="paragraph">
                <BannerHeader headingType={"bannerTitle"} header={"Triple Award-Winning AWS Partner For Enterprise Data Solutions "} class="heading-md" line={"single-line"} />
                <p className="para">{"Recognized by AWS for excellence in Data, Analytics and AI/ML, our award-winning solutions redefine what’s possible in enterprise data and analytics."}</p>
              </div>
              {/* <div className="award-heading">
                <h3>{sections[0]["section-00"].subHeader}</h3>
              </div> */}
              <div className="awards">
                {sections[0]["section-00"]?.dynamicCmp?.map((images, index) => (
                  <div className="awards-list" key={index}>
                    <img src={`${process.env.STRAPI_URL + images.imageUrl}`} alt={imgAlt} />
                  </div>
                ))}
              </div>
              <div className="awd-slider">
                <AwardsSlider awardImages={sections[0]["section-00"]?.dynamicCmp} />
              </div>
            </div>
          </div>
        </div>
        <Underline />
        {/* --------Unleash the power -------- */}
        <div className="section-01">
          <div className="page-wrapper">
            <div className="content">
              <div className="aws-cons-left-details">

                <BannerHeader header={sections[1]["section-01"].header} class="heading-md" line={"two-line"} />
                <p>{Parser(sections[1]["section-01"].paragraph)}</p>
              </div>
              <div className="aws-cons-right-details">
                <img src={`${process.env.STRAPI_URL + sections[1]["section-01"].dynamicCmp[0].imageUrl}`} alt={imgAlt} />
              </div>
            </div>
          </div>
        </div>

        <div className="clear"></div>
        <Underline />

        {/* -------------our offerings------------------- */}
        <div className="our-offerings">
          <div className="page-wrapper">
            <div className="slider">
              <div className="image-bg">
                <img src={OurOffBgImage} />
              </div>
              <div className="slide-container">
                <OurOfferingSlider content={sections[5]["section-05"].dynamicCmp} />
              </div>
            </div>
            <div className="slider-mobile">
              <div className="slide-container">
                <OurOfferingSlider content={sections[5]["section-05"].dynamicCmp} />
              </div>
            </div>
          </div>
        </div>
        <Underline />

        {/* --------you are in good hands start -------- */}

        {/* <div className="section-02" aria-label="financial-slider">
          <LoadableFinancialServiceSlider type="aws-consult" />
        </div>

        <Underline /> */}

        {/* --------section 01 start -------- */}
        {/* <div className="section-03">
          <div className="page-wrapper ">
            <div className="main-container">
              <BannerHeader header={sections[3]["section-03"].header} class="heading-lg" line={"two-line"} />
              <p>{Parser(sections[3]["section-03"].paragraph)}</p>
              <div className="aws-content">
                <BannerHeader header={sections[3]["section-03"].subHeader} class="heading-md" line={"single-line"} />
                <div className="customer-data-solution-cards">
                  {cards.map((val, idx) => (
                    <div className="data-solution-card">
                      <div className="data-solution-card-icon">
                        <div className="data-icon">
                          <img src={`${process.env.STRAPI_URL + val.iconUrl}`} alt={imgAlt} />
                        </div>
                        <p>{Parser(val.cardHeading)}</p>
                      </div>
                      <div className="data-solution-card-details">
                        <p>{Parser(val.content)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* --------section 01 end -------- */}

        {/* <Underline /> */}
        {/* --------section 04 start building our data -------- */}


        {/* <Underline /> */}

        {/* --------section 04 start Our clients trust us.  -------- */}
        <div className="section-06">
          <div className="page-wrapper">
            <div className="main-container" id="caseStudies">
              <BannerHeader header={'Our Success Stories'} class="heading-lg" line={"single-line"} />
              <div className="aws-case-studies">
                <div className="aws-left-details">
                  <ul>
                    {tabs.map((tab, idx) => (
                      <>
                        <li
                          onClick={() => handleClick(tab.id)}
                          className={`${activeTab === tab.id ? "active-tab-black" : ""
                            }`}
                        >
                          <span>{`${idx + 1}`}</span>
                          <div>
                            <p>{tab.label}</p>
                          </div>
                        </li>
                        <div className="case-studies-mobile-resp">
                          {tab.id === activeTab && dActiveTab && (
                            <CaseStudies
                              data={allCaseStudy[activeTab]}
                              id={activeTab}
                            />
                          )}
                        </div>
                      </>
                    ))}
                  </ul>
                </div>
                <div className="aws-left-details-mobile">
                  <ul>
                    {tabs.map((tab, idx) => (
                      <>
                        <li
                          onClick={() => handleClickMobile(tab.id)}
                          className={`${mobileActiveTab === tab.id &&
                            mdActiveTab &&
                            "active-tab-black"
                            }`}
                        >
                          <div>
                            <p>{idx + 1}</p>
                            <p>{tab.label}</p>
                          </div>
                          {!(mdActiveTab && mobileActiveTab === tab.id) && (
                            <p className="read-more">Read More</p>
                          )}
                        </li>
                        <div
                          className="case-studies-mobile-resp"
                          onClick={() => handleClickMobile(tab.id)}
                        >
                          {tab.id === mobileActiveTab && mdActiveTab && (
                            <CaseStudies
                              data={allCaseStudy[mobileActiveTab]}
                              id={mobileActiveTab}
                            />
                          )}
                        </div>
                      </>
                    ))}
                  </ul>
                </div>
                <div className="aws-right-details">
                  {tabs.map(
                    tab =>
                      tab.id === activeTab && (
                        <CaseStudies
                          data={allCaseStudy[activeTab]}
                          id={activeTab}
                        />
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Underline />

        {/* --------section 04 end -------- */}
        {/* --------section 04 start Our clients trust us.  -------- */}
        <div className="section-07">
          <div className="page-wrapper">
            <div className="main-container">
              <div className="heading-desktop">
                <BannerHeader header={"Our clients trust us.<br /> Here's why!"} class="heading-lg" line={"single-line"} />
              </div>
              <div className="heading-mobile">
                <BannerHeader header={"Our clients trust us. Here's why!"} class="heading-lg" line={"single-line"} />
              </div>
              <div className="card-container ">
                <div className="testimonialDesktop" aria-label="financial slider">
                  <Slider {...testimonialSlider}>
                    {cardMap.map(i => {
                      return <Cards key={i} cardData={cardData[i]} cardClient={cardClient[i]} />
                    })}
                  </Slider>
                </div>
              </div>
              {/* <div className="card-container-mobile ">
                <div className="testimonialDesktop">
                  {cardMap.map(i => {
                    return <CardsMobile key={i} cardData={cardData[i]} cardClient={cardClient[i]} />
                  })}
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* --------section 04 end -------- */}

        <Underline />

        <div className="section-08">
          <div className="page-wrapper">
            <div className="content">
              <h3 className="heading-md">
                {sections[8]['section-08'].header}
              </h3>
              <div className="get-started">
              <GetStartedModal isOpen={isOpen} setIsOpen={setIsOpen} isModalOpen={isModalOpen} handleIsOpenModal={handleIsOpenModal} />
            </div>
            </div>
          </div>
        </div>
        <Underline />
      </div>
    </div >
  )
}

export default AwsConsultingPartner
