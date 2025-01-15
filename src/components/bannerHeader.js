import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import "../static/style/globalCss/common.scss"
import "../static/style/componentStyle/bannerHeader.scss"
import Typewriter from "typewriter-effect"
import Parser from "html-react-parser"

const BannerHeader = props => {
  const { ref: header1, inView: header1Ref } = useInView({
    triggerOnce: true,
  })
  const { ref: headerMd, inView: headerMdRef } = useInView({
    triggerOnce: true,
  })
  const { ref: header2, inView: header2Ref } = useInView({
    triggerOnce: true,
  })
  const { ref: header3, inView: header3Ref } = useInView({
    triggerOnce: true,
  })
  const [header1Var, setHeader1Var] = useState(false)
  const [headerMdVar, setHeaderMdVar] = useState(false)
  const [header2Var, setHeader2Var] = useState(false)
  const [header3Var, setHeader3Var] = useState(false)

  useEffect(() => {
    if (header1Ref) {
      setHeader1Var(true)
    }
    if (headerMdRef) {
      setHeaderMdVar(true)
    }
    if (header2Ref) {
      setHeader2Var(true)
    }
    if (header3Ref) {
      setHeader3Var(true)
    }
  }, [header1Ref,headerMdRef, header2Ref, header3Ref])

  return (
    <>
      <div
        className={`${
          props.line === "single-line"
            ? "header-h1-one-line"
            : props.line === "two-line"
            ? "header-h1-two-line"
            : "header-h1-three-line"
        }`}
      >
        {props.headingType === "bannerTitle" ? (
          props.class === "heading-md" ? (
            <h1 className="heading-md" ref={headerMd}>
              {headerMdVar && (
                <Typewriter
                  onInit={typewriter => {
                    typewriter.typeString(props.header).pauseFor(250).start()
                  }}
                  options={{
                    delay: 15,
                  }}
                />
              )}
            </h1>
          ) : (
            <h1 className="heading-lg" ref={header1}>
              {header1Var && (
                <Typewriter
                  onInit={typewriter => {
                    typewriter.typeString(props.header).pauseFor(250).start()
                  }}
                  options={{
                    delay: 15,
                  }}
                />
              )}
            </h1>
          )
        ) : props.headingType === "h3" ? (
          <h3 className="heading-md" ref={header3}>
            {header3Var && (
              <Typewriter
                onInit={typewriter => {
                  typewriter.typeString(props.header).pauseFor(250).start()
                }}
                options={{
                  delay: 15,
                }}
              />
            )}
          </h3>
        ) : (
          <h2
            className={`${
              props.class === "heading-md"
                ? "heading-md"
                : props.class === "heading-sm"
                ? "heading-sm"
                : "heading-lg"
            }`}
            ref={header2}
          >
            {header2Var && (
              <Typewriter
                onInit={typewriter => {
                  typewriter.typeString(props.header).pauseFor(250).start()
                }}
                options={{
                  delay: 15,
                }}
              />
            )}
          </h2>
        )}
        {props.subHeader && (
          <h3 className="heading-sm padding-top-60px">
            <span> {Parser(props.subHeader)} </span>
          </h3>
        )}
      </div>
    </>
  )
}

export default BannerHeader
