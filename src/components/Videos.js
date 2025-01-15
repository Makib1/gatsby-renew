import React, { useState } from "react"
import "../static/style/componentStyle/blogs.scss"
import { props } from "bluebird"
import VideoCards from "./VideoCards"
import { FetchedResourcePageData, YouTubeVideo } from "../services/helperFunctions"
import Slider from "react-slick"

const Videos = ({ resourceUrl }) => {
  const [activeTab, setActiveTab] = useState("life-at-lumiq");
  const [selected, setSelected] = useState(null)
  const [viewAll, setViewAll] = useState(true)

  let videoData=YouTubeVideo().video;
 videoData=videoData.filter((data)=>data.category===activeTab)
  


  const handleClick = header => {
    setActiveTab(header);
    setViewAll(true)
  }

  const handleChange = selectedOption => {
    setSelected(selectedOption.value)
    setActiveTab(selectedOption.value)
  }
  const options = [
    // { value: "latest", label: "Latest" },
    { value: "life-at-lumiq", label: "Life at LUMIQ" },
    { value: "product", label: "Product" },
    { value: "podcast", label: "Podcast" },
    { value: "webinar", label: "Webinar" }
  ]
  const tabs = [
    // { id: "latest", label: "Latest" },
    { id: "life-at-lumiq", label: "Life at LUMIQ" },
    { id: "product", label: "Product" },
    { id: "podcast", label: "Podcast" },
    { id: "webinar", label: "Webinar" }
  ]
  const style = {
    control: base => ({
      ...base,
      border: "1px solid #000",
      fontFamily: "Helvicta",
      // This line disable the blue border
      boxShadow: "none",
    }),
  }
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
    <>
      <div className="video-resource-bottom-navigation">
        <div className="page-wrapper">
          <ul>
            {tabs.map(tab => (
              <li key={tab.id} onClick={() => handleClick(tab.id)}>
                <a
                  className={`${
                    activeTab === tab.id ? "active-tab-black" : ""
                  }`}
                >
                  {tab.label}
                  <span></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="resource-bottom-navigation-mobile">
        <div className="page-wrapper">
          <Select
            defaultValue={options[0]}
            options={options}
            theme={theme => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                neutral20: "neutral30",
                primary: "black",
              },
            })}
            styles={style}
            onChange={handleChange}
          />
        </div>
      </div> */}
      <div className="blog-content videos">
        <div className="page-wrapper">
          <div className="video-inner">
              {videoData &&
                videoData?.map((item, idx) => (
                  <VideoCards data={item} key={idx} />
                ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Videos
