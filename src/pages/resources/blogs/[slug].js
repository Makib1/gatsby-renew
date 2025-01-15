import React, { useEffect, useState, useRef } from "react"
import { useQuery, gql } from "@apollo/client"
import "../../../static/style/pageStyle/dynamicBlogs.scss"
import Parser from "html-react-parser"
import { Link } from "gatsby"
import { FetchedResourcePageData } from "../../../services/helperFunctions"
import Underline from "../../../components/underline"
import BlackBtn from "../../../components/black-btn"
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Post = props => {
  const { tabs } = FetchedResourcePageData();
  const [email, setEmail] = useState('');
  const slugUrl = props?.location.pathname?.split("/")
  let slug = slugUrl[3]
  // let slug = "banks-innovating-cx-insights-and-next-best-action"
  // const videoId = "UBrTZHutjAc";
  const BLOG_DETAILS = gql`
  query blog($slug: String!) {
    blogContents(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          blogs{
            data{
              attributes{
                date
                blogType
                slug
              }
            }
          }
          blogContent{
            __typename
             ... on ComponentBlogGrpsBlogHeading{
              heading
              image{
                imageUrl
                image{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
              paragraph{
                paragraphFontSize
                paragraphType
                paragraph
                listType
                listContentHeader
                listContent
                listContentBase
                imageUrl
                image{
                  data{
                    attributes{
                      url
                    }
                  }
                }
                imageBaseContent
              }
            }
            ... on ComponentBlogGrpsInsertParagraph{
              count
              heading
              headingFontSize
              headerType
              paragraph{
                paragraphFontSize
                paragraphType
                paragraph
                listType
                listContentHeader
                listContent
                listContentBase
                imageUrl
                image{
                  data{
                    attributes{
                      url
                    }
                  }
                }
                imageBaseContent
                code
              }
            }
          }
        }
      }
    }
}`
  const { data } = useQuery(BLOG_DETAILS, {
    variables: { slug },
  })
  console.log(data,'dateaa');
  let date = data?.blogContents?.data[0]?.attributes?.blogs?.data[0]?.attributes?.date;
  let header = data?.blogContents?.data[0]?.attributes?.blogs?.data[0]?.attributes?.header;
  console.log(date,'date')
  let blogHeader, blogContent

  if (data) {[blogHeader,...blogContent] = data?.blogContents?.data[0]?.attributes?.blogContent}
  console.log(blogHeader,'date');
  console.log(blogContent,'datedate');
  let breadcrumbsVal =  data?.blogContents?.data[0]?.attributes?.blogs?.data[0]?.attributes ?.blogType
  let matchedItemUrl = tabs.find(item => item.label === breadcrumbsVal)
  const breadcrumbsUrl = matchedItemUrl ? matchedItemUrl.id : null
  console.log(breadcrumbsUrl,"bread");
  const handleSubscribe = () => {
    setEmail(''); 
  };

  const newLine = (paragraph) =>{
    if(!paragraph){
      return null;
    }
    const textWithSingleLineBreaks = paragraph.replace(/\/n/g, "<br/>");
    const textWithDoubleLineBreaks = textWithSingleLineBreaks.replace(/\/n\/n/g, "<br/><br/>");
    const textWithLinks = textWithDoubleLineBreaks.replace(/\^(.*?)@([^@]+)@\^/g, '<a href="$2" target="_blank">$1</a>');
    const textWithStrongTags = textWithLinks.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
    return textWithStrongTags;
  }

  return (
    <>
      <div className="dynamic-blog">
        <div className="page-content">
          <div className="page-wrapper">
            <div className="blog-page-content">
              <div className="page-nav-item-data">
                <div className="section-01">
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
                    <div className="dynamic-blog-header"></div>
                  </div>
                </div>
                <div className="section-02">
                  <div className="page-wrapper">
                    <div className="blog-content">
                      <div className="dynamic-blog-sub-header" id="paragraph-0">
                        <h1 className="heading-md">
                          {typeof blogHeader?.heading === "string"? Parser(blogHeader?.heading) : null}
                        </h1>
                        {blogHeader?.image[0]?.image?.data?.attributes?.url&& <img src={`${process.env.STRAPI_URL +blogHeader?.image[0]?.image?.data?.attributes?.url}`} alt="blog-description"/>}
                        {blogHeader?.paragraph?.map((val, idx) =>
                          val?.paragraphFontSize === "paragraph_36" ? (
                            <>
                              <h2 className={`heading-sm ${val?.paragraphType} ${val?.paragraphFontSize} `} key={idx}>
                              {typeof val?.paragraph === "string" ? Parser(newLine(val?.paragraph)) : null}</h2>
                              {val?.image?.data?.attributes?.url && <img src={`${process.env.STRAPI_URL +val?.image?.data?.attributes?.url}`} alt="blog-description"/>}
                              {val?.imageBaseContentType && <span className={`paragraph-span ${val?.imageBaseContentType} ${val?.imageBaseContentFontSize}` } >{ Parser(newLine(val?.imageBaseContent))}</span>}
                            </>
                          ) :
                           (
                            <p className="sub-header" key={idx}>
                              <span className={`paragraph-span ${val?.paragraphFontSize}`}>
                                {typeof val?.paragraph === "string" ? Parser(newLine(val?.paragraph)) : null}
                              </span>
                              {val?.image?.data?.attributes?.url && <img src={`${process.env.STRAPI_URL +val?.image?.data?.attributes?.url}`} alt="blog-description"/>}
                              {val?.imageBaseContent && <span className={`paragraph-span ${val?.imageBaseContentType} ${val?.imageBaseContentFontSize}` } >{ Parser(newLine(val?.imageBaseContent))}</span>}
                            </p>
                          )
                        )}
                      </div>
                      {blogContent?.map((val, idx) =>
                          <p id = {`paragraph-${idx+1}`} className="paragraph-header-count" key={idx}>
                              <span className="paragraph-title">
                                {val?.count && 
                                  <span className="paragraph-count">
                                    {`${val?.count} - ` }
                                  </span>
                                }
                                <span className={`paragraph-title-des ${!val?.count&&"paddingLeft0px"} ${val?.headerType} ${val?.headingFontSize}  `}>
                                  {typeof val?.heading === "string"? Parser(val?.heading) : null}
                                </span>
                              </span>
                            {val?.paragraph?.map((spanVal, key) =>
                              spanVal?.paragraphFontSize === "paragraph_36" ? (
                                <>
                                  <h2 className={`heading-sm ${spanVal?.paragraphType} ${spanVal?.paragraphFontSize} `} key={key}> {typeof spanVal?.paragraph === "string"?  Parser(newLine(spanVal?.paragraph)):null}</h2>
                                  {spanVal?.image?.data?.attributes?.url && <img src={`${process.env.STRAPI_URL +spanVal?.image?.data?.attributes?.url}`} alt="blog-description"/>}
                                  {val?.image?.data?.attributes?.url && <span className={`paragraph-span ${val?.imageBaseContentType} ${val?.imageBaseContentFontSize}` } >{ Parser(newLine(val?.imageBaseContent))}</span>}
                                </>
                              ) : spanVal?.paragraphFontSize ===  "paragraph_24" ? (
                                <>
                                  <span className={`paragraph-span ${spanVal?.paragraphType}  ${spanVal?.paragraphFontSize}`} key={key}>
                                    {typeof spanVal?.paragraph === "string" ? Parser(newLine(spanVal?.paragraph)) : null}
                                  </span>

                                  {/* {spanVal?.code && spanVal?.code?.includes("```") ? (
                                  <div className="code-container">
                                    {spanVal?.code?.split("\n")?.map((line, index) => (
                                      <div key={index} className="code-line">
                                        <span className="line-number">{index + 1}</span>
                                        <pre style={{ whiteSpace: "pre-wrap" }}>
                                            {line.replace(/```/g, '')}
                                          </pre>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="text-container">
                                    {spanVal?.code?.split("\n")?.map((line, index) => (
                                      <div key={index} className="code-line">
                                        <span className="line-number">{index + 1}</span>
                                        <pre style={{ whiteSpace: "pre-wrap" }}>{line}</pre>
                                      </div>
                                    ))}
                                  </div>
                                )} */}
                                {spanVal?.code&&
                                  <span className={`paragraph-span ${spanVal?.paragraphType}  ${spanVal?.paragraphFontSize} ${spanVal?.code&&"code"}`}>
                                  <pre style={{ whiteSpace: "pre-wrap" }}>{typeof spanVal?.code === "string" ? Parser((spanVal?.code)) : null}</pre>
                                  <pre>{spanVal?.code}</pre>
                                </span>}

                                                                    
                                  {spanVal?.listType !== "None" && spanVal?.listType === "Disc" ? (
                                    <>
                                      <span className={`paragraph-span ${spanVal?.listContentHeaderType}`}>
                                        {typeof spanVal?.listContentHeader === "string"? Parser(newLine(spanVal?.listContentHeader)): null}
                                      </span>
                                      <ul>
                                        {spanVal?.listContent
                                          .split("\n")
                                          .map((item, index) => (
                                            <li key={index}>
                                              {typeof item === "string" ? Parser(newLine(item)) : null}
                                            </li>
                                          ))}
                                      </ul>
                                      <span className={`paragraph-span ${spanVal?.listContentBaseFontSize} ${spanVal?.listContentBaseType} `}>
                                        {typeof spanVal?.listContentBase === "string"? Parser(newLine(spanVal?.listContentBase)): null}
                                      </span>
                                    </>
                                  ) : spanVal?.listType !== "None" && (
                                    <>
                                      <span className={`paragraph-span ${spanVal?.listContentHeaderType}`}>
                                        {typeof spanVal?.listContentHeader === "string"? Parser(newLine(spanVal?.listContentHeader)) : null}
                                      </span>
                                      <ol>
                                        {spanVal?.listContent
                                          .split("\n")
                                          .map((item, index) => (
                                            <li key={index}>{typeof item === "string"
                                            ? Parser(newLine(item))
                                            : null}</li>
                                          ))}
                                      </ol>
                                      <span className={`paragraph-span ${spanVal?.listContentBaseFontSize} ${spanVal?.listContentBaseType} `}>
                                        {typeof spanVal?.listContentBase === "string"? Parser(newLine(spanVal?.listContentBase)): null}
                                      </span>
                                    </>
                                  )}
                                  {spanVal?.image?.data?.attributes?.url && <img src={`${process.env.STRAPI_URL +spanVal?.image?.data?.attributes?.url}`} alt="blog-description"/>}
                                  {spanVal?.image?.data?.attributes?.url && <span className={`paragraph-span ${spanVal?.imageBaseContentType} ${spanVal?.imageBaseContentFontSize}` } >{ spanVal?.imageBaseContent? Parser(newLine(spanVal?.imageBaseContent)):null}</span>}
                                </>
                              ) : (
                                <>
                                  <span className="paragraph-span">
                                    {typeof spanVal?.paragraph === "string" ? Parser(newLine(spanVal?.paragraph)): null}
                                  </span>
                                  {spanVal?.image?.data?.attributes?.url && <img src={`${process.env.STRAPI_URL +spanVal?.image?.data?.attributes?.url}`} alt="blog-description"/>}
                                </>
                              )
                            )}
                          </p>
                        )}
                    </div>
                  </div>
                </div>
                <Underline />
                <div className="section-03">
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
                </div>
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
