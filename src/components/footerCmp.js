import React, { useEffect, useState, useRef } from "react"
import "../static/style/componentStyle/footerCmp.scss"
import "../static/style/globalCss/hoverEffect.scss"
import Insta from "../static/images/InstagramIcon.png"
import Linkdin from "../static/images/LinkedInIcon.png"
import { useInView } from "react-intersection-observer"
import BannerHeader from "./bannerHeader"
import { Link } from "gatsby"
import { useThemeContext } from "../themeContext"

function FooterCmp(props) {
  const { ref: ref, inView: footer } = useInView({ triggerOnce: true })
  const imageAlt = "enterprise ai"
  const { currentTheme, resetTheme } = useThemeContext();
  const newDate=new Date().getFullYear();
  const [theme, setTheme] = useState("")
  useEffect(() => {
    if (footer) {
      setTheme("theme")
    }
  }, [footer])
  
  useEffect(() => {
    const handleScrollEnd = () => {
      resetTheme()
      window.removeEventListener("scroll", handleScrollEnd)
    }

    if (currentTheme === "themes") {
      setTimeout(() => {
        handleScrollEnd()
      }, 2000) 
      const partnersLocation = document.getElementById("themes")
      if (partnersLocation) {
          partnersLocation.scrollIntoView({
          behavior: "smooth",
        })
        // window.addEventListener('scroll', handleScrollEnd);
       
      }
    }
    return () => {
      window.removeEventListener("scroll", handleScrollEnd)
    }
  }, [currentTheme])
  const linkName = "lumiq.ai"
  const handleClick = (event) => {
    event.preventDefault();
  };

  //for conditional render in case of ambassdor page 
  const [pageName, setPageName] = useState("/");
  const currentPath = window.location.pathname;
  useEffect(() => {
    const normalizedPath = currentPath.endsWith("/") ? currentPath.slice(0, -1) : currentPath;
    const page = normalizedPath.split("/").pop();

    setPageName(page);
  }, [currentPath])

  return (
    <>
    {pageName!=="lumiq-ambassdor-program" &&<footer>
      <div className="footerCmp">
        <div className="page-wrapper" id="themes">
          <div className="footer-inner" ref={ref}>
            {theme === "theme" && (
              <BannerHeader header={"Themes"} line={"single-line"} />
            )}
            <div className="main-container">
              <div className="data-Modernization">
                <h3 className="">Data Modernization</h3>
                <ul className="">
                  <li>
                    <a href="/" onClick={handleClick} name={linkName}>Platform modernization</a>
                  </li>
                  <li>
                    <a href="/" onClick={handleClick} name={linkName}>EDW migrations</a>
                  </li>
                  <li>
                    <a href="/" onClick={handleClick} name={linkName}>Governance - PII protection</a>
                  </li>
                  <li>
                    <a href="/" onClick={handleClick} name={linkName}>Data quality</a>
                  </li>
                  <li>
                    <a href="/" onClick={handleClick} name={linkName}>Data Lineage</a>
                  </li>
                  <li>
                    <a href="/" onClick={handleClick} name={linkName}>Catalogue</a>
                  </li>
                  <li>
                    <a href="/" onClick={handleClick} name={linkName}>Data observability</a>
                  </li>
                  <li>
                    <a href="/" onClick={handleClick} name={linkName}>Reverse ETL/DaaS</a>
                  </li>
                  <li>
                    <a href="/" onClick={handleClick} name={linkName}>Feature marts</a>
                  </li>
                  <li>
                    <a href="/" onClick={handleClick} name={linkName}>AI/ML</a>
                  </li>
                  
                 
                </ul>
              </div>
              <div className="customer-insights">
                <h3 className="">Customer Insights</h3>
                <ul className="">
                  <li>
                    <a href="#" onClick={handleClick} name={linkName}>Hyper-personalization</a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClick} name={linkName}> Next Best Action</a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClick} name={linkName}>Customer Nudges</a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClick} name={linkName}>Hyper-curated journeys</a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClick} name={linkName}>Customer 360º</a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClick} name={linkName}>Customer MDM</a>
                  </li>
                </ul>
              </div>
              <div className="buisiness-excellence">
                <h3 className="">Business Excellence</h3>
                <ul className="">
                  <li>
                    <a href="#" onClick={handleClick} name={linkName}>Agents Productivity</a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClick} name={linkName}>Smart ops</a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClick} name={linkName}>Fraud detection</a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClick} name={linkName}>Real time Analytics</a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClick} name={linkName}>BI Reporting & dashboards</a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClick} name={linkName}>Regulatory reporting</a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="footer-v2">
        <div className="page-wrapper">
          <div className="footer-details tw-flex tw-flex-wrap tw-justify-between ">
            <div className="platform tw-flex">
              <div className="platform-header ">
              <a href="/empower" target="_blank" name="resources"> <p>Platforms</p></a>
              </div>
              <div className="footer-contnet">
                <div className="platform-content">
                  <p>
                    
                    <Link to="/empower-foundation" state={"emp-foundation"} name={linkName}>
                      emPower Foundation
                    </Link>
                  </p>
                </div>
                <div className="platform-content">
                  <p>
                    
                    <Link to="/empower-pryzm" state={"emp-foundation"} name={linkName}>
                      
                      emPower Pryzm
                    </Link>
                  </p>
                </div>
                <div className="platform-content">
                  <p>
                    
                    <Link to="/gen-ai"  name={linkName}>
                      
                      GenAI
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="platform tw-flex">
              <div className="platform-header ">
              <a href="/about-us" target="_blank" name="resources"> <p>About Us</p></a>
              </div>
              <div className="footer-contnet">
                <div className="platform-content">
                  <p>
                    <Link to="/about-us" state={"company"} name={linkName}>
                      Company
                    </Link>
                  </p>
                </div>
                <div className="platform-content">
                  <p>
                    <Link to="/about-us" state={"leaders"} name={linkName}>
                      
                      Leaders
                    </Link>
                  </p>
                </div>
                <div className="platform-content">
                  <p>
                    <Link to="/about-us" state={"investors"} name={linkName}>
                      
                      Investors
                    </Link>
                  </p>
                </div>
                {/* <div className="platform-content">
                  <p>Newsroom</p>
                </div> */}
              </div>
            </div>
            <div className="platform tw-flex">
              <div className="platform-header ">
              <a href="/careers" target="_blank" name="resources"><p>Careers</p></a>
              </div>
              <div className="footer-contnet">
                <div className="platform-content">
                  <p>
                    
                    <Link to="/about-us" state={"ourCulture"} name={linkName}>
                      
                      Our Culture
                    </Link>
                  </p>
                </div>
                <div className="platform-content">
                  <p>
                    <Link to="/careers" state={"applyForAJob"} name={linkName}>
                      
                      Apply for a job
                    </Link>
                  </p>
                </div>
                {/* <div className="platform-content">
                  <p>Hiring Process</p>
                </div>
                <div className="platform-content">
                  <p>Alumni Connect</p>
                </div> */}
              </div>
            </div>
            <div className="platform tw-flex">
              <div className="platform-header ">
                <a href="/resources" target="_blank" name="resources"><p>Resources</p></a>
              </div>
              <div className="footer-contnet">
                <div className="platform-content">
                  <p>
                    <Link to="/resources" state={"Blogs"} name={linkName}>
                      Blogs
                    </Link>
                  </p>
                </div>
                <div className="platform-content">
                  <p>
                    <Link to="/resources" state={"data-sheets"} name={linkName}>
                      Brochures
                    </Link>
                  </p>
                </div>
                {/* <div className="platform-content">
                  <p>
                    <Link to="/resources" state={"platform-tour"} name={linkName}>
                      Platform Tours
                    </Link>
                  </p>
                </div> */}
                <div className="platform-content">
                  <p>
                    <Link to="/resources" state={"Case-Studies"}  name={linkName}>
                      Case Studies
                    </Link>
                  </p>
                </div>
                <div className="platform-content">
                  <p>
                    <Link to="/resources" state={"videos"} name={linkName}>
                      Videos
                    </Link>
                  </p>
                </div>
                <div className="platform-content">
                  <p>
                    <Link to="/resources" state={"media-releases"} name={linkName}>
                      Media Releases
                    </Link>
                  </p>
                </div>
                {/* <div className="platform-content">
                  <p>
                    <Link to="/resources" state={"webinars"} name={linkName}>
                      Webinars
                    </Link>
                  </p>
                </div> */}
                <div className="platform-content">
                  <p>
                    <Link to="/resources" state={"webinars"} name={linkName}>
                      Events
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="social-container">
              <div className="social-logo tw-flex">
                <div className="social-img">
                  <a href="https://www.instagram.com/lifeatlumiq/" target="_blank" name={linkName}>
                    <img src={Insta} alt={linkName}/>
                  </a>
                </div>
                <div className="social-img">
                  <a href="https://www.linkedin.com/company/lumiqai/" target="_blank" name={linkName}>
                    <img src={Linkdin}  alt={linkName} />
                  </a>
                </div>
              </div>
              <div className="licence tw-pt-5">
                <p>© {newDate} LUMIQ | Crisp Analytics Pvt. Ltd.<br/> All rights reserved.</p>
              </div>
            </div>
          </div>
          <div className="footer-policy">
            <ul>
              <li>
                <Link className="blogs" to={`/detailedPolicies/privacy-policy`} target="_blank" name="blog" >
                  {/* <a>Privacy Policy</a> */}
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link className="blogs" to={`/detailedPolicies/cookie-policy`} state={{ data: props }} target="_blank" name="blog" >
                   {/* <a>Cookie Policy</a> */}
                   Cookie Policy
                </Link>
              </li>
              <li>
                <Link className="blogs" to={`/detailedPolicies/terms-and-conditions`} state={{ data: props }} target="_blank" name="blog" >
                  {/* <a>Terms & Conditions</a> */}
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>}
    </>
  )
}

export default FooterCmp
