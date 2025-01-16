import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import React, { useEffect, useState, useRef } from "react"
import { useQuery, gql } from "@apollo/client"
import { Link } from "gatsby"
import Parser from "html-react-parser"
import { useLocation } from '@reach/router';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { FetchedResourcePageData } from "../services/helperFunctions"
import AuthorIcon from "../static/images/blog-page/author-icon.png"
import TagIcon from "../static/images/blog-page/tag-icon.png"
import Underline from "../components/underline"
import BlackBtn from "../components/black-btn"
import "../static/style/pageStyle/dynamicBlogs.scss"
import SEO from "../components/Seo";



const BlogTemplate = ({ pageContext }) => {
  const { tabs } = FetchedResourcePageData();
  const [email, setEmail] = useState('');
  const [date, setDate] = useState("");
  const [header, setHeader] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [metaImage, setMetaImage] = useState("");
  const [blogHeader, setBlogHeader] = useState({});
  const [blogContent, setBlogContent] = useState([]);
  const [breadcrumbsVal, setBreadcrumbsVal] = useState("");
  const [matchedItemUrl, setMatchedItemUrl] = useState(null);
  const [breadcrumbsUrl, setBreadcrumbsUrl] = useState(null);
  const [blogDataT, setBlogDataT] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [filteredTabs,setFilteredTabs]=useState([]);
  // const blog = data.strapiBlogDetail.blogs[0];
  const content=pageContext.node.attributes;

  const slug=content?.slug;

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
                  author
                  tags
                  imageUrl
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
                  code 
                  codeLanguage
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
  const { data } = useQuery(BLOG_DETAILS, {
    variables: { slug },
  })
  console.log(content,data, 'king');

  useEffect(() => {
    if (data) {
      setDate(data?.blogDetails?.data[0]?.attributes?.blogs?.data[0]?.attributes?.date || "");
    setHeader(data?.blogDetails?.data[0]?.attributes?.blogs?.data[0]?.attributes?.header || "");
    setAuthor(data?.blogDetails?.data[0]?.attributes?.blogs?.data[0]?.attributes?.author || "");
    setTags(data?.blogDetails?.data[0]?.attributes?.blogs?.data[0]?.attributes?.tags || "");
    setMetaImage(data?.blogDetails?.data[0]?.attributes?.blogs?.data[0]?.attributes?.imageUrl || "");
      const [header, ...content] = data?.blogDetails?.data[0]?.attributes?.insertBlog || [];
     setBlogHeader(header || {});
    setBlogContent(content || []);

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
      blogContent.sort(compareOrders);
      const breadcrumbsVal = data?.blogDetails?.data[0]?.attributes?.blogs?.data[0]?.attributes?.blogType || "";
      let breadcrumbsTab = tabs.filter(tab => tab.id === breadcrumbsVal);
      console.log(breadcrumbsTab,"breadcrumbsTabs");
       setFilteredTabs(breadcrumbsTab);
      setBreadcrumbsVal(breadcrumbsVal);

      const matchedItemUrl = tabs.find(item => item.label === breadcrumbsVal);
      setMatchedItemUrl(matchedItemUrl);

      const breadcrumbsUrl = matchedItemUrl ? matchedItemUrl.id : null;
      setBreadcrumbsUrl(breadcrumbsUrl);

      const blogDataT = data?.blogContents?.data[0]?.attributes?.blogContent || [];
      setBlogDataT(blogDataT);
      if (blogDataT) {
        setSortedData(...blogDataT);
      }
      if (sortedData) {
        const blogData = sortedData?.sort((a, b) => parseFloat(a?.order) - parseFloat(b?.order)) || [];
        setBlogData(blogData);      }
    }
  }, [data]);
  const handleSubscribe = () => {
    setEmail(''); 
  };
  return (
    <>
    <SEO 
       metaTitle={content?.metaTitle}
       metaDescription={content?.metaDescription}
       ogTitle={content?.header}
       ogDescription={content?.metaDescription}
       ogImage={`${process.env.STRAPI_URL + content?.imageUrl}`}
       ogAuthor={content?.author}
       ogTags={content?.tags}
    />
      <div className="dynamic-blog">
        <div className="page-content">
          <div className="page-wrapper">
            <div className="blog-page-content">
              <div className="page-nav-item-data">
                <div className="section-01">
                  <div className="page-wrapper">
                    <div className="dynamic-blog-banner">
                      {author && <>
                        <img className="auth-image" src={AuthorIcon} alt="auth-icon"/>
                        <span className="author-name">&nbsp;{author}</span>
                      </>}
                      <Link href="/resources" name="resource">
                         &nbsp; &nbsp; &nbsp;
                        <span className="span-bold">Resource</span>
                      </Link>
                      <Link to={`/resources/${filteredTabs[0]?.id}`} name="resource">
                        &nbsp; / &nbsp;
                        <span className="span-bold">{`${filteredTabs[0]?.label}`}</span>
                      </Link>
                      <span className="blog-date">{date}</span>
                    </div>
    
                    {tags && <div className="blog-tag">
                      <img src={TagIcon} alt="tag-icon"/>&nbsp;
                      <span>{tags}</span>
                    </div>}
                    <div className="dynamic-blog-header" >
                      
                    </div>
                  </div>
                </div>
                <div className="section-02">
                  <div className="page-wrapper">
                    <div className="blog-content">
                      <div className="dynamic-blog-sub-header" id="paragraph-0">
                        <h1 className="heading-md">
                          {typeof blogHeader?.heading === "string"
                            ? Parser(header)
                            : null}
                        </h1>
                        {
                        blogHeader?.bannerImage?.imageUrl&& 
                        <Zoom>
                        <img src={`${process.env.STRAPI_URL +blogHeader?.bannerImage?.imageUrl}`} alt="blog-detail"/>
                        </Zoom>
                        // <img src={`${process.env.STRAPI_URL +blogHeader?.bannerImage?.imageUrl}`} alt="blog-detail"/>
                        }
                       
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
                              {val?.imageUrl && 
                              <Zoom>
                              <img src={`${process.env.STRAPI_URL +val?.imageUrl}`} alt="blog-detail"/>
                              </Zoom>
                              }
                              {val?.code &&
                                <div className="code-content">
                                  <SyntaxHighlighter language={val.codeLanguage} style={atomOneLight}>
                                    {val.code}
                                  </SyntaxHighlighter>
                                </div>
                              }
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
                                  {spanVal?.imageUrl && 
                                  <Zoom>
                                  <img src={`${process.env.STRAPI_URL +spanVal?.imageUrl}`} alt="blog-detail"/>
                                  </Zoom>
                                  }
                                  {spanVal?.code &&
                                    <div className="code-content">
                                      <SyntaxHighlighter language={spanVal.codeLanguage} style={atomOneLight}>
                                        {spanVal.code}
                                      </SyntaxHighlighter>
                                    </div>
                                  }
                                  
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
                                  {spanVal?.imageUrl && 
                                  <Zoom>
                                  <img src={`${process.env.STRAPI_URL +spanVal?.imageUrl}`} alt="blog-detail"/>
                                  </Zoom>
                                  }
                                  {spanVal?.code &&
                                    <div className="code-content">
                                      <SyntaxHighlighter language={spanVal.codeLanguage} style={atomOneLight}>
                                        {spanVal.code}
                                      </SyntaxHighlighter>
                                    </div>
                                  }
                                </>
                              ) : (
                                <>
                                  <span className="paragraph-span">
                                    {typeof spanVal?.paragraph === "string"
                                      ? Parser(spanVal?.paragraph)
                                      : null}
                                  </span>
                                  {spanVal?.imageUrl && 
                                  <Zoom>
                                  <img src={`${process.env.STRAPI_URL +spanVal?.imageUrl}`} alt="blog-detail"/>
                                  </Zoom>
                                  }
                                  {spanVal?.code &&
                                    <div className="code-content">
                                      <SyntaxHighlighter language={spanVal.codeLanguage} style={atomOneLight}>
                                        {spanVal.code}
                                      </SyntaxHighlighter>
                                    </div>
                                  }
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
                                    {spanVal?.imageUrl && 
                                    <Zoom>
                                    <img src={`${process.env.STRAPI_URL +spanVal?.imageUrl}`} alt="blog-detail"/>
                                    </Zoom>
                                    }
                                    {spanVal?.code &&
                                    <div className="code-content">
                                      <SyntaxHighlighter language={spanVal.codeLanguage} style={atomOneLight}>
                                        {spanVal.code}
                                      </SyntaxHighlighter>
                                    </div>
                                    }
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
                                    {spanVal?.imageUrl && 
                                    <Zoom>
                                    <img src={`${process.env.STRAPI_URL +spanVal?.imageUrl}`} alt="blog-detail"/>
                                    </Zoom>
                                    }
                                    {spanVal?.code &&
                                    <div className="code-content">
                                      <SyntaxHighlighter language={spanVal.codeLanguage} style={atomOneLight}>
                                        {spanVal.code}
                                      </SyntaxHighlighter>
                                    </div>
                                    }
                                  </>
                                ) : (
                                  <>
                                    <span className={`paragraph-span ${spanVal?.paragraphType === "LightBlack" ? "LightBlack":spanVal?.paragraphType === "LightBold" ?"LightBold":"LightBlackBold"}`}>
                                      {typeof spanVal?.paragraph === "string"
                                      ? Parser(spanVal?.paragraph)
                                      : null}
                                    </span>
                                    {spanVal?.imageUrl && 
                                    <Zoom>
                                    <img src={`${process.env.STRAPI_URL +spanVal?.imageUrl}`} alt="blog-detail"/>
                                    </Zoom>
                                    }
                                    {spanVal?.code &&
                                    <div className="code-content">
                                      <SyntaxHighlighter language={spanVal.codeLanguage} style={atomOneLight}>
                                        {spanVal.code}
                                      </SyntaxHighlighter>
                                    </div>
                                    }
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
    

  );
};



export default BlogTemplate;
