import React, { useEffect, useState, useRef } from "react"

// import CircleBtn from "./circleBtn"  
import '../static/style/componentStyle/requestDemo.scss';
import BannerHeader from "./bannerHeader";
import BlackBtn from "./black-btn"
import { useInView } from "react-intersection-observer"
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby"
import Parser from "html-react-parser"



const RequestDemo = (props) => {
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
  const { ref: request, inView: requestRef } = useInView({ triggerOnce: true })

  const [requestDemo, setRequestDemo] = useState(false)

  useEffect(() => {
    if (requestRef) {
      setRequestDemo(true)
    }
  },[requestRef])
  let requestDemoObj = data?.allCmpGrps?.nodes[0]?.journey[1]?.attributes?.dynamicCmp[0];
  // console.log(requestDemoObj,'datadata');
  return (
    <div className="request-demo">
      <div className="section-inner">
        <div className="left-content" ref={request}>
          {requestDemo&&<BannerHeader
          header={requestDemoObj?.header}
            line={"single-line"}
          />}
          
          <h3 className="">
            {Parser(requestDemoObj?.subHeader)}
          </h3>
        </div>
        <div className="right-content">
          <div className='btn-area'>
            {/* <CircleBtn BtnText='Get Started' /> */}
            <Link to="/get-started" name="get-startd"> <BlackBtn text={requestDemoObj?.buttonName}/></Link>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestDemo
