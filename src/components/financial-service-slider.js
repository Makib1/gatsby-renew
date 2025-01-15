import React, { useEffect, useState, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../static/style/componentStyle/FinancialServiceSlider.scss"
import { useInView } from "react-intersection-observer"
import BannerHeader from "./bannerHeader"
import { graphql, useStaticQuery } from "gatsby"



function FinancialServiceSlider() {
 
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
    `)
  let financailSliderObj = data?.allCmpGrps?.nodes[0]?.journey[3]?.attributes?.dynamicCmp[0];
  const { ref: ref, inView: trust } = useInView({ triggerOnce: true })
  const { ref: mobileRef, inView: MobileTrust } = useInView({
    triggerOnce: true,
  })
  const [trusted, setTrusted] = useState(false)
  const [mobileTrusted, setMobileTrusted] = useState(false)
  const { ref: header1, inView: header1Ref } = useInView({
    triggerOnce: true,
  })
  const [header1Var, setHeader1Var] = useState(false)
  const sliderRef = useRef(null);
  useEffect(() => {
    // Initialize the slider
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Go to the first slide
      sliderRef.current.slickPlay(); // Start autoplay
    }
  }, []);

  useEffect(() => {

    if (header1Ref) {
      setHeader1Var(true)
    }
    if (trust) {
      setTrusted(true)
    }
    if (MobileTrust) {
      setTrusted(true)
    }
  }, [header1Ref,trust, MobileTrust])
  const partnerLogos = [
    { src: financailSliderObj?.icons[0]?.imageUrl, className: "canarahsbc" },
    { src: financailSliderObj?.icons[1]?.imageUrl, className: "hdfc" },
    { src: financailSliderObj?.icons[4]?.imageUrl, className: "bharti" },
    { src: financailSliderObj?.icons[2]?.imageUrl, className: "max" },
    { src: financailSliderObj?.icons[3]?.imageUrl, className: "tokio" },
    { src: financailSliderObj?.icons[5]?.imageUrl, className: "care" },
    { src: financailSliderObj?.icons[6]?.imageUrl, className: "bajaj" },
    { src: financailSliderObj?.icons[9]?.imageUrl, className: "axis" },
    { src: financailSliderObj?.icons[7]?.imageUrl, className: "ergo" },
    { src: financailSliderObj?.icons[8]?.imageUrl, className: "future" },
    { src: financailSliderObj?.icons[10]?.imageUrl, className: "kotak" },
    { src: financailSliderObj?.icons[11]?.imageUrl, className: "rbl" },
    { src: financailSliderObj?.icons[12]?.imageUrl, className: "uno" },
    { src: financailSliderObj?.icons[13]?.imageUrl, className: "clix" },
    { src: financailSliderObj?.icons[14]?.imageUrl, className: "gro" },
    { src: financailSliderObj?.icons[15]?.imageUrl, className: "tvs" },
  ]
  const imageAlt = "enterprise ai"

  var bannerSettings = {
    arrows:false,
    speed: 4000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
    slidesToShow: 5,
  	slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
  	centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="financial-services-slider">
        <div className="page-wrapper">
          <div className="section-inner">
            <div className="content" ref={ref}>
              {trusted && (
                <BannerHeader
                  header={ financailSliderObj?.header }
                  line={"two-line"}
                />
              )}
            </div>
            <div className="mobile-content" ref={mobileRef}>
              {MobileTrust && (
                <BannerHeader
                  header={
                    " We Work With <br/> Leading Global <br/> Financial Enterprises"
                  }
                  line={"three-line"}
                />
              )}
            </div>
            <div className="fss-slider-area">
              <div className="page-wrapper" aria-label="slider" ref={header1} >
                {header1Var&&
                <Slider {...bannerSettings} >
                {partnerLogos.map((partner, index) => (
                  <div className="partner-logo" key={index}>
                    <img
                      src={`${process.env.STRAPI_URL+ partner.src}`}
                      className={`${partner.className} image-width lazyloaded`}
                      alt={imageAlt}
                    />
                  </div>
                ))}
                {partnerLogos.map((partner, index) => (
                  <div className="partner-logo" key={index}>
                    <img
                      src={`${process.env.STRAPI_URL+ partner.src}`}
                      className={`${partner.className} image-width lazyloaded`}
                      alt={imageAlt}
                    />
                  </div>
                ))}
              </Slider>}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FinancialServiceSlider
