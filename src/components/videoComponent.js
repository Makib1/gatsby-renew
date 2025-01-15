import React, { useState } from "react"
import { Player } from "video-react"
import playbtn from '../static/images/playbtn2.svg'

const VideoComponent = ({ video,poster }) => {
  const [videoVisible, setVideoVisible] = useState(false)
  
  let posterUrl = poster.split('/')[1] === 'static'?poster:`${process.env.STRAPI_URL}${poster}`;
  console.log(posterUrl,'posterUrl')
  const handleVideoVisible = () => {
    setVideoVisible(true)
  }
  return (
    <div className="video-container">
      {!videoVisible && (
        <div className="video-thumbnail" onClick={handleVideoVisible}>
          <img src={posterUrl} alt="Video Thumbnail" />
          <div className="play-button-overlay">
            <img src={playbtn} alt="playbtn"/>
          </div>
        </div>
      )}
      {videoVisible && (
        <div className="video-playerr">
          <Player playsInline="true" preload="auto" src={video} muted autoPlay />
        </div>
      )}
    </div>
  )
}

export default VideoComponent
