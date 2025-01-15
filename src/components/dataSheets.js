import React from "react"
import "../static/style/componentStyle/blogs.scss"
import BlogCard from "./blog-card"
import DatasheetCard from "./datasheetsCards"


const DataSheets = ({ sheetData, resourceUrl }) => {
  // console.log(blogData, "viewallblogs")

return (
  <div className="blog-content">
    <div className="page-wrapper">
      <div className="blog-inner">
          {sheetData && sheetData?.map((val, idx) => (
            <DatasheetCard val={val} key={idx} />
          ))}
        </div>
        <div className="blog-inner-mobile">
          {sheetData && sheetData?.map((val, idx) => (
            <DatasheetCard val={val} key={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DataSheets
