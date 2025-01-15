import React, { useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../static/style/pageStyle/company-page.scss"
import "../static/style/globalCss/common.scss"
import "../static/style/componentStyle/underlineButton.scss"
import cultureVideo from "../static/images/video/culture.mp4"
import ContactImage from "../static/images/contact.webp"
import Underline from "../components/underline"
import BannerHeader from "../components/bannerHeader"
import Parser from "html-react-parser"
import { FetchedCompanyPageData } from "../services/helperFunctions"
import VideoComponent from "../components/videoComponent"
import DownloadBtn from "../components/download-btn"
import careerPageVideoPoster from "../static/images/culture.webp"
import Loadable from "@loadable/component"

const LumiqLifeArrowSlider =Loadable(()=>
  import("../components/lumiqLifeArrowSlider")
)

// const FinancialServiceSlider = Loadable(() =>
//   import("../components/financial-service-slider")
// )
// const JoinOurTeam = Loadable(() => import("../components/join-our-team"))
function CompanyPage(props) {
  const data = useStaticQuery(
    graphql`
      {
        allCompanyPage {
            nodes {
            journey {
                attributes {
                cmpname
                headers
                paragraph
                dynamicCmp {
                    imageUrl
                }
             }
            }
          }
        }
      }
    `
  )
  const companyPageObj = FetchedCompanyPageData(
    data?.allCompanyPage?.nodes[0]?.journey
  )
  console.log(companyPageObj,"hello");
  // console.log(companyPageObj, "company")
  const [isNavBarOpen, setIsNavBarOpen] = useState(true)
  const [seeMore, setSeeMore] = useState(false)
  const handleClick = () => {
    setSeeMore(!seeMore)
  }
  // console.log(seeMore, "seemore")
  useEffect(() => {
    if (props?.location?.state) {
      const id = Object.values(props?.location?.state)
        .filter(
          (value, index) =>
            typeof value === "string" &&
            index !== Object.keys(props?.location?.state)?.length - 1
        )
        .join("")
      // console.log(id, "asdadsasd")
      if (id) {
        const partnersLocation = document.getElementById(id)
        if (partnersLocation) {
          partnersLocation.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
            scrollMarginTop: "150px",
          })
        }
      }
    }
  }, [props?.location?.state])

  return (
    <div className={`company-pagev2 ${isNavBarOpen ? "" : "no-scroll"}`}>
      <div className="page-content">
        {/* Banner Start */}
        <div className="company-banner">
          <div className="page-wrapper">
            <div className="left-spacing-box">
              <BannerHeader
                headingType={"bannerTitle"}
                header={companyPageObj["header-header"]}
              />
              <p>{Parser(companyPageObj["header-paragraph"])}</p>
            </div>
          </div>
        </div>
        <Underline />
        <div className="what-we-do" id="whatWeDo">
          <div className="page-wrapper">
            <div className="left-spacing-box">
              <BannerHeader
                header={companyPageObj["whatWeDo-header"]}
                line={"single-line"}
              />
              <p>{companyPageObj["whatWeDo-paragraph"]}</p>
              <div className="customer-success-book">
                <DownloadBtn
                  text="Download Company Info Sheet"
                  pdf={"LUMIQ_infosheet.pdf"}
                />
              </div>
            </div>
          </div>
        </div>
        <Underline />
        <div className="what-to-expect">
          <div className="page-wrapper">
            <div className="what-to-expect-inner">
              <div className="left-box">
                <BannerHeader
                  header={companyPageObj["whatToExpect-header"]}
                  line={"two-line"}
                  class="heading-lg"
                />
                <div className="section-for-mobile">
                  <img
                    src={`${
                      process.env.STRAPI_URL +
                      companyPageObj["whatToExpect-images"]
                    }`}
                    alt="WhatToExpect"
                  />
                </div>
                <p>{Parser(companyPageObj["whatToExpect-paragraph"])}</p>
              </div>
              <div className="right-box">
                <img
                  src={`${
                    process.env.STRAPI_URL +
                    companyPageObj["whatToExpect-images"]
                  }`}
                  alt="WhatToExpect"
                />
              </div>
            </div>
          </div>
        </div>
        <Underline />
        <div className="our-leadership" id="leaders">
          <div className="page-wrapper">
            <div className="section-inner">
              <BannerHeader header={"Our Leadership"} line={"single-line"} />
              <div className="leader-box-row">
                <div className="leader-box">
                  <div className="left-img">
                    <img
                      src={`${
                        process.env.STRAPI_URL +
                        companyPageObj["ourLeadership-images1"]
                      }`}
                      alt="LeaderImage"
                    />
                  </div>
                  <div className="right-details">
                    <h3>
                      Shoaib <br /> Mohammad
                    </h3>
                    <p>CEO and Founder</p>
                  </div>
                </div>
                <div className="leader-box">
                  <div className="left-img">
                    <img
                      src={`${
                        process.env.STRAPI_URL +
                        companyPageObj["ourLeadership-images2"]
                      }`}
                      alt="LeaderImage"
                    />
                  </div>
                  <div className="right-details" id="investors">
                    <h3>
                      Vaibhav <br /> Dobriyal
                    </h3>
                    <p>CPO and Co-Founder</p>
                  </div>
                </div>
              </div>
              <div className="our-investors">
                <h3 className="heading-md">
                  {companyPageObj["ourInvestors-header"]}
                </h3>
                <div className="logo-box">
                  <div className="logo">
                    <img
                      src={`${
                        process.env.STRAPI_URL +
                        companyPageObj["ourInvestors-images1"]
                      }`}
                      alt="Investors1"
                    />
                  </div>
                  <div className="logo">
                    <img
                      src={`${
                        process.env.STRAPI_URL +
                        companyPageObj["ourInvestors-images2"]
                      }`}
                      alt="Investors2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Underline />
        <div className="our-culture" id="ourCulture">
          <div className="page-wrapper">
            <div className="section-inner">
              <div className="left-spacing-box">
                <BannerHeader
                  header={companyPageObj["ourCulture-header"]}
                  line={"single-line"}
                />
                <p>{Parser(companyPageObj["ourCulture-paragraph"])}</p>
              </div>
              <div className="video-area">
                <div className="video-inner">
                  <h3>Culture at LUMIQ</h3>
                  <div className="image-container-header">
                    <VideoComponent
                      video={cultureVideo}
                      poster={careerPageVideoPoster}
                    />
                  </div>
                </div>
              </div>

              <div className="our-culture-text">
                <p>{Parser(companyPageObj["ourCulture-paragraph"])}</p>
              </div>

              {/* <div className="button-area">
                <Link
                  to="https://lumiq.zohorecruit.in/careers"
                  target="_blank"
                  name="career"
                >
                  <BlackBtn text={"See All Current Openings"} />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        {/* <Underline />

        <div className="life-at-lumiq" id="lifeAtLumiq">
          <div className="page-wrapper">
            <div className="section-inner">
              <BannerHeader
                header={companyPageObj["lifeAtLUMIQ-header"]}
                line={"single-line"}
              />
              <ImageGallary companyPageObj={companyPageObj} />
            </div>
          </div>
        </div> */}
        <Underline />

        <div className="life-at-lumiq" id="lifeAtLumiq">
          <div className="page-wrapper">
            <div className="section-inner">
              <BannerHeader
                header={companyPageObj["lifeAtLUMIQ-header"]}
                line={"single-line"}
              />
              <LumiqLifeArrowSlider companyPageObj={companyPageObj} />
            </div>
          </div>
        </div>

        <Underline />
        {/* <FinancialServiceSlider /> */}
        <Underline />
        {/* <JoinOurTeam /> */}
        <Underline />
        {/* address section */}
        <div className="section-address">
          <div className="page-wrapper">
            <div className="address-inner">
              <div className="address-map"></div>
              <div className="address-details">
                <div className="header">
                  <h2>Our Locations</h2>
                </div>
                <div className="para-details">
                  <div className="country-india">
                    <div className="country-name">
                      <h2>India</h2>
                    </div>
                    <div className="cities">
                      <div className="city-cards">
                        <div className="city-name">
                          <p>Noida</p>
                        </div>
                        <div className="city-address">
                          <p>
                            <span>HQ: </span>Tower A, 9th Floor, Noida One
                            Building, Sector-62, B-8, Noida, Gautam Buddha
                            Nagar, Uttar Pradesh, 201307
                          </p>
                        </div>
                      </div>
                      <div className="city-cards">
                        <div className="city-name">
                          <p>Chennai</p>
                        </div>
                        <div className="city-address">
                          <p>
                            LUMIQ Office, Indiqube brigade vantage. 3rd floor,
                            Office 2, Kottivakkam, Chennai 600096
                          </p>
                        </div>
                      </div>
                      <div className="city-cards">
                        <div className="city-name">
                          <p>Pune</p>
                        </div>
                        <div className="city-address">
                          <p>
                            LUMIQ Office, 5th Floor IndiQube Unity Towers,
                            Baner, Pune 411045
                          </p>
                        </div>
                      </div>
                      <div className="city-cards">
                        <div className="city-name">
                          <p>Mumbai</p>
                        </div>
                        <div className="city-address">
                          <p>
                            EFC Office 14th Floor, A wing, Empire Tower, Next to
                            Reliable Tech Park, Airoli, Navi Mumbai-400708
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="countries-outside">
                    <div className="countries-outside-inner">
                      <div className="country-name">
                        <h2>United States</h2>
                      </div>
                      <div className="country-address">
                        <p>
                          Suite 6, 2nd Floor, 1215 Livingston Avenue, North
                          Brunswick, Middlesex County, NJ 08902, USA
                        </p>
                      </div>
                    </div>
                    <div className="countries-outside-inner">
                      <div className="country-name">
                        <h2>Singapore</h2>
                      </div>
                      <div className="country-address">
                        <p>
                          30, Cecil Road, 19-08, Prudential Tower, Singapore -
                          049712 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Underline />
        {/* //contact us  */}
        <div className="Contact-us">
          <div className="page-wrapper">
            <div className="connect-us-inner">
                <div className="cards">
                <div className="contact-cards">
                    <div className="image">
                      <img src={ContactImage} alt="contact-image" />
                    </div>
                    <div className="content">
                      {/* <p className="title">Contact Management</p> */}
                      <p >Chief Executive Officer</p>
                      <p className="name">Shoaib Mohammad</p>
                      <p>Mail at: shoaib@lumiq.ai</p>
                      <p>Call at: +91-9953407141</p>
                      <p>Domain - lumiq.ai</p>
                      <p>Address: 9th Floor, Tower A (unit No. 901 To 916), Noida One B-8, Sector-62, Noida, Gautam Budh Nagar, Uttar Pradesh, 201307, India</p>
                    </div>
                  </div>

                  <div className="contact-cards">
                    <div className="image">
                      <img src={ContactImage}  alt="contact-image"/>
                    </div>
                    <div className="content">
                      {/* <p className="title">For Escalation</p> */}
                      <p>Chief Product Officer</p>
                      <p className="name">Vaibhav Dobriyal</p>
                      <p>Mail at: vaibhav@lumiq.ai</p>
                      <p>Call at: +91-9901525431</p>
                      <p>Domain - lumiq.ai</p>
                      <p>Address: 9th Floor, Tower A (unit No. 901 To 916), Noida One B-8, Sector-62, Noida, Gautam Budh Nagar, Uttar Pradesh, 201307, India</p>
                    </div>
                  </div>
                  <div className="contact-cards">
                    <div className="image">
                      <img src={ContactImage}  alt="contact-image"/>
                    </div>
                    <div className="content">
                      {/* <p className="title">For Escalation</p> */}
                      <p>Azure Alliance Partner</p>
                      <p className="name">Venkat K</p>
                      <p>Mail at: venkat.kameshwar@lumiq.ai</p>
                      <p>Call at: +91-9990616146</p>
                      <p>Domain - lumiq.ai</p>
                      <p>Address: 9th Floor, Tower A (unit No. 901 To 916), Noida One B-8, Sector-62, Noida, Gautam Budh Nagar, Uttar Pradesh, 201307, India</p>
                    </div>
                  </div>
                 
                </div>
             
            </div>
          </div>
        </div>
        {/* <Underline /> */}
      </div>
    </div>
    // <h1>Hello</h1>
  )
}

export default CompanyPage
