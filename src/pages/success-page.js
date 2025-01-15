import React, { useEffect, useState, useRef } from "react"
import BannerHeader from "../components/bannerHeader"
import '../static/style/pageStyle/success-page.scss'
import UnderlineButton from "../components/underlineButton"
import { Link } from "gatsby"
import emoji from '../static/images/emoji.png';

const PageNotFound = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(true)
  return (
    <div className={`success-page ${isNavBarOpen ? "" : "no-scroll"}`}>
      <div className="page-content">
        <div className="page-wrapper">
          <div className="success-page-container">
            <div className="emoji">
              <img src={emoji} alt="Lumiq.ai"/>
            </div>
          <BannerHeader
            headingType={"bannerTitle"}
            header={"Thanks for getting in touch."}
            line={"single-line"}
          />
          {/* <h2 className="heading-sm">Ooops, page not found yet</h2> */}
          <p className="does-not-exits"> 
          An expert from our team will reach out to you shortly.
          </p>
          <Link to='/' name="home">
            <UnderlineButton text="Go To Home Page" />

          </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
