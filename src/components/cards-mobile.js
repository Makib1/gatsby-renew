import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import rectangle from "../static/images/rectangle.png"
import "../static/style/componentStyle/cards.scss"
import GreyArrow from "../static/images/left-arrow-grey.svg"
import Parser from "html-react-parser"

const CardsMobile = ({ cardData, cardClient }) => {
  const imageAlt = "enterprise ai"
  return (
    <div className="client-card">
      <div className="client-review">
        <p className="text"> {typeof cardData === "string" ? Parser(cardData) : null} </p>
      </div>
      <div className="read-more">
        <div className="fs-left-arrow">
          <img src={GreyArrow} alt="arrow" />
        </div>
        <p>{cardClient}</p>
      </div>
    </div>
  )
}

export default CardsMobile
