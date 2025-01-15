import React, { useEffect, useState } from "react"
import "../static/style/pageStyle/career-page.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import cultureVideo from "../static/images/video/culture.mp4"
import Underline from "../components/underline"
import BlackBtn from "../components/black-btn"
import BannerHeader from "../components/bannerHeader"
import Parser from "html-react-parser"
import { FetchedCareerPageData } from "../services/helperFunctions"
import VideoComponent from "../components/videoComponent"
import careerPageVideoPoster from "../static/images/culture.webp"

function Career(props) {
  const data = useStaticQuery(
    graphql`
      {
        allCareerPage {
                nodes {
                journey {
                    attributes {
                    cmpname
                    dynamicCmp {
                        imageUrl
                    }
                    headers
                    paragraph
                    subHeader
                    }
                }
                }
            }
      }
    `
  )
  const careerPageObj = FetchedCareerPageData(
    data.allCareerPage.nodes[0]?.journey
  )
  // console.log(careerPageObj, "company")
  const [isNavBarOpen, setIsNavBarOpen] = useState(true)

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
      console.log(id,props?.location?.state,'iddddd')
    }
  }, [props?.location?.state])

  return (
    <div className={`career-pagev2 ${isNavBarOpen ? "" : "no-scroll"}`}>
      <div className="page-content">
        <div className="career-banner">
          <div className="page-wrapper">
            <div className="section-inner">
              <div className="left-title">
                <BannerHeader
                  headingType={"bannerTitle"}
                  header={careerPageObj["header-header"]}
                />
              </div>
              <div className="right-details">
                <h2 className="heading-md">
                  {Parser(careerPageObj["header-subHeader"])}
                </h2>

                <div className="see-all-position">
                  <button className="right-arrow-btn underline-remove-effect">
                    <p>
                      {" "}
                      <a
                        href="https://lumiq.zohorecruit.in/careers"
                        target="_blank"
                      >
                        {" "}
                        See All Open Positions
                      </a>{" "}
                    </p>
                    <span>&#10230;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Underline /> */}
        <div className="open-positions">
          <div className="page-wrapper">
            <div className="section-inner">
              <div className="positions-image-box">
                <img src={`${process.env.STRAPI_URL + careerPageObj["openPosition-images"]}`} alt="OPImage" />
              </div>
              <div className="positions-descriptions" id="applyForAJob">
                <BannerHeader
                  header={careerPageObj["openPosition-header"]}
                  line={"single-line"}
                />
                <p>{careerPageObj["openPosition-paragraph"]}</p>
              </div>

              <div className="open-position-btn">
                <Link
                  to="https://lumiq.zohorecruit.in/careers"
                  target="_blank"
                  name="career"
                >
                  <BlackBtn text={"Apply For All Open Positions"} />
                </Link>
              </div>

              <div className="underline-class">
                <div className="page-wrapper">
                  <div className="bottom_line"></div>
                </div>
              </div>

              <div className="company-character">
                <div className="company-character-area">
                  <div className="left-details">
                    <div className="desktop-responsive-class">
                      <BannerHeader
                        header={careerPageObj["ourEmployees-header"]}
                        line={"three-line"}
                        class="heading-md"
                      />
                      <p>{careerPageObj["ourEmployees-paragraph"]}</p>
                    </div>

                    <div className="watch-full-video">
                      <button className="right-arrow-btn">
                        <p>Watch Full Video here</p>
                        <span>&#10230;</span>
                      </button>
                    </div>
                  </div>

                  <div className="right-video-box">
                    <div className="mobile-responsive-class">
                      <BannerHeader
                        header={
                          "Our employees shape and define our company's character and identity."
                        }
                        line={"three-line"}
                        class="heading-md"
                      />
                      <div className="image-container-header">
                        <VideoComponent
                          video={cultureVideo}
                          poster={careerPageVideoPoster}
                        />
                      </div>
                      <p>{careerPageObj["ourEmployees-paragraph"]}</p>
                    </div>

                    <div className="image-container-header desktop-responsive-class">
                      <VideoComponent
                        video={cultureVideo}
                        poster={careerPageVideoPoster}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Underline />
      </div>
    </div>
  )
}

export default Career
