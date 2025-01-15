import React, { useState, useEffect } from "react";
import "../static/style/pageStyle/blog-page.scss";
import BlackBtn from "../components/black-btn";
import Blogs from "../components/blogs";
import BannerHeader from "../components/bannerHeader";
import { useQuery, gql } from "@apollo/client";
import { FetchedResourcePageData, YouTubeVideo } from "../services/helperFunctions";
import insta from "../static/images/blog-page/insta.svg";
import linkdin from "../static/images/blog-page/linkdin.svg";
import Loader from '../components/loader';
import "../static/style/globalCss/common.scss";
import { Link } from "gatsby";
import Videos from "./Videos";

const ResourceCmp = (props) => {
  const videoData=YouTubeVideo().video;
  // console.log(data, 'blogDataa');
  const itemsPerPage = 4;
  const totalPages = Math.ceil(videoData?.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [showAllBlogs, setShowAllBlogs] = useState(false); // State to track if "View All Blogs" is clicked

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  // Use all blogs if showAllBlogs is true, otherwise, show paginated blogs
  const endIndex = showAllBlogs ? videoData?.length : startIndex + itemsPerPage;

  const currentPageData = videoData?.slice(startIndex, endIndex);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  // console.log(props, 'viewallblogs');

  return (
    <div className="blog-pagev2">
      <div className="page-content">
        {/* Banner Start */}
        <div className="blog-banner">
          <div className="page-wrapper">
            <div className="section-inner">
              <div className="left-title">
                <BannerHeader headingType={"bannerTitle"} header={"Videos"} />
              </div>
              <div className="right-details">
                <h2 className="heading-md">
                  Articles on data, industry and trends for you to learn,
                  empower, and grow
                </h2>
                <div className="see-all-position">
                  <button className="right-arrow-btn underline-remove-effect">
                    <p>Follow us on</p>
                    <ul className="follow-icons">
                      <li>
                       <Link to="https://www.linkedin.com/company/lumiqai/" target="_blank"  name="insta"> <img src={linkdin} alt="LinkedIn" /></Link>
                      </li>
                      <li>
                      <Link to="https://www.instagram.com/lifeatlumiq/" target="_blank" name="insta"> <img src={insta} alt="Instagram" /></Link>
                      </li>
                    </ul>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
       <Videos videoData={currentPageData}/>
        {/* <Blogs  blogData={blog} /> */}
        <div className="see-all-blogs">
          <div className="page-wrapper">
            <div className="see-all-blogs-button">
              <button
                className="pagination-prev"
                onClick={handlePrevClick}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <div className="navigation-count">
                {pageNumbers.map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageClick(pageNumber)}
                    disabled={currentPage === pageNumber}
                    className={currentPage === pageNumber ? "pagination_selected" : ""}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
              <button
                className="pagination-next"
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
            {!showAllBlogs ? (
              <div className="see-all-blog-button-mobile">
                <BlackBtn text={`View More`} onClick={() => setShowAllBlogs(true)} />
              </div>
            ) : (
              <div className="see-all-blog-button-mobile see-all-blog-button-mobile-down-arrow ">
                <BlackBtn text={"View Less"} onClick={() => setShowAllBlogs(false)} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCmp;
