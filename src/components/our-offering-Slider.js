import React, { useEffect, useState, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../static/style/componentStyle/OurOfferingSlider.scss"
import { useInView } from "react-intersection-observer"
import BannerHeader from "./bannerHeader"
import { graphql, useStaticQuery } from "gatsby"
import Parser from "html-react-parser"




function OurOfferingSlider({ content }) {


  // const { ref: header1, inView: header1Ref } = useInView({
  //   triggerOnce: true,
  // })
  // const [header1Var, setHeader1Var] = useState(false)
  // const sliderRef = useRef(null);
  // useEffect(() => {
  //   // Initialize the slider
  //   if (sliderRef.current) {
  //     sliderRef.current.slickGoTo(0); // Go to the first slide
  //     sliderRef.current.slickPlay(); // Start autoplay
  //   }
  // }, []);

  // useEffect(() => {

  //   if (header1Ref) {
  //     setHeader1Var(true)
  //   }
  //   if (trust) {
  //     setTrusted(true)
  //   }

  // }, [header1Ref, trust, MobileTrust])

  const imageAlt = "enterprise ai"

  var bannerSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
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
      <div className="offerings-services-slider">
        <div className="page-wrapper">
          <div className="section-inner">
            <div className="heading">
            <BannerHeader header={"Our Offerings"} class="heading-lg" line={"single-line"} />
            </div>
            <div className="fss-slider-area">
              <div className="page-wrapper" aria-label="slider"  >
                <Slider {...bannerSettings} >
                  {content.map((items, index) => (
                    <div className="offering-box" key={index}>
                      <div className="logo">
                        <img src={`${process.env.STRAPI_URL + items.iconUrl}`} alt={"imgAlt"} />
                      </div>
                      <div className="box-heading"><h3>{Parser(items.cardHeading)}</h3></div>
                      <ul>
                        {items.content.split("*\n").map((str, index2) => (
                          <p key={index2}>{str}</p>
                        ))}
                      </ul>
                    </div>
                  ))}
                </Slider>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurOfferingSlider
