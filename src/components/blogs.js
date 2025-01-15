import React from "react"
import "../static/style/componentStyle/blogs.scss"
import BlogCard from "./blog-card"

const Blogs = ({ blogData, resourceUrl, breadcrumbs }) => {
  // console.log(blogData, "viewallblogs")

return (
  <div className="blog-content">
    <div className="page-wrapper">
      <div className="blog-inner">
          {blogData && blogData?.map((val, idx) => (
            <BlogCard val={val} key={idx} breadcrumbs={breadcrumbs} resourceUrl={resourceUrl}/>
          ))}
        </div>
        <div className="blog-inner-mobile">
          {blogData && blogData?.map((val, idx) => (
            <BlogCard val={val} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
