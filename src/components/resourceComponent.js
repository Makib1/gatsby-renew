import React, { useState, useEffect } from "react";
import "../static/style/pageStyle/blog-page.scss";
import BlackBtn from "../components/black-btn";
import Blogs from "../components/blogs";
import BannerHeader from "../components/bannerHeader";
import { useQuery, gql } from "@apollo/client";
import { FetchedResourcePageData } from "../services/helperFunctions";
import insta from "../static/images/blog-page/insta.svg";
import linkdin from "../static/images/blog-page/linkdin.svg";
import Loader from '../components/loader';
import "../static/style/globalCss/common.scss";
import { Link } from "gatsby";

const ResourceCmp = (props) => {
  const BLOG_QUERY = gql`
    query blog($page: Int, $pageSize: Int) {
      blogs(pagination: { page: $page, pageSize: $pageSize }
        sort: "id:desc") {
        data {
          attributes {
            date
            header
            imageUrl
            description
            slug
            blogType
          }
        }
        meta {
          pagination {
            pageSize
            page
            pageCount
            total
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(BLOG_QUERY, {
    variables: { page: 1, pageSize: 100 }, // Adjust page and pageSize as needed
  });
 
  let blog = data?.blogs?.data;
  let filteredData;
  if(props.label === 'media-releases'){
     filteredData = blog?.filter((blogItem) => blogItem.attributes.blogType === "media-releases");
  }
  else if(props.label === 'Case-Studies'){
    filteredData = blog?.filter((blogItem) => blogItem.attributes.blogType === "Case-Studies");
 }
  else if(props.label === 'latest'){
      filteredData = blog;
  }else{
    filteredData = blog?.filter((blogItem) =>blogItem.attributes.blogType !== "policy"&& blogItem.attributes.blogType !== "media-releases" && blogItem.attributes.blogType !== "Case-Studies");
  }

  let sortedData;
  if(filteredData){
    const dataCopy = [...filteredData];
    sortedData = dataCopy?.sort((a, b) => {
      const dateA = new Date(a.attributes.date);
      const dateB = new Date(b.attributes.date);
      return dateB - dateA;
    });
  }

  const { options, style, tabs } = FetchedResourcePageData();
  const itemsPerPage = 4;
  const totalPages = Math.ceil(sortedData?.length / itemsPerPage);

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
  const endIndex = showAllBlogs ? sortedData?.length : startIndex + itemsPerPage;
  const currentPageData = sortedData?.slice(startIndex, endIndex);

  // Function to get the range of pages to display (current page + two before and after)
  const getPageNumbers = () => {
    const pageNumbers = [];
    const range = 2; // Number of pages before and after

    let startPage = Math.max(1, currentPage - range);
    let endPage = Math.min(totalPages, currentPage + range);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="blog-pagev2">
      <div className="page-content">
        <div className="blog-banner">
          <div className="page-wrapper">
            <div className="section-inner">
              <div className="left-title">
                <BannerHeader headingType={"bannerTitle"} header={props?.header} />
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
                        <Link to="https://www.linkedin.com/company/lumiqai/" target="_blank" name="insta">
                          <img src={linkdin} alt="LinkedIn" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.instagram.com/lifeatlumiq/" target="_blank" name="insta">
                          <img src={insta} alt="Instagram" />
                        </Link>
                      </li>
                    </ul>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {!loading ? <Blogs blogData={currentPageData} breadcrumbs={props} /> : <Loader />}

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
                {getPageNumbers().map((pageNumber) => (
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
              <div className="see-all-blog-button-mobile see-all-blog-button-mobile-down-arrow">
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
