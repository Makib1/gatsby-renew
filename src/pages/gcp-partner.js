import React, { useEffect, useState, useRef } from "react"
import "../static/style/pageStyle/gcp-partner.scss"
import { graphql, useStaticQuery } from "gatsby"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Cards from "../components/cards"
import "aos/dist/aos.css"
/*! purgecss start ignore */ import "aos/src/sass/aos.scss" /*! purgecss end ignore */
import Underline from "../components/underline"
import CardsMobile from "../components/cards-mobile"
import UnderlineButton from '../components/underlineButton'
import { FetchedAwsPartnerPageData, FetchedGCPPartnerPageData } from "../services/helperFunctions"
import Parser from "html-react-parser"
import { Link } from "gatsby"
import BannerHeader from "../components/bannerHeader"
import OurOffBgImage from "../static/images/our-off-bg.png"
import OurOfferingSlider from "../components/our-offering-Slider"
import GetStartedModal from "../components/getStaredModal"


const AwsConsultingPartner = props => {
  const data = useStaticQuery(
    graphql`
      {
        allGcpPartnerPage {
          nodes {
              journey {
                attributes {
                  dynamicCmp {
                    cardHeading
                    content
                    iconUrl
                    id
                    imageUrl
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
  const {
    testimonialSlider,
    cardMap,
    cardData,
    cardClient,
    sections,
  } = FetchedGCPPartnerPageData(data?.allGcpPartnerPage?.nodes[0]?.journey)
  console.log("sections", sections)
  const [isNavBarOpen, setIsNavBarOpen] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const handleIsOpenModal = (isModalOpen) => {
    setIsModalOpen(!isModalOpen);
    setIsOpen(!isOpen)
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
      className={`gcp-partner ${isNavBarOpen ? "" : "no-scroll"}`}
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
                <p>{sections[0]["section-00"].paragraph}</p>
              </div>
              <div className="image-container-header ">
                <div className="banner-image">
                  <img src={`${process.env.STRAPI_URL + sections[0]["section-00"].dynamicCmp[0].imageUrl}`} alt={imgAlt} />
                </div>
              </div>
              {/* <div className="banner-header-link">
                <a href='https://cloud.google.com/customers/hdfc-ergo' target="_blank" ><UnderlineButton text={"Click Here To Read More"} /></a>
              </div> */}
            </div>
          </div>
        </div>
        {/* -------- Banner end -------- */}

        {/* <Underline /> */}

        {/* our experties   */}
        <div className="our-experties">
          <div className="page-wrapper ">
            <div className="main-container">
              <h2>{sections[2]["section-02"].header}</h2>
            </div>

            <div className="box">

              {sections[2]['section-02'].dynamicCmp.map((item, index) => (
                <div className="box-child" key={index}>
                  <h3>{item.cardHeading}</h3>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Underline />
        {/* --------unleash the power -------- */}
        <div className="unleash">
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

        <div className="section-06">
          <div className="page-wrapper">
            <div className="main-container">
              <BannerHeader header={sections[6]["section-06"].header} class="heading-lg" line={"single-line"} />
              <h2 className="para">{Parser(sections[6]["section-06"].subHeader)}</h2>
              <div className="banner-header-link">
                <a href='https://cloud.google.com/customers/hdfc-ergo' target="_blank" ><UnderlineButton text={"Click Here To Read More"} /></a>
              </div>
            </div>
          </div>
        </div>
        <Underline />


        {/* -------- Our clients trust us.  -------- */}
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
              <div className="card-container-mobile ">
                <div className="testimonialDesktop">
                  {cardMap.map(i => {
                    return <CardsMobile key={i} cardData={cardData[i]} cardClient={cardClient[i]} />
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------section 04 end -------- */}

        <Underline />

        {/* get started */}
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
