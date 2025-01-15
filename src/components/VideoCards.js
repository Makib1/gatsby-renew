import React, { useState } from "react"
import "../static/style/componentStyle/VideoCards.scss"
import cross from "../static/images/white-cross.png"


const truncateText = (text, maxLength) => {
  if (text?.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const VideoCards = ({ data, idx }) => {
  // const truncatedTitle = truncateText(props?.val?.attributes?.header, 75); 
  // const truncateddescription = truncateText(props?.val?.attributes?.description, 50); 
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    console.log("hello")
    setShowModal(!showModal);
  };

  return (
    <>
      <a className="video-link-a" href={`/Videos/${data.slug}`} state={{ data: "props" }} target="_blank" name="blog" >
        <div className="video-cards" key={idx}>
          <div className="iframe-container">
            <iframe
              src={data.src}
              title={data.title}
              frameborder={data.frameborder}
              allow={data.allow}
              allowfullscreen={data.allowfullscreen}
            ></iframe>
          </div>
          <p className="tags">{data.tags}</p>
          <p className="title">{data.heading}</p>
          <p className="description">{data.description}</p>
          <p className="read-more">Read More</p>
          <div className="video-cover" onClick={toggleModal}></div>
        </div>
      </a>
    </>
  )
}

export default VideoCards;
