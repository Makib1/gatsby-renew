import React, { useEffect, useState, useRef } from "react"
import { useQuery, gql } from "@apollo/client"
import "../../static/style/pageStyle/dynamicBlogs.scss"
import Parser from "html-react-parser"
import { Link } from "gatsby"
import { FetchedResourcePageData } from "../../services/helperFunctions"
import Underline from "../../components/underline"
import BlackBtn from "../../components/black-btn"

const Post = props => {
    console.log(props,"asdfsadfdsa");
  const { tabs } = FetchedResourcePageData();
  const [email, setEmail] = useState('');
  const slugUrl = props?.location.pathname?.split("/")
  let slug = props.slug;
  const BLOG_DETAILS = gql`
    query blog($slug: String!) {
      blogDetails(filters: { slug: { eq: $slug } }) {
        data {
          attributes {
            slug
            blogs{
              data{
                attributes{
                  header
                  blogType
                  slug
                  date
                }
              }
            }
            insertBlog {
              __typename
              ... on ComponentBlogGrpsBlogHeader {
                order
                heading
                bannerImage{
                  imageUrl
                }
                paragraph {
                  paragraphFontSize
                  paragraphType
                  paragraph
                  listType
                  listContentHeaderType
                  listContentHeader
                  listContent
                  imageUrl
                }
              }
              ... on ComponentBlogGrpsParagraphWithHeading {
                order
                paragraphType
                paragraphFontSize
                heading
                paragraph {
                  paragraphFontSize
                  paragraphType
                  paragraph
                  listType
                  listContentHeaderType
                  listContentHeader
                  listContent
                  imageUrl
                }
              }
              ... on ComponentBlogGrpsParagraphWithCount {
                order
                count
                heading
                paragraph {
                  paragraphFontSize
                  paragraphType
                  paragraph
                  listType
                  listContentHeaderType
                  listContentHeader
                  listContent
                  imageUrl
                }
              }
            }
          }
        }
      }
    }
  `
  console.log(slug)
  const { data } = useQuery(BLOG_DETAILS, {
    variables: { slug },
  })
  let date = data?.blogDetails?.data[0]?.attributes?.blogs?.data[0]?.attributes?.date;
  let header = data?.blogDetails?.data[0]?.attributes?.blogs?.data[0]?.attributes?.header;
  // const blogHeader = data?.blogDetails?.data[0]?.attributes?.insertBlog[0];
  let blogHeader, blogContent

  if (data) {
    ;[
      blogHeader,
      ...blogContent
    ] = data?.blogDetails?.data[0]?.attributes?.insertBlog
  }

  const compareOrders = (a, b) => {
    const orderA = parseFloat(a.order);
    const orderB = parseFloat(b.order);
  
    if (orderA < orderB) {
      return -1;
    }
    if (orderA > orderB) {
      return 1;
    }
    return 0;
  };

  
  // Sort the blogContent array using the custom comparison function
  if(data){
    blogContent.sort(compareOrders);
  }

  let breadcrumbsVal =
    data?.blogDetails?.data[0]?.attributes?.blogs?.data[0]?.attributes
      ?.blogType
  let matchedItemUrl = tabs.find(item => item.label === breadcrumbsVal)
  const breadcrumbsUrl = matchedItemUrl ? matchedItemUrl.id : null


  const blogDataT = data?.blogContents?.data[0]?.attributes?.blogContent
  let sortedData = 0
  if (blogDataT) {
    sortedData = [...blogDataT]
  }
  let blogData
  if (sortedData) {
    blogData = sortedData?.sort(
      (a, b) => parseFloat(a?.order) - parseFloat(b?.order)
    )
  }
  const handleSubscribe = () => {
    setEmail(''); 
  };
  // const 

  return (
    <>
      <div className="dynamic-blog">
        <div className="page-content">
          <div className="page-wrapper">
            <div className="blog-page-content">
              <div className="page-nav-item-data">
                {/* <div className="section-01">
                  <div className="page-wrapper">
                    <div className="dynamic-blog-banner">
                      <Link href="/resources" name="resource">
                        <span className="span-bold">Resource</span>
                      </Link>
                      <Link to={`/resources/${breadcrumbsUrl}`} name="resource">
                        &nbsp; / &nbsp;
                        <span className="span-bold">{`${breadcrumbsVal}`}</span>
                      </Link>
                      <span className="blog-date">{date}</span>
                    </div>
                    <div className="dynamic-blog-header" >
                      
                    </div>
                  </div>
                </div> */}
                <div className="section-02">
                  <div className="page-wrapper">
                    <div className="blog-content">
                      <div className="dynamic-blog-sub-header" id="paragraph-0">
                        <h1 className="heading-md">
                          {typeof blogHeader?.heading === "string"
                            ? Parser(header)
                            : null}
                        </h1>
                        {blogHeader?.bannerImage?.imageUrl&& <img src={`${process.env.STRAPI_URL +blogHeader?.bannerImage?.imageUrl}`} alt="header-image"/>}
                       
                        {blogHeader?.paragraph?.map((val, idx) =>
                          val?.paragraphFontSize === "paragraph_36" ? (
                            <h2 className={`heading-sm ${val?.paragraphType === 'LightBlack' ? "LightBlack": "LightGrey"} ${val?.paragraphFontSize === "paragraph_36"?"paragraph_36":"paragraph_24"} `}>
                                {typeof val?.paragraph === "string"
                                  ? Parser(val?.paragraph)
                                  : null}</h2>
                          ) :
                           (
                            <p className="sub-header">
                              <span className="paragraph-span">
                                {typeof val?.paragraph === "string"
                                  ? Parser(val?.paragraph)
                                  : null}
                              </span>
                              {val?.imageUrl && <img src={`${process.env.STRAPI_URL +val?.imageUrl}`} />}
                            </p>
                          )
                        )}
                      </div>
                      {blogContent?.map((val, idx) =>
                        val?.count ? (
                          <p id = {`paragraph-${idx+1}`} className="paragraph-header-count">
                            <span className="paragraph-title">
                              <span className="paragraph-count">
                                {val?.count} -
                              </span>
                              <span className="paragraph-title-des">
                                {typeof val?.heading === "string"
                                  ? Parser(val?.heading)
                                  : null}
                              </span>
                            </span>
                            {val?.paragraph?.map((spanVal, key) =>
                              spanVal?.paragraphFontSize === "paragraph_36" ? (
                                <>
                                  <h2 className={`heading-sm ${spanVal?.paragraphType === 'LightBlack' ? "LightBlack": "LightGrey"} `}>{spanVal?.paragraph}</h2>
                                  {spanVal?.imageUrl && <img src={`${process.env.STRAPI_URL +spanVal?.imageUrl}`} alt="header-image"/>}
                                  
                                </>
                              ) : spanVal?.paragraphFontSize ===
                                "paragraph_24" ? (
                                <>
                                  <span className={`paragraph-span ${spanVal?.paragraphType === "LightBlack" ? "LightBlack":spanVal?.paragraphType === "LightBold" ?"LightBold":"LightBlackBold"}`}>
                                    {typeof spanVal?.paragraph === "string"
                                      ? Parser(spanVal?.paragraph)
                                      : null}
                                  </span>
                                  {spanVal?.listType !== "None" && spanVal?.listType === "Disc" ? (
                                    <>
                                      <span className={`paragraph-span ${spanVal?.listContentHeaderType === "LightBlack" ? "LightBlack":spanVal?.listContentHeaderType === "LightBold" ?"LightBold":"LightBlackBold"}`}>
                                        {typeof spanVal?.listContentHeader === "string"
                                      ? Parser(spanVal?.listContentHeader)
                                      : null}
                                      </span>
                                      <ul>
                                        {spanVal?.listContent
                                          .split("\n")
                                          .map((item, index) => (
                                            <li key={index}>
                                              {typeof item === "string"
                                              ? Parser(item.trim())
                                              : null}
                                            </li>
                                          ))}
                                      </ul>
                                    </>
                                  ) : spanVal?.listType !== "None" && (
                                    <>
                                      <span className={`paragraph-span ${spanVal?.listContentHeaderType === "LightBlack" ? "LightBlack":spanVal?.listContentHeaderType === "LightBold" ?"LightBold":"LightBlackBold"}`}>
                                        {typeof spanVal?.listContentHeader === "string"
                                      ? Parser(spanVal?.listContentHeader)
                                      : null}
                                      </span>
                                      <ol>
                                        {spanVal?.listContent
                                          .split("\n")
                                          .map((item, index) => (
                                            <li key={index}>{typeof item === "string"
                                            ? Parser(item.trim())
                                            : null}</li>
                                          ))}
                                      </ol>
                                    </>
                                  )}
                                  {spanVal?.imageUrl && <img src={`${process.env.STRAPI_URL +spanVal?.imageUrl}`} alt="header-image"/>}
                                </>
                              ) : (
                                <>
                                  <span className="paragraph-span">
                                    {typeof spanVal?.paragraph === "string"
                                      ? Parser(spanVal?.paragraph)
                                      : null}
                                  </span>
                                  {spanVal?.imageUrl && <img src={`${process.env.STRAPI_URL +spanVal?.imageUrl}`} alt="header-image"/>}
                                </>
                              )
                            )}
                          </p>
                        ) : (
                          <p id = {`paragraph-${idx+1}`} className="paragraph-header-without-count">
                            <>
                              {val?.paragraph?.map((spanVal, key) =>
                                spanVal?.paragraphFontSize === "paragraph_36" ? (
                                  <>
                                    <h2 className={`heading-sm ${spanVal?.paragraphType === 'LightBlack' ? "LightBlack": "LightGrey"} `}>{spanVal?.paragraph}</h2>
                                    {spanVal?.listType !== "None" && spanVal?.listType === "Disc" ? (
                                    <>
                                      <span className={`paragraph-span ${spanVal?.listContentHeaderType === "LightBlack" ? "LightBlack":spanVal?.listContentHeaderType === "LightBold" ?"LightBold":"LightBlackBold"}`}>
                                        {typeof spanVal?.listContentHeader === "string"
                                      ? Parser(spanVal?.listContentHeader)
                                      : null}
                                      </span>
                                      <ul>
                                        {spanVal?.listContent
                                          .split("\n")
                                          .map((item, index) => (
                                            <li key={index}>
                                              {typeof item === "string"
                                              ? Parser(item.trim())
                                              : null}
                                            </li>
                                          ))}
                                      </ul>
                                    </>
                                  ) : spanVal?.listType !== "None" && (
                                    <>
                                      <span className={`paragraph-span ${spanVal?.listContentHeaderType === "LightBlack" ? "LightBlack":spanVal?.listContentHeaderType === "LightBold" ?"LightBold":"LightBlackBold"}`}>
                                        {typeof spanVal?.listContentHeader === "string"
                                      ? Parser(spanVal?.listContentHeader)
                                      : null}
                                      </span>
                                      <ol>
                                        {spanVal?.listContent
                                          .split("\n")
                                          .map((item, index) => (
                                            <li key={index}>{typeof item === "string"
                                            ? Parser(item.trim())
                                            : null}</li>
                                          ))}
                                      </ol>
                                    </>
                                  )}
                                    {spanVal?.imageUrl && <img src={`${process.env.STRAPI_URL +spanVal?.imageUrl}`} alt="blog-description"/>}
                                  </>
                                ) : spanVal?.paragraphFontSize ==="paragraph_24" ? (
                                  <>
                                    <span className={`paragraph-span ${spanVal?.paragraphType === "LightBlack" ? "LightBlack":spanVal?.paragraphType === "LightBold" ?"LightBold":"LightBlackBold"}`}>
                                      {typeof spanVal?.paragraph === "string"
                                      ? Parser(spanVal?.paragraph)
                                      : null}
                                    </span>
                                    {spanVal?.listType !== "None" && spanVal?.listType === "Disc" ? (
                                    <>
                                      <span className={`paragraph-span ${spanVal?.listContentHeaderType === "LightBlack" ? "LightBlack":spanVal?.listContentHeaderType === "LightBold" ?"LightBold":"LightBlackBold"}`}>
                                        {typeof spanVal?.listContentHeader === "string"
                                      ? Parser(spanVal?.listContentHeader)
                                      : null}
                                      </span>
                                      <ul>
                                        {spanVal?.listContent
                                          .split("\n")
                                          .map((item, index) => (
                                            <li key={index}>
                                              {typeof item === "string"
                                              ? Parser(item.trim())
                                              : null}
                                            </li>
                                          ))}
                                      </ul>
                                    </>
                                  ) : spanVal?.listType !== "None" && (
                                    <>
                                      <span className={`paragraph-span ${spanVal?.listContentHeaderType === "LightBlack" ? "LightBlack":spanVal?.listContentHeaderType === "LightBold" ?"LightBold":"LightBlackBold"}`}>
                                        {typeof spanVal?.listContentHeader === "string"
                                      ? Parser(spanVal?.listContentHeader)
                                      : null}
                                      </span>
                                      <ol>
                                        {spanVal?.listContent
                                          .split("\n")
                                          .map((item, index) => (
                                            <li key={index}>{typeof item === "string"
                                            ? Parser(item.trim())
                                            : null}</li>
                                          ))}
                                      </ol>
                                    </>
                                  )}
                                    {spanVal?.imageUrl && <img src={`${process.env.STRAPI_URL +spanVal?.imageUrl}`} alt="blog-description"/>}
                                  </>
                                ) : (
                                  <>
                                    <span className={`paragraph-span ${spanVal?.paragraphType === "LightBlack" ? "LightBlack":spanVal?.paragraphType === "LightBold" ?"LightBold":"LightBlackBold"}`}>
                                      {typeof spanVal?.paragraph === "string"
                                      ? Parser(spanVal?.paragraph)
                                      : null}
                                    </span>
                                    {spanVal?.imageUrl && <img src={`${process.env.STRAPI_URL +spanVal?.imageUrl}`} alt="blog-description"/>}
                                  </>
                                )
                              )}
                            </>
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
                {/* <div className="section-03">
                  <div className="page-wrapper">
                    <div className="blog-btn">
                      <h2 className="heading-md">Subscribe to our blogs</h2>
                      <input
                        className="white-btn"
                        name="name"
                        placeholder="Business e-mail"
                        value={email} // Bind the input value to the 'email' state
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <BlackBtn text={"SUBSCRIBE"} onClick={handleSubscribe}/>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <Underline />
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
