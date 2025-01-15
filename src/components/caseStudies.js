import React from "react"
import '../static/style/componentStyle/caseStudies.scss';
import Parser from "html-react-parser"

const CaseStudies = props => {
  console.log(props?.data?.contextParagraph,"hello");
  return (
    <div>
        {/* <p>
          <span>01</span> Built flawless voice-based customer interaction and
          delivery processes for a leading bank
        </p> */}
      <div className="first-para">
        <p>{typeof props?.data?.contextParagraph === 'string' ? Parser(props?.data?.contextParagraph) : null}</p>
      </div>
        <div className="aws-problem">
          <h3 className="heading-sm">Problem </h3>
          <p>
          {typeof props?.data?.Problem === 'string' ? Parser(props?.data?.Problem) : null}
          </p>
        </div>
        <div className="aws-problem">
          <h3 className="heading-sm">Solution </h3>
          <p>
          {typeof props?.data?.Solution === 'string' ? Parser(props?.data?.Solution) : null}
          </p>
        </div>
        <div className="aws-problem">
          <h3 className="heading-sm">Impact </h3>
          <p>
          {typeof props?.data?.Impact === 'string' ? Parser(props?.data?.Impact) : null}
          </p>
          <p className="mobile-close-button"></p>
        </div>
    </div>
  )
}

export default CaseStudies;
