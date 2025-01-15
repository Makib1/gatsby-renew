import React, { useState, useEffect } from "react"
import lumiq from "../static/images/lumiqDark.webp"
import Hamburger from "../static/images/hamburgerDark.svg"
import "../static/style/componentStyle/navMenu.scss"
import BlogCard from "./blog-card"
import "../static/style/componentStyle/blogs.scss"
import { useQuery, gql } from '@apollo/client';
import { Link } from 'gatsby'
import VideoComponent from "./videoComponent"
import { useThemeContext } from '../themeContext';
import careerPageVideoPoster from '../static/images/culture.webp'
import { graphql, useStaticQuery } from "gatsby"
import Parser from "html-react-parser"


const NavMenu = ({ isNavBarOpen, setIsNavBarOpen, dynamicClass, closeNavMenu }) => {

  const BLOG_QUERY = gql`
query blog($page: Int, $pageSize: Int) {
  blogs(pagination: { page: $page, pageSize: $pageSize }
    sort: "id:desc") {
      data{
        attributes{
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
`;
  const navData = useStaticQuery(
    graphql`
    {
      allCmpGrps {
        nodes {
        
            journey {
              attributes {
                dynamicCmp {
                  t1
                  t2
                  t3
                  t4
                  t5
                  t6
                }
              }
            }
          }
        
      }
    }
  `
  )
  let navMenuLeft = navData?.allCmpGrps?.nodes[0]?.journey[5]?.attributes?.dynamicCmp[0];
  let navMenuMid = navData?.allCmpGrps?.nodes[0]?.journey[5]?.attributes?.dynamicCmp[1];
  const { setCurrentTheme } = useThemeContext();
  const handleThemeClick = () => {
    setCurrentTheme('themes');
    setIsNavBarOpen(true);
  };
  const handleLinkClick = () => {
    setIsNavBarOpen(true);
  };
  const { data } = useQuery(BLOG_QUERY, {
    variables: { page: 1, pageSize: 40 }, // Adjust page and pageSize as needed
  });
  const linkName = "lumiq.ai"
  let blog = data?.blogs
  let filteredData = blog?.data?.slice() || [];

  const index = filteredData.findIndex(item => item.attributes.blogType !== "policy");
  return (
    <>
      <header className="on-click-open-navbar">
        <div className="page-wrapper">
          <div className="header-inner">
            <div className="nav-header">
              <div className="header-logo">
                <a href="/" name="home">
                  <img src={lumiq} alt="Logo" />
                </a>
              </div>
              <div className="hamburger-menu">
                <img
                  src={Hamburger}
                  alt="Hamburger"
                  onClick={() => setIsNavBarOpen(true)}
                />
              </div>
            </div>
            <div className="nav-content">
              <div className="nav-details">
                <div className="navigation column">
                  <p>Navigation</p>
                  <div className="nav-border-top">
                    <ul>
                      <li>
                        <Link to="/empower" onClick={handleLinkClick} name={linkName}> emPower </Link>
                      </li>
                      <li>
                        <Link to="/gen-ai" onClick={handleLinkClick} name={linkName}> GenAI </Link>
                      </li>
                      <li>
                        <Link to="/partners" onClick={handleLinkClick} name={linkName}>{navMenuLeft?.t2} </Link>
                      </li>
                      <li>
                        <Link to='/careers' state={'themes'} onClick={handleThemeClick} name={linkName}>{navMenuLeft?.t3}</Link>
                      </li>
                      <li>
                        <Link to="/about-us" state={'company'} onClick={handleLinkClick} name={linkName}>About Us</Link>
                      </li>
                      <li>
                        <Link to="/careers" state={'career'} onClick={handleLinkClick} name={linkName}> {navMenuLeft?.t5} </Link>
                      </li>
                      <li>
                        <Link to="/resources" state={'resource'} onClick={handleLinkClick} name={linkName}> Resources </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="quick-links column">
                  <div className="nav-border-top">
                    <div className="quick-links-class">
                      <p>Quick Links</p>
                      <ul className="quick-links-list">
                        <li>
                          <Link to="/resources/Blogs" state={'blogs'} onClick={handleLinkClick} name={linkName}> {navMenuMid?.t1} </Link>
                        </li>
                        <li>
                          <Link to="/about-us" state={'whatWeDo'} onClick={handleLinkClick} name={linkName}> {navMenuMid?.t2} </Link>
                        </li>
                        <li>
                          <Link to="/empower" state={'whatAreDataProducts'} onClick={handleLinkClick} name={linkName}> {navMenuMid?.t3} </Link>
                        </li>
                        <li>
                          <Link to='/about-us' state={'leaders'} onClick={handleLinkClick} name={linkName}>{navMenuMid?.t4}</Link>
                        </li>
                        <li>
                          <Link to='/about-us' state={'lifeAtLumiq'} onClick={handleLinkClick} name={linkName}>{navMenuMid?.t5}</Link>
                        </li>
                        <li>
                          <Link to="/" state={'customerSuccess'} onClick={handleLinkClick} name={linkName}>{navMenuMid?.t6}</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-culture">
                      <p>Culture</p>
                      <div className="nav-border-top">
                        <div className="nav-image">
                          <Link to='/about-us' state={'ourCulture'} onClick={handleLinkClick} name={linkName}> <VideoComponent poster={careerPageVideoPoster} /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="latest-news column">
                  <p>Latest Stories</p>
                  <div className="nav-border-top">
                    <div className="blog-content">
                      <div className="page-wrapper">
                        {blog?.data[0] && <BlogCard val={data?.blogs?.data[index]} setIsNavBarOpen={setIsNavBarOpen} />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </header>
    </>
  )
}

export default NavMenu
