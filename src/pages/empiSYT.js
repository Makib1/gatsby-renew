import React, { useEffect, useState, useRef } from "react"
import "../static/style/globalCss/platform-page.scss"
import "../static/style/globalCss/style.scss"
import { graphql, useStaticQuery } from "gatsby"
import banner from "../static/images/video/banner.mp4"
import RequestDemo from "../components/requestDemo"
import EmpModules from "../components/empModule"
import EmpModulesMobile from "../components/EmpModuleMobile"
import Parser from "html-react-parser"
import BannerHeader from "../components/bannerHeader"
import Underline from "../components/underline"
import platformbanner from "../static/images/platform.webp"
import AOS from "aos"
import "aos/dist/aos.css"
/*! purgecss start ignore */ import "aos/src/sass/aos.scss" /*! purgecss end ignore */
import DownloadBtn from "../components/download-btn"
import {FetchedEmpowerFoundationPageData} from '../services/helperFunctions'
import VideoComponent from "../components/videoComponent"

const EmpISYT = props => {
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
      }
    `
  )
  
  // console.log(data?.empPage?.empPage?.journey,'empisyt')
  useEffect(() => {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
      startEvent: "load",
    })
    AOS.refresh()
  }, [])
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
  const {empHeader,empProducts,empModules,empModuleArray} = FetchedEmpowerFoundationPageData(data?.allEmpPage?.nodes[0].journey[3]?.attributes?.dynamicCmp);
  const imgAlt = "enterprise ai"
  
  return (
    <>
      {empHeader && (
        <div className={`platform-v3  emPower-isyt emPower-page ${isNavBarOpen ? "" : "no-scroll"}`}>
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
                  </div>

                  <div className="video-area">
                    <div className="video-inner">
                      <h3>{Parser(empHeader?.header)}</h3>
                      <div className="image-container-header">
                      <VideoComponent video={banner} poster={platformbanner}/>
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
                    <p>{empProducts?.paragraph}</p>
                  </div>
                  <div className="emp-data-products-logos">
                    <div className="emp-products">
                      <div className="emp-products-logo">
                        <img src={`${process.env.STRAPI_URL + empProducts?.logo[0].logoUrl}`} alt={imgAlt}/>
                      </div>
                      <p>
                        {Parser(empProducts?.logo[0].description)}
                      </p>
                    </div>
                    <div className="emp-products">
                      <div className="emp-products-logo">
                        <img src={`${process.env.STRAPI_URL + empProducts?.logo[1].logoUrl}`} alt={imgAlt}/>
                      </div>
                      <p>
                      {Parser(empProducts?.logo[1].description)}
                      </p>
                    </div>
                    <div className="emp-products">
                      <div className="emp-products-logo">
                        <img src={`${process.env.STRAPI_URL + empProducts?.logo[2].logoUrl}`} alt={imgAlt}/>
                      </div>
                      <p>
                      {Parser(empProducts?.logo[2].description)}
                      </p>
                    </div>
                    <div className="emp-products">
                      <div className="emp-products-logo">
                        <img src={`${process.env.STRAPI_URL + empProducts?.logo[3].logoUrl}`} alt={imgAlt}/>
                      </div>
                      <p>
                      {Parser(empProducts?.logo[3].description)}
                      </p>
                    </div>
                  </div>
                  <div className="emp-request-demo">
                  <DownloadBtn text="Download emPower Foundation Data Sheet"  pdf={'emPOWER_DataSheet.pdf'}/>
                  </div>
                </div>
              </div>
            </div>

            {/* -------- section-02 end -------- */}

            <Underline />

            {/* -------- section-03 start -------- */}

            <div className="section-03">
              <div className="page-wrapper">
                <div className="content">
                    <BannerHeader header={empModules?.header} line={"two-line"} />
                  <div className="modules-container">
                    <EmpModules moduleArray={empModuleArray} learnMore={false}/>
                  </div>
                  <div className="modules-container-mobile">
                    <EmpModulesMobile moduleArray={empModuleArray}  learnMore={false}/>
                  </div>
                </div>
              </div>
            </div>

            {/* -------- section-03 end -------- */}

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

export default EmpISYT
