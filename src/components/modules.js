import React, { useState } from "react"
import BlackBtn from "./black-btn"
import BannerHeader from "./bannerHeader"
import { Link } from "gatsby"
import Parser from "html-react-parser"

const Modules = props => {
  console.log(props.moduleData, "modulessasaas");
  const linkName = "lumiq.ai"
  return (
    <>
      {props.moduleData?.map((val, index) => (
        <div key={index} className="modules">
          <div className="module-details">
            <div className="module-heading">
              <BannerHeader
                header={val?.header}
                line={"single-line"}
                class="heading-md"
                headingType="h3"
              />
              {/* <h3 className="heading-md">{val["header"]}</h3> */}
              <span> {val?.subHeader}</span>
            </div>
            <div className="module-bottom-text">
              <div className="module-text">
                <p>{val?.paragraph}</p>
              </div>
              {props.learnMore && (
                <div className=" module-button">
                  <Link
                    to={`/${val?.header.split(" ")[0].toLowerCase()}-${val?.header.split(" ")[1].toLowerCase()}`}
                    state={"blogs"}
                    name={linkName}>
                    <BlackBtn text={"Learn More"} />
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="module-right-container">
            <div className="module-img">
              <img src={`${process.env.STRAPI_URL +val?.images}`} alt="empower img"/>
            </div>
            {!props.learnMore ? (
              <div className="module-text">
                <p>{Parser(val?.header)}</p>
              </div>
            ) : (
              <div className="module-text">
                <p>{val?.imagesDesc}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  )
}

// const Modules = props =>{
//   console.log(props?.moduleData,'moduleData');
//   return(
//     <>
//       {props.moduleData?.map((val,idx)=>(
//         <p key={idx}>{val?.header}</p>
//       ))}
//     </>
//   )
// }

export default Modules
