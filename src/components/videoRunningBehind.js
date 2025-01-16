import React, { useRef, useState } from "react"
import { ControlBar, Player } from "video-react"

const VideoRunningBehind = ({ video, poster }) => {
  const [videoVisible, setVideoVisible] = useState(true)

  let posterUrl =
    poster.split("/")[1] === "static"
      ? poster
      : `${process.env.STRAPI_URL}${poster}`
  console.log(posterUrl, "posterUrl")
  const playerRef = useRef(null)
  const handleVideoEnd = () => {
    // Restart the video when it ends
    playerRef.current.seek(0)
    playerRef.current.play()
  }
  return (
    <div className="video-container">
      {/* {!videoVisible && (
        <div className="video-thumbnail" onClick={handleVideoVisible}>
          <img src={posterUrl} alt="Video Thumbnail" />
        </div>
      )} */}
      {videoVisible && (
        <div className="video-playerr">
          <Player
            playsInline="true"
            preload="auto"
            src={video}
            muted
            autoPlay
            ref={playerRef}
            onEnded={(e, player) => handleVideoEnd(e, player)}
          >
            <ControlBar disableDefaultControls={true} />
          </Player>
        </div>
      )}
    </div>
  )
}

export default VideoRunningBehind
