import React, { useEffect, useState } from "react"
import Hamburger from "../static/images/Hamburger.png"
import "../static/style/componentStyle/navbar.scss"
import "../static/style/componentStyle/blogs.scss"
import GetStartedModal from "./getStaredModal"

const NavMobile = ({ isNavBarOpen, setIsNavBarOpen, dynamicClass }) => {
  const [isOpen, setIsOpen] = useState(false)
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

    setPageName(page);
  }, [currentPath])
  return (
    <>
    {pageName !=="lumiq-ambassdor-program" && <div className="headerCmpMobile">
      <div className="page-wrapper">
        <div className="header-inner">
          <div className="hamburger-bottom-menu">
            <div className="get-started">
              {/* <button>Get Started</button> */}
              <GetStartedModal isOpen={isOpen} setIsOpen={setIsOpen} isModalOpen={isModalOpen} handleIsOpenModal={handleIsOpenModal} />
            </div>
            {!isOpen && (
              <div className="hamburger-menu-img">
                <img
                  src={Hamburger}
                  alt="Hamburger"
                  onClick={() => setIsNavBarOpen(false)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>}
    </>
  )
}

export default NavMobile
