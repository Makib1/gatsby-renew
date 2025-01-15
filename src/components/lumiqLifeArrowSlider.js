import React, { useState } from "react"
// import { LightBox } from "react-lightbox-pack"
// import "react-lightbox-pack/dist/index.css"
import arrow from "../static/images/component-img/PlatformArrow.svg"
// import Slider from "react-slick"
import "../static/style/componentStyle/LumiqLifeSlider.scss"
import Slider from "react-slick"

const LumiqLifeArrowSlider = ({ companyPageObj }) => {
  //   const [initialImageCount, setInitialImageCount] = useState(6)
  const images = []

  for (let i = 0; i < 12; i++) {
    images.push(
      process.env.STRAPI_URL + companyPageObj[`lifeAtLUMIQ-images${i + 1}`]
    )
  }
  console.log(images, "images")
  // var lifeAtLumiqSlider = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  const lifeAtLumiqSlider = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

      <Slider {...lifeAtLumiqSlider}>
        {images.map((image, index) => (
            <div className="life-at-lumiq-image">
                <img key={index} src={image}  alt="life-at-lumiq-image"/>
            </div>
        ))}
        
      </Slider>
  // <></>
  )
}

export default LumiqLifeArrowSlider
