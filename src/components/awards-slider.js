import React, { useEffect, useState, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../static/style/componentStyle/AwardsSlider.scss"
import BannerHeader from "./bannerHeader"
// import { useInView } from "react-intersection-observer"
// import BannerHeader from "./bannerHeader"
// import { graphql, useStaticQuery } from "gatsby"


function AwardsSlider({ awardImages }) {

  
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
    arrows:false,
    speed: 4000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
    slidesToShow: 3,
  	slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
  	centerMode: true,
    focusOnSelect: true,
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
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
      <div className="awards-services-slider">
        <div className="page-wrapper">
          <div className="section-inner">
            <div className="heading">
            </div>
            <div className="fss-slider-area">
              <div className="page-wrapper" aria-label="slider"  >
                  <Slider {...bannerSettings} >
                    {awardImages.map((item, index) => (
                      <div className="partner-logo" key={index}>
                        <img
                          src={`${process.env.STRAPI_URL + item.imageUrl}`}
                          alt={imageAlt}
                        />
                      </div>
                    ))}
                    {/* {awardImages.map((item, index) => (
                      <div className="partner-logo" key={index}>
                        <img
                          src={`${process.env.STRAPI_URL + item.imageUrl}`}
                          alt={imageAlt}
                        />
                      </div>
                    ))} */}
                  </Slider>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AwardsSlider
