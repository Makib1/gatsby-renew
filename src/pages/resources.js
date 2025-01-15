import React, { useEffect, useState } from "react"
import "../static/style/pageStyle/resource-page.scss"
import BlackBtn from "../components/black-btn"
import Blogs from "../components/blogs"
import Underline from "../components/underline"
import Select from "react-select"
import BannerHeader from "../components/bannerHeader"
import { useQuery, gql } from '@apollo/client';
import {FetchedResourcePageData} from '../services/helperFunctions'
import Loader from "../components/loader"
import { Link } from "gatsby"
import Videos from "../components/Videos"
import { YouTubeVideo,SheetsData } from "../services/helperFunctions"
import DataSheets from "../components/dataSheets"


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
    }
  }
`
const videoData=YouTubeVideo();
const sheetsData=SheetsData();

const ResourcesPage = props => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("Blogs")
  const [selected, setSelected] = useState(null)
  const [viewAll, setViewAll] = useState(true)
  const { loading, error, data } = useQuery(BLOG_QUERY, {
    variables: { page: 1, pageSize: 60 }, // Adjust page and pageSize as needed
  });

  console.log(data,"aaaaaa");
  let blog = data?.blogs
  let sortedData;
  if(blog){
    const dataCopy = [...blog.data];
    sortedData = dataCopy.sort((a, b) => {
      const dateA = new Date(a.attributes.date.replace(/,/g, ''));
      const dateB = new Date(b.attributes.date.replace(/,/g, ''));
      return dateB - dateA;
    });
  }
  sortedData=sortedData?.filter((blogItem) => blogItem.attributes.blogType !== "policy");
  let elementID =
    props?.location?.state &&
    Object.values(props?.location?.state)
      .filter(
        (value, index) =>
          typeof value === "string" &&
          index !== Object.keys(props?.location?.state)?.length - 1
      )
      .join("")

  const handleClick = header => {
    setActiveTab(header);
    setViewAll(true)
  }
  const handleChange = selectedOption => {
    setSelected(selectedOption.value)
    setActiveTab(selectedOption.value)
  }
  const handleView = () => {
    setViewAll(!viewAll)
  }
  const  [blogData,setBlogData] = useState();
  const  [latestData,setLatestData] = useState();
  const  [mediaData,setMediaData] = useState();
  const  [caseStudiesData,setCaseStudiesData]=useState();
  useEffect(()=>{
    console.log(activeTab,'active');
    setLatestData(blog?.data);
      if (activeTab === "media-releases") {
        const filteredData = sortedData?.filter((blogItem) => blogItem.attributes.blogType === activeTab);
        console.log(activeTab,'media')
        setMediaData(filteredData);
      } 
      else if (activeTab === "Case-Studies") {
        const filteredData = sortedData?.filter((blogItem) => blogItem.attributes.blogType === activeTab);
        console.log(activeTab,'Case-Studies')
        console.log(filteredData, "dafasgs");
        setCaseStudiesData(filteredData);
      }
      else if(activeTab ==="Blogs" ){ // should be improved
        const filteredData = sortedData?.filter((blogItem) => blogItem.attributes.blogType ==="Blogs");
        setBlogData(filteredData);
        console.log(blogData,latestData,'latest , blog')
      }
      else if(activeTab ==="data-sheets" ){ // should be improved
        const filteredData = sortedData?.filter((blogItem) => blogItem.attributes.blogType ==="Blogs");
        setBlogData(filteredData);
        console.log(blogData,latestData,'latest , blog')
      }
      else if(activeTab === 'webinars' || activeTab==='videos' ){
        setBlogData([]);
        console.log('blog?.data')
      }
  },[activeTab,blog]);

  console.log(props.location,"helllo")
  useEffect(() => {
    if (props?.location?.state) {
      const id = Object.values(props?.location?.state)
        .filter(
          (value, index) =>
            typeof value === "string" &&
            index !== Object.keys(props?.location?.state)?.length - 1
        )
        .join("")
      setActiveTab(id)
      setSelected(id)
      // if (id) {
      //   const partnersLocation = document.getElementById(id)
      //   if (partnersLocation) {
      //     partnersLocation.scrollIntoView({ behavior: "smooth" })
      //   }
      // }

    }
    console.log(props.location,"helllo")
    if(elementID === 'resource'){
      setActiveTab('Blogs');
    }
  }, [props?.location?.state])


  
  const { options, style, tabs } = FetchedResourcePageData()
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={`resources-pagev2 ${isNavBarOpen ? "" : "no-scroll"}`}>
          <div className="page-content">
            {/* Banner Start */}
            <div className="resources-banner">
              <div className="page-wrapper">
                <div className="section-inner">
                  <div className="left-title">
                    <BannerHeader
                      headingType={"bannerTitle"}
                      header={"Resources"}
                    />
                  </div>
                  <div className="right-details">
                    <h2 className="heading-md">
                      The latest blogs, webinars, events, and media releases from
                      LUMIQ
                    </h2>

                    <div className="see-all-position">
                      <button className="right-arrow-btn underline-remove-effect">
                        <a href="/resources/latest">
                          <p>See All Latest</p>
                          <span>&#10230;</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="resource-bottom-navigation">
              <div className="page-wrapper">
                <ul>
                  {tabs.map(tab => (
                    <li key={tab.id} onClick={() => handleClick(tab.id)}>
                      <a
                        className={`${
                          activeTab === tab.id ? "active-tab-black" : ""
                        }`}
                      >
                        {tab.label}
                        <span></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="resource-bottom-navigation-mobile">
              <div className="page-wrapper">
                <Select
                  defaultValue={options[0]}
                  options={options}
                  theme={theme => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      neutral20: "neutral30",
                      primary: "black",
                    },
                  })}
                  styles={style}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div
              className="header-tabs"
              id={elementID}
              style={{ overflow: "hidden" }}
            >
              {tabs.map((tab,idx) =>
                  activeTab === tab.id && (
                    <div className="active-tabs" key={idx}>
                      {activeTab !=='videos' &&<div className="blog-title">
                        <div className="page-wrapper">
                          <BannerHeader
                            header={tab.label}
                            line={"single-line"}
                          />
                        </div>
                      </div>}
                      { activeTab === 'media-releases' &&
                         <Blogs
                         blogData={mediaData?.slice(0, 4)}
                         resourceUrl = {activeTab}
                       />
                      }
                      { activeTab === 'Blogs' &&
                        <Blogs
                        blogData={blogData?.slice(0,4)}
                        resourceUrl = {activeTab}
                        />
                      }
                      {
                        activeTab === 'latest'&&
                        <Blogs
                        blogData={sortedData?.slice(0,4)}
                        resourceUrl = {activeTab}
                        />
                      }
                       {
                        activeTab === 'Case-Studies'&&
                        <Blogs
                        blogData={caseStudiesData?.slice(0,4)}
                        resourceUrl = {activeTab}
                        />
                      }
                      {
                        activeTab==='videos' &&
                        <Videos 
                        videoData={YouTubeVideo().video?.slice(0,4)}
                        resourceUrl={activeTab}
                        />
                      } 
                      {
                        activeTab === 'data-sheets'&&
                        <DataSheets
                        sheetData={SheetsData().sheets?.slice(0,4)}
                        resourceUrl = {activeTab}
                        />
                      } 
                     
                    </div>
                  )
              )}
            </div>

            <div className="see-all-blogs">
              <div className="page-wrapper">
                <div className="see-all-blogs-button">
                  <div onClick={handleView}>
                    {activeTab === 'Latest'|| activeTab === 'Case-Studies' || activeTab === 'Blogs' || activeTab === 'media-releases' || activeTab === 'data-sheets' ? 
                       <Link href={`/resources/${activeTab}`} state={blog?.data} name="resoures">  
                          <BlackBtn text={"View More"}  />
                        </Link>:""  
                  }
                  </div>
                </div>
              </div>
            </div>
            <Underline />
          </div>
        </div>
      )}
    </>
  )
}

export default ResourcesPage