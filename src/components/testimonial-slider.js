import React, { useEffect, useState, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../static/style/componentStyle/testimonial-slider.scss"
import { useInView } from "react-intersection-observer"
import BannerHeader from "./bannerHeader"
import { graphql, useStaticQuery } from "gatsby"
import Parser from "html-react-parser"


function TestimonialSlider({ content }) {
  const imageAlt = "enterprise ai"

  var bannerSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1   ,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="testimonial-sliders">
        {/* <div className="page-wrapper"> */}
          <div className="section-inner">
            <div className="fss-slider-area">
              {/* <div className="page-wrapper" aria-label="slider"  > */}
                <Slider {...bannerSettings} >
                  {content.map((items, index) => (
                    <div className="offering-box" key={index}>
                      <div className="box-heading"><h3>{Parser(items.heading)}</h3></div>
                      {/* <h3 className="key-heading">Keys Features</h3> */}
                      <ul>
                        {items.content.split("*\n").map((str, index2) => (
                          <p key={index2}>{str}</p>
                        ))}
                      </ul>
                      {/* <h3 className="key-heading">Key Benefits</h3>
                      <ul>
                        {items.benefits.split("*\n").map((str, index2) => (
                          <p key={index2}>{str}</p>
                        ))}
                      </ul> */}
                    </div>
                  ))}
                </Slider>

              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    </>
  )
}

export default TestimonialSlider
