import React, { useEffect, useState, useRef } from "react"
import BannerHeader from "../components/bannerHeader"
import UnderlineButton from "../components/underlineButton"
import { Link } from "gatsby"
import { navigate } from 'gatsby';

const PageNotFound = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(true)
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const normalizedPath = currentPath.endsWith("/") ? currentPath.slice(0, -1) : currentPath;
      const page = normalizedPath.split("/").pop();

      if (page === "aws-consulting-partner") {
        // Redirect to the desired page
        navigate("/aws-foundation/", { replace: true });
      } else {
        // For other paths, show the 404 content
        setShowNotFound(true);
      }
    }
  }, []);

  // Show nothing until the redirect logic completes
  if (!showNotFound) {
    return null;
  }
  return (
    <div className={`page-not-found ${isNavBarOpen ? "" : "no-scroll"}`}>
      <div className="page-content">
        <div className="page-wrapper">
          <div className="page-not-found-container">
            <BannerHeader
              headingType={"bannerTitle"}
              header={"404"}
              line={"single-line"}
            />
            <h2 className="heading-sm">Ooops, page not found yet</h2>
            <p className="does-not-exits">
              The page you are looking for doesn’t exist or an another error
              occurred
            </p>
            <Link to="/" name="home">
              <UnderlineButton text="Go To Home Page" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
