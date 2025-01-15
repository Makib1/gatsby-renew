import React, { useEffect, useState, useRef } from "react"
import "../static/style/pageStyle/devops.scss"
import { graphql, useStaticQuery } from "gatsby"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Cards from "../components/cards"
import Underline from "../components/underline"
import CardsMobile from "../components/cards-mobile"
import BlackBtn from "../components/black-btn"
import CaseStudies from "../components/caseStudies"
import { FetchedDevopsPageData } from "../services/helperFunctions"
import Parser from "html-react-parser"
import { Link } from "gatsby"
import BannerHeader from "../components/bannerHeader"
import devops_piller1 from "../static/images/aws-partner/devopslogo/piller1.svg"
import devops_piller2 from "../static/images/aws-partner/devopslogo/piller2.svg"
import devops_piller3 from "../static/images/aws-partner/devopslogo/piller3.svg"
import devops_piller4 from "../static/images/aws-partner/devopslogo/piller4.svg"
import DevopsBlogs from "../components/devopsBlogs"
import { Helmet } from "react-helmet"
const AwsConsultingPartner = props => {
  const data = useStaticQuery(
    graphql`
      {
        allDevopsPage {
          nodes {
              journey {
                attributes {
                  cmpName
                  header
                  paragraph
                  dynamicCmp {
                    Impact
                    Problem
                    Solution
                    header
                    imageUrl
                    point1
                    point2
                    point3
                    point4
                    point5
                    point6
                    statement
                    story
                  }
                }
              }
          }
        }
      }
    `
  )
  // const slugs = "continuous-deployment-speeding-software-delivery-and-agility"
  const slugs = [
    "continuous-deployment-speeding-software-delivery-and-agility",
    "agile-fragile-and-iron-fist-mastering-branching-strategies",
    "secure-ci-cd-on-aws-building-financial-sector-pipelines",
    "getting-started-with-aws-dev-ops-on-amazon-eks",
  ]
  const {
    sections,
    banner,
    cloud,
    ourDevops,
    lumiqDevops,
    pillers,
    whatWeUse,
    successStories,
    workWithUs,
    settings,
    testimonialSlider,
    cardMap,
    cardData,
    cardClient,
    allCaseStudy,
    tabs,
  } = FetchedDevopsPageData(data?.allDevopsPage?.nodes[0]?.journey)
  const devopsPillers = [
    devops_piller1,
    devops_piller2,
    devops_piller3,
    devops_piller4,
  ];
  const [isNavBarOpen, setIsNavBarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState(0)
  const [mobileActiveTab, setMobileActiveTab] = useState(false)
  const [dActiveTab, setDActiveTab] = useState(true)
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
  console.log(whatWeUse,'blal')

  return (
    <div className={`devops-page ${isNavBarOpen ? "" : "no-scroll"}`}>
      <div className="page-content">
        {/* -------- Banner start -------- */}
        <div className="banner-wrapper">
          <div className="page-wrapper">
            <div className="page-banner">
              <div className="banner-image-section">
                <img src={`${process.env.STRAPI_URL + banner?.dynamicCmp[0]?.imageUrl}`} alt="aws-devops" />
              </div>
              <div className="banner-bottom">
                <div className="banner-header">
                  <BannerHeader
                    headingType={"bannerTitle"}
                    header={banner?.header}
                    class="heading-lg"
                    line={"three-line"}
                  />
                </div>
                <div className="banner-bottom-img">
                  <img src={`${process.env.STRAPI_URL + banner?.dynamicCmp[1]?.imageUrl}`} alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------- Banner end -------- */}
        <div className="clear"></div>
        <Underline />
        {/* --------Unleash the Power of Data in Cloud start -------- */}
        <div className="section-01">
          <div className="page-wrapper">
            <div className="content">
              <div className="aws-cons-left-details">
                <BannerHeader
                  header={cloud?.header}
                  class="heading-lg"
                  line={"two-line"}
                />
                {cloud?.paragraph&&Parser(cloud?.paragraph)}
              </div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <Underline />
        {/* --------Unleash the Power of Data in Cloud start -------- */}
        <div className="section-01 devops-port">
          <div className="page-wrapper">
            <div className="content">
              <div className="aws-cons-left-details">
                <BannerHeader
                  header={ourDevops?.header}
                  class="heading-lg"
                  line={"two-line"}
                />
                {ourDevops?.paragraph&&Parser(ourDevops?.paragraph)}
              </div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <Underline />
        {/* --------Unleash the Power of Data in Cloud start -------- */}
        <div className="section-01 devops-port">
          <div className="page-wrapper">
            <div className="content">
              <div className="aws-cons-left-details">
                <BannerHeader
                  header={lumiqDevops?.header}
                  class="heading-lg"
                  line={"single-line"}
                />
                 {lumiqDevops?.paragraph&&Parser(lumiqDevops?.paragraph)}
              </div>
            </div>
          </div>
        </div>

        <div className="clear"></div>
        <Underline />

        <div className="section-zig-zag-header">
          <div className="page-wrapper">
            <div className="content">
              <BannerHeader
                header={pillers?.header}
                class="heading-lg"
                line={"single-line"}
              />
              <div className="piller">
                {pillers?.dynamicCmp?.map((val,idx)=>(
                  <div className="section-zig-zag" key={idx}>
                     <div className="aws-cons-left-details">
                      <h2 className="heading-md">
                        <span>0{`${idx+1}`}</span> {val?.header}
                      </h2>
                      <ul>
                        {val?.point1&&<li>{val?.point1}</li>}
                        {val?.point2&&<li>{val?.point2}</li>}
                        {val?.point3&&<li>{val?.point3}</li>}
                        {val?.point4&&<li>{val?.point4}</li>}
                        {val?.point5&&<li>{val?.point5}</li>}
                        {val?.point6&&<li>{val?.point6}</li>}
                        {val?.point7&&<li>{val?.point7}</li>}
                      </ul>
                     </div>
                      <div className="aws-cons-right-details">
                        <img src={devopsPillers[idx]} alt="devops-piller"/>
                      </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --------Unleash the Power of Data in Cloud end -------- */}
        <div className="clear"></div>
        <Underline />
        <div className="section-04">
          <div className="page-wrapper ">
            <div className="main-container">
              <div>
                <BannerHeader
                  header={whatWeUse?.header}
                  class="heading-lg"
                  line={"single-line"}
                />
              </div>
              <div className="padding-t-30 amazon-slider">
                <div className="sliderBox" aria-label="slider">
                  <Slider {...settings}>
                    {whatWeUse?.dynamicCmp?.map((val,idx)=>(
                      <div className="itembox" key={idx}>
                        <div className="all-cards">
                          <div className="aws-card-logo">
                            <img
                              src={`${process.env.STRAPI_URL + val?.imageUrl}`}
                              alt="Arch AmazonAthena"
                              className="lazyloaded"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <Underline />
        {/* --------you are in good hands start -------- */}
        <div className="section-06">
          <div className="page-wrapper">
            <div className="main-container">
              <BannerHeader
                header={"Case Studies"}
                class="heading-lg"
                line={"single-line"}
              />
              <div className="aws-case-studies">
                <div className="aws-left-details">
                  <ul>
                    {tabs.map((tab, idx) => (
                      <>
                        <li
                          onClick={() => handleClick(tab.id)}
                          className={`${
                            activeTab === tab.id ? "active-tab-black" : ""
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
                          className={`${
                            mobileActiveTab === tab.id &&
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
        <div className="section-07">
          <div className="page-wrapper">
            <div className="main-container">
              <BannerHeader
                header={"Our Success Stories"}
                class="heading-lg"
                line={"single-line"}
              />
              <div className="card-container ">
                <div className="testimonialDesktop" aria-label="slider">
                  <Slider {...testimonialSlider}>
                    {cardMap.map(i => {
                      return (
                        <Cards
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
                      <CardsMobile
                        key={i}
                        cardData={cardData[i]}
                        cardClient={cardClient[i]}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Underline />

        <div className="section-07 section-07-devops-blog">
          <div className="page-wrapper">
            <div className="main-container">
              <BannerHeader
                header={"Blogs"}
                class="heading-lg"
                line={"single-line"}
              />
            </div>
          </div>
        </div>
        <div className="blog-content devops-blog">
          <div className="page-wrapper">
            <div className="blog-inner">
              {slugs?.map((val, idx) => (
                <DevopsBlogs slug={val} key={idx} />
              ))}
            </div>
            <div className="blog-inner-mobile">
              {slugs?.map((val, idx) => (
                <DevopsBlogs slug={val} key={idx} />
              ))}
            </div>
          </div>
        </div>
        <Underline />

        <div className="section-08">
          <div className="page-wrapper">
            <div className="content">
              <h3 className="heading-md">
                {Parser(workWithUs?.header )}
              </h3>
              <div>
                <Link to="/careers" state={"applyForAJob"} name="devops">
                  <BlackBtn text={"Work With Us"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Underline />
      </div>
    </div>
  )
}

export default AwsConsultingPartner
