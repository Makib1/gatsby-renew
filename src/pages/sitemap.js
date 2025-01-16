import React, { useEffect, useState } from "react"
import BannerHeader from "../components/bannerHeader"
import { Link } from "gatsby"


const Sitemap = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(true)
  const linkName = "lumiq.ai"
  return (
    <div className={`sitemap ${isNavBarOpen ? "" : "no-scroll"}`}>
      <div className="page-content">
        {/* Banner Start */}
        <div className="sitemap-banner">
          <div className="page-wrapper">
            <BannerHeader
             headingType={"bannerTitle"}
             header={"Sitemap"}
             line={"single-line"}
            />
             <div className="sitemap-container">
              <ul className="sitemap-list section-list-top">
                  <div class="section">
                      <li><a className="heading" href="/empower" target="_blank" >emPower </a></li>
                      <li><a className="hover-underline-animation" href="/empower-foundation" target="_blank" >emPower Foundation </a></li>
                      <li><a className="hover-underline-animation" href="/empower-pryzm" target="_blank" >emPower Pryzm</a></li>
                  </div>
                  <div class="section">
                      <li><a className="heading" href="/partners" target="_blank" >Partners  </a></li>
                      <li><a className="hover-underline-animation" href="/aws-consulting-partner" target="_blank" >AWS Consulting Partner  </a></li>
                      <li><a className="hover-underline-animation"  target="_blank" >Google Cloud Partner </a></li>
                      <li><a className="hover-underline-animation" href="/aws-devops" target="_blank" >AWS DevOps </a></li>
                  </div>
                  <div class="section">
                      <li><a className="heading" href="/about-us" target="_blank" >Company </a></li>
                      <li><a className="hover-underline-animation" href="/about-us" target="_blank" >About Us   </a></li>
                      <li><a className="hover-underline-animation" href="/unique-about-lumiq" target="_blank" >Unique About LUMIQ </a></li>
                      <li><Link className="hover-underline-animation" to="/about-us" target="_blank" state={"leaders"} >Leaders </Link></li>
                      <li><Link className="hover-underline-animation" href="/about-us" target="_blank" state={"investors"} >Investors </Link></li>
                  </div>
                  <div class="section">
                        <li><a className="heading" href="/careers" target="_blank" >Careers </a></li>
                        <li><Link className="hover-underline-animation" to="/careers" target="_blank" state={"ourCulture"}>Our Culture  </Link></li>
                        <li><Link className="hover-underline-animation" to="/careers" target="_blank" state={"applyForAJob"} >Apply for a job  </Link></li>
                    </div>
                  <div class="section">
                      <li><a className="heading" href="/resources" target="_blank" >Resources  </a></li>
                      <li><a className="hover-underline-animation" href="/resources/blogs" target="_blank" >Blogs    </a></li>
                      <li><a className="hover-underline-animation"  target="_blank" >Brochures</a></li>
                      <li><a className="hover-underline-animation"  target="_blank" >Platform Tours  </a></li>
                      {/* <li><Link className="hover-underline-animation"  state={"caseStudies"} target="_blank" >Case Studies </Link></li> */}
                      <li><a className="hover-underline-animation"  target="_blank" >Videos </a></li>
                      <li><a className="hover-underline-animation" href="/resources/media-releases" target="_blank" >Media Releases </a></li>
                      <li><a className="hover-underline-animation" href="/resources/Case-Studies" target="_blank" >Case Studies </a></li>
                      <li><a className="hover-underline-animation"  target="_blank" >Webinars/Events </a></li>
                  </div>
              </ul>
              <ul className="sitemap-list section-list-bottom">
                <div class="section">
                    <li><a className="heading"  target="_blank" >Themes</a></li>
                    <li><a className="hover-underline-animation" target="_blank" >Data Modernization </a></li>
                    <li><a className="hover-underline-animation" target="_blank" >Platform modernization</a></li>
                    <li><a className="hover-underline-animation" target="_blank" >EDW migrations</a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Governance - PII protection</a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Data quality </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Data Lineage </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Catalogue</a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Data observability </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Reverse ETL/DaaS </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Feature marts </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >AI/ML</a></li>
                </div>
                <div class="section">
                    <li><a className="heading"  target="_blank" >Customer Insights </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Hyper-personalization </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Next Best Action </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Customer Nudges </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Hyper-curated journeys </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Customer 360º </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Customer MDM </a></li>
                
                </div>
                <div class="section">
                    <li><a className="heading"  target="_blank" >Business Excellence </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Agents Productivity </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Smart ops </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Fraud detection </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Real time Analytics </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >BI Reporting & dashboards </a></li>
                    <li><a className="hover-underline-animation"  target="_blank" >Regulatory reporting </a></li>
                </div>                
              </ul>
              
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sitemap
