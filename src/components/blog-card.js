import { Link } from "gatsby"
import React from "react"


const truncateText = (text, maxLength) => {
  if (text?.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const BlogCard = (props) => {
  const truncatedTitle = truncateText(props?.val?.attributes?.header, 75); 
  const truncateddescription = truncateText(props?.val?.attributes?.description, 80); 

  return (
    <>
      <a className="blogs" href={`/resources/detailedBlog/${props?.val?.attributes?.slug}`} state={{ data: props }} target="_blank" name="blog" >
        <div className="blog-header">
          <p>{props?.val?.attributes?.date}</p>
          <div className="blog-img">
            <img className="blog-image" src={`${process.env.STRAPI_URL +props?.val?.attributes?.imageUrl}`} alt="blog-image"/>
            
          </div>
          <span className="blog-title">{truncatedTitle}</span>
          {<p className="description">{truncateddescription}</p>}
        </div>
        <div className="blog-footer">
          <div className="read-more">
            {props?.val?.attributes?.date && (
                <p>Read More</p>
            )}
          </div>
        </div>
      </a>
    </>
  )
}

export default BlogCard
