import React from "react"
import arrowWhite from "../static/images/arrow-white.svg"
import BannerHeader from "./bannerHeader"
import { Link } from "gatsby"
import Parser from "html-react-parser"

const ModulesMobile = props => {
  return (
    <>
      {props.moduleData?.map((val, index) => (
        <div key={index} className="modules">
          <div className="module-details">
            <div className="module-heading">
              {/* <h3>{val["header"]}</h3> */}
              <BannerHeader
                header={val?.header}
                line={"single-line"}
                class="heading-md"
                headingType="h3"
              />
            </div>
            <div className="module-img">
              <span> {val?.subheader}</span>

              <div className="module-ract-img">
                <img src={`${process.env.STRAPI_URL + val?.images}`} alt="Lumiq ai"/>
              </div>
              <div className="module-text">
                <p>{val?.imagesDesc}</p>
              </div>
            </div>
            <div className="module-text">
              <p>{val?.paragraph}</p>
            </div>
            {props.learnMore && (
              <Link
                to={`/emp${val?.header.split(" ")[1]}`}
                state={"blogs"}
                name="emp"
              >
                <div className="module-button">
                  <div>
                    <p>Learn More</p>
                  </div>
                  <div className="arrow-white">
                    <img src={arrowWhite} alt="Lumiq ai"/>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      ))}
    </>
  )
}

export default ModulesMobile
