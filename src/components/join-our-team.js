import React, { useEffect, useState, useRef } from "react"

import "../static/style/componentStyle/join-our-team.scss"
import CircleBtn from "./circleBtn"
import BlackBtn from "./black-btn"
import BannerHeader from "./bannerHeader"
import { useInView } from "react-intersection-observer"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Parser from "html-react-parser"


function JoinOurTeam() {
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
                  }
                }
            }
          }
        }
      }
    `
  )

  
  let JoinOurTeamObj = data?.allCmpGrps?.nodes[0]?.journey[2]?.attributes?.dynamicCmp[0];
  // console.log(JoinOurTeamObj,'datadata');
  const { ref: join, inView: joinRef } = useInView({ triggerOnce: true })

  const [joinTeam, setjoinTeam] = useState(false)

  useEffect(() => {
    if (joinRef) {
      setjoinTeam(true)
    }
  },[joinRef])

  const linkName = "lumiq.ai"
  return (
    <>
      <div className="join-our-team">
        <div className="page-wrapper">
          <div className="section-inner">
            <div className="left-content" ref={join}>
            {joinTeam&&<BannerHeader
              header={JoinOurTeamObj?.header}
              line={"single-line"}
            />}
            
              <h3>
                {Parser(JoinOurTeamObj?.subHeader)}
              </h3>
            </div>
            <div className="right-content">
              <p>
               {JoinOurTeamObj?.paragraph}
              </p>
              <div className="btn-area">
                <Link to='https://lumiq.zohorecruit.in/careers' target="_blank" name={linkName}>
                  <BlackBtn text={JoinOurTeamObj?.buttonName}/>
                </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JoinOurTeam
