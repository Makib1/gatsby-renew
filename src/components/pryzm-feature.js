import React from "react"
import "../static/style/componentStyle/PryzmFeatures.scss"
import Parser from "html-react-parser"

const PryzmFeatures = ({content,index}) => {
  return (
    <>
      <div className="feature-details" key={index}>
        <div className="details-heading">
          <div className="number"><p>0{index + 1}</p></div>
          <div className="icon-image">
            <img src={`${process.env.STRAPI_URL + content.iconUrl}`} alt="icon-image"/>
          </div>
          <h2 className="text">{content.cardHeading}</h2>
        </div>
        <p className="paragraph">{content.content}</p>
      </div>
    </>
  )
}

export default PryzmFeatures
