import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import rectangle from "../static/images/rectangle.png"
import "../static/style/componentStyle/cards.scss"
import GreyArrow from "../static/images/left-arrow-grey.svg"
import Parser from "html-react-parser"


const Cards = ({ cardData, cardClient,cardLinks }) => {
  const data = useStaticQuery(
    graphql`
      {
        allCmpGrps {
          nodes {
              journey {
                attributes {
                  cmpName
                  dynamicCmp {
                    buttonName
                    cardDes
                    cardName
                    cmpName
                    header
                    paragraph
                    subHeader
                    icons {
                      imageUrl
                    }
                  }
                }
              }
            }
        }
      }
    `
  )
  let cardsObj =
    data?.allCmpGrps?.nodes[0]?.journey[0]?.attributes?.dynamicCmp
  const imageAlt = "enterprise ai"
  return (
   <div className="client-card">
        <div className="client-review">
          <p className="text">{typeof cardData === "string" ? Parser(cardData) : null}</p>
        </div>
        <div className="read-more">
          <div className="fs-left-arrow">
            <img src={GreyArrow} alt="arrow" />
          </div>
          {cardLinks?<Link to={cardLinks} target="_blank" name="cards"><p>{cardClient}</p></Link>:<p>{cardClient}</p>}
          
        </div>
      </div> 
  )
}

export default Cards


