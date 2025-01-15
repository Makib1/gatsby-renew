import React, { useEffect, useState } from "react"
import lumiq from "../static/images/lumiq.webp"
import Hamburger from "../static/images/Hamburger.png"
import "../static/style/componentStyle/navbar.scss"
import "../static/style/componentStyle/blogs.scss"
// import GetStartedModal from "./getStaredModal"

const Navbar = ({ isNavBarOpen, setIsNavBarOpen, dynamicClass }) => {
  const [isOpen, setIsOpen] = useState(false)
  // console.log(isOpen,'navbar')
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const handleIsOpenModal = (isModalOpen) => {
    setIsModalOpen(!isModalOpen);
    setIsOpen(!isOpen)
  }

  //for conditional render in case of ambassdor page 
  const [pageName, setPageName] = useState("/");
  const currentPath = window.location.pathname;
  useEffect(() => {
    const normalizedPath = currentPath.endsWith("/") ? currentPath.slice(0, -1) : currentPath;
    const page = normalizedPath.split("/").pop();
    console.log("pagename",page,currentPath)
    setPageName(page);

  }, [currentPath])

  return (
    <>
      {pageName == "lumiq-ambassdor-program" ? <header className="headerCmp">
        <div className="page-wrapper">
          <div className="header-inner">
            <div className="header-logo">
              <a href="/lumiq-ambassdor-program" name="home">
                <img src={lumiq} alt="Logo" />
                {/* <StaticImage src='../images/lumiq.svg' alt="Logo" /> */}
              </a>
            </div>
          </div>
        </div>
      </header>
        : <header className="headerCmp">
          <div className="page-wrapper">
            <div className="header-inner">
              <div className="header-logo">
                <a href="/" name="home">
                  <img src={lumiq} alt="Logo" />
                  {/* <StaticImage src='../images/lumiq.svg' alt="Logo" /> */}
                </a>
              </div>
              <div className="hamburger-menu">
                <div className="get-started">
                  {/* <GetStartedModal isOpen={isOpen} setIsOpen={setIsOpen} isModalOpen={isModalOpen} handleIsOpenModal={handleIsOpenModal} /> */}
                </div>
                <div className="hamburger-menu-img">
                  <img
                    src={Hamburger}
                    alt="Hamburger"
                    onClick={() => setIsNavBarOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </header>}
    </>
  )
}

export default Navbar
