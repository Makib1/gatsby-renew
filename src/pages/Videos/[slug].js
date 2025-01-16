import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { YouTubeVideo } from "../../services/helperFunctions";
import "../../static/style/pageStyle/youtube-video.scss"
import "../../static/style/globalCss/platform-page.scss"
import { Link } from "gatsby";
import BlackBtnrTl from "../../components/black-btn-rTl";

const Post = props => {
  let videoData = YouTubeVideo().video;
  const [runningVideo, setRunningVideo] = useState(videoData[0]);
  const [listVideo, setListVideo] = useState(videoData);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const lastPart = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    const filteredVideo = videoData.find(vid => vid.slug === lastPart);
    setRunningVideo(filteredVideo);

    const updatedVideoData = videoData.filter(video => video.slug !== lastPart);
    setListVideo(updatedVideoData.slice(0, 3));
  }, []);

  const handleVideoClick = (slug, heading) => {

    // Ensure `YouTubeVideo().video` is correctly retrieved and working
    let videoData = YouTubeVideo().video;

    // Find the selected video by its slug
    const selectedVideo = videoData.find(video => video.slug === slug);

    // Filter out the selected video if necessary (depending on your logic)
    const updatedVideoData = videoData.filter(video => video.slug !== slug);

    // Update the list of videos (if necessary)
    setListVideo(updatedVideoData);

    // Set the running video to the selected one
    setRunningVideo(selectedVideo);

    // Update URL without reloading the page
    window.history.pushState({}, "", `/Videos/${slug}`);

    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };



  useEffect(() => {
    let videoData = YouTubeVideo().video;
    const updatedVideoData = videoData.filter(video => video.slug != runningVideo.slug && video.category === runningVideo.category);
    setListVideo(updatedVideoData.slice(0, 3))
  }, [runningVideo]);

  return (
    <>
      <Helmet htmlAttributes={{
        lang: 'en'
      }}>
      </Helmet>
      <div className="youtube-video platform-v3">
        <div className="page-content">
          <div className="main-container">
            <div className="page-wrapper">
              <div className="navigation">
                <Link href="/resources">Resources  </Link> 
                {' > '}
                <Link to="/resources" state={"videos"} name={"lumiq.ai"}>
                Videos</Link>
              </div>
            </div>
            <div className="page-wrapper whole-content">
              <div className="left-video">
                <div className="iframe-container">
                  <iframe
                    src={`${runningVideo.src}${runningVideo.src.includes('?') ? '&' : '?'}autoplay=1&mute=0&rel=0`}
                    title={runningVideo.title}
                    frameborder={runningVideo.frameborder}
                    allow={runningVideo.allow}
                    allowfullscreen={runningVideo.allowfullscreen}
                  ></iframe>
                </div>
                <h3 className="heading">{runningVideo?.heading}</h3>
                <p className="content">{runningVideo.fullDescription}</p>
                <div className="btn-area">
                  <a href="/resources">
                    <BlackBtnrTl
                      text={"Go Back"}
                    />
                  </a>
                </div>
              </div>
              <div className="right-list">
                {listVideo.map((data, index) => (
                  <div style={{ position: "relative" }} key={data.slug}>
                    <div className="iframe-container">
                      <iframe
                        src={data.src}
                        title={data.title}
                        frameborder={data.frameborder}
                        allow={data.allow}
                        allowfullscreen={data.allowfullscreen}
                      ></iframe>
                    </div>
                    <p className="title">{data.heading}</p>
                    <p className="description"> {data.description}</p>
                    <div className="video-cover" onClick={() => handleVideoClick(data.slug, data.heading)}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
