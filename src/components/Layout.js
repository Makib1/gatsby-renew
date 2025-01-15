import React, { useState } from "react"
import "../static/style/componentStyle/blogs.scss"
import lumiq from "../static/images/lumiq.svg"
import "../static/style/componentStyle/navbar.scss"
import "../static/style/componentStyle/blogs.scss"
import { Helmet } from "react-helmet"
import Loadable from "@loadable/component";
// import FooterCmp from "./footerCmp"



const Navbar = Loadable(() => import("./navbar"));
const NavMenu = Loadable(() => import("./nav-menu"));
const NavMobile = Loadable(() => import("./nav-mobile"));
const FooterCmp = Loadable(() => import("./footerCmp"));


export default function Layout({children }) {
    const [isNavBarOpen, setIsNavBarOpen] = useState(true);
    const closeNavMenu = () => {
      setIsNavBarOpen(false);
    };
    const title = "Lumiq | Succeed in Data Transformation";
    const description = "We help enterprises scale and transform completely with AI-driven products and solutions. While doing this, we help guide their employees and clients better."
    return (
      <div className={`${isNavBarOpen ? "" : "no-scroll"}`}>
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
        >
          <meta charSet="utf-8" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Lumiq.ai" />
          <title>{title}</title>
          <meta name="description" content={description} />
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-792M7HC5KQ"
            ></script>
            <script>
              {`window.dataLayer = window.dataLayer || [];   
            function gtag(){
               dataLayer.push(arguments);}   
            gtag('js', new Date());   
            gtag('config', 'G-792M7HC5KQ'); `}
            </script>
        </Helmet>
        {isNavBarOpen && (
          <Navbar
            isNavBarOpen={isNavBarOpen}
            setIsNavBarOpen={setIsNavBarOpen}
          />
        )} 
        {!isNavBarOpen && (
          <NavMenu
            isNavBarOpen={isNavBarOpen}
            setIsNavBarOpen={setIsNavBarOpen}
            closeNavMenu={closeNavMenu}
          />
        )}
        {isNavBarOpen && (
          <NavMobile
            isNavBarOpen={isNavBarOpen}
            setIsNavBarOpen={setIsNavBarOpen}
          />
        )} 
        <main>{children}</main>
        <FooterCmp />
      </div>
    )
}
