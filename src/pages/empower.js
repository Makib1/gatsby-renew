import React, { useEffect, useState, useRef } from "react"
import "../static/style/globalCss/platform-page.scss"
import "../static/style/globalCss/style.scss"
import { graphql, useStaticQuery } from "gatsby"
import productVideo from "../static/images/video/productVideo.mp4"
import Parser from "html-react-parser"
import { FetchedPlatformPageData } from "../services/helperFunctions"
import Loadable from "@loadable/component"
import { Link } from "gatsby"
import arrowWhite from "../static/images/arrow-white.svg"
import { Helmet } from "react-helmet"

const PlatformV3 = props => {
    const data = useStaticQuery(
        graphql`
      {
        allPlatformV3Page {
            nodes {
            journey {
                attributes {
                cmpname
                header
                subHeader
                paragraph
                dynamicCmp {
                    imageUrl
                    description
                }
                }
            }
        }
  }
      }
    `
    )

    useEffect(() => {
        if (props?.location?.state) {
            const id = Object.values(props?.location?.state)
                .filter(
                    (value, index) =>
                        typeof value === "string" &&
                        index !== Object.keys(props?.location?.state).length - 1
                )
                .join("")
            if (id) {
                const partnersLocation = document.getElementById(id)
                if (partnersLocation) {
                    partnersLocation.scrollIntoView({
                        behavior: "smooth",
                    })
                }
            }
            console.log(id, props?.location?.state, 'iddddd')
        }
    }, [props?.location?.state])
    const [isNavBarOpen, setIsNavBarOpen] = useState(true)
    const {
        moduleObj,
        platformPageObj,
        moduleArray,
        platformDataProducts,
        moduleData
    } = FetchedPlatformPageData(
        data.allPlatformV3Page.nodes[0].journey
    )
    const Modules = Loadable(() => import("../components/modules"))
    const ModulesMobile = Loadable(() => import("../components/modulesMobile"))
    const RequestDemo = Loadable(() => import("../components/requestDemo"))
    const Underline = Loadable(() => import("../components/underline"))
    const BannerHeader = Loadable(() => import("../components/bannerHeader"));
    const VideoComponent = Loadable(() => import("../components/videoComponent"));
    // console.log(moduleObj,'platformPageObj')
    // console.log(moduleArray,'platformPageObj')
    const imgAlt = "enterprise ai"

    return (
        <div className={`platform-v3 ${isNavBarOpen ? "" : "no-scroll"}`}>
            <div className="page-content">
                {/* -------- Banner start -------- */}
                <div className="banner-wrapper">
                    <div className="page-wrapper">
                        <div className="page-banner">
                            <div className="banner-header">
                                <BannerHeader
                                    headingType={"bannerTitle"}
                                    header={platformPageObj["header-header"]}
                                    subHeader={platformPageObj["header-subHeader"]}
                                    line={"three-line"}
                                />
                            </div>

                            <div className="video-area">
                                <div className="video-inner">
                                    <h3>emPower Platform</h3>
                                    <div className="image-container-header">
                                        <VideoComponent
                                            video={productVideo}
                                            poster={platformPageObj["header-images"]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -------- Banner end -------- */}
                <Underline />

                {/* -------- section-01 -------- */}

                <div className="section-01">
                    <div className="page-wrapper" id="emPower">
                        <div className="content">
                            <div className="platform-sec-01-desktop-header">
                                <BannerHeader
                                    header={platformPageObj["section-01-header"]}
                                    line={"two-line"}
                                />
                            </div>
                            <div className="platform-empower">
                                <div className="platform-empower-details">
                                    <p className="empower-details">
                                        {platformPageObj["section-01-subHeader"]}
                                    </p>
                                </div>
                                <div className="platform-empower-img">
                                    <img
                                        src={`${process.env.STRAPI_URL + platformPageObj["section-01-images"]}`}
                                        alt="ractangle"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -------- section-01 end -------- */}

                <Underline />
                {/* -------- section-02  start what are data products -------- */}

                <div className="section-02">
                    <div className="page-wrapper" >
                        <div className="content">
                            <div>
                                <BannerHeader
                                    header={platformPageObj["section-02-header"]}
                                    line={"two-line"}
                                />
                            </div>
                            <div className="platform-data-products" id="whatAreDataProducts">
                                <div className="platform-data-products-details">
                                    <p>{platformPageObj["section-02-subHeader"]}</p>
                                    <span>{platformPageObj["section-02-paragraph"]}</span>
                                </div>
                                <div className="platform-data-products-img">
                                    <ul>
                                        {platformDataProducts.map((item, index) => (
                                            <li key={index}>
                                                <div className="platform-data-products-icon">
                                                    <div className="product-icon">
                                                        <img
                                                            src={`${process.env.STRAPI_URL + item.imageSrc}`}
                                                            alt={`Image ${index + 1}`}
                                                        />
                                                    </div>
                                                    <p>{Parser(item.header)}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -------- section-02 end -------- */}

                <Underline />

                {/* -------- section-03 start -------- */}

                <div className="section-03">
                    <div className="page-wrapper">
                        <div className="content">
                            <div>
                                <BannerHeader header="Modules" line={"single-line"} />
                            </div>
                            <div className="modules-container">
                                <Modules moduleData={moduleData} learnMore={true} />
                            </div>
                            <div className="modules-container-mobile">
                                <ModulesMobile moduleData={moduleData} learnMore={true} />
                                <div className="modules">
                                    <div className="module-details">
                                        <div className="module-heading">
                                            <BannerHeader
                                                header={'emPower Foundation'}
                                                line={"single-line"}
                                                class="heading-md"
                                                headingType="h3"
                                            />
                                        </div>
                                        <div className="module-img">
                                            <span>  Data Ingestion & Unification</span>

                                            <div className="module-ract-img">
                                                <img src={`${process.env.STRAPI_URL}/uploads/emp_Foundation_cf831e17c6.png`} alt={imgAlt} />
                                            </div>
                                            <div className="module-text">
                                                <p>MODULE 1 - emPower Foundation</p>
                                            </div>
                                        </div>
                                        <div className="module-text">
                                            <p>Scalable and seamless data ingestion & transformation
                                                from any data source</p>
                                        </div>
                                        <Link
                                            to={`/empower-foundation`}
                                            state={"blogs"}
                                            name="empfoundation"
                                            target="_blank"
                                        >
                                            <div className="module-button">
                                                <div>
                                                    <p>Learn More</p>
                                                </div>
                                                <div className="arrow-white">
                                                    <img src={arrowWhite}
                                                        alt={imgAlt} />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="modules">
                                    <div className="module-details">
                                        <div className="module-heading">
                                            <BannerHeader
                                                header={'emPower Pryzm'}
                                                line={"single-line"}
                                                class="heading-md"
                                                headingType="h3"
                                            />
                                        </div>
                                        <div className="module-img">
                                            <span>For Data Observability</span>

                                            <div className="module-ract-img">
                                                <img src={`${process.env.STRAPI_URL}/uploads/emp_Pryzm_162d1f8f3a.png`} alt={imgAlt} />
                                            </div>
                                            <div className="module-text">
                                                <p>MODULE 2 - emPower Pryzm</p>
                                            </div>
                                        </div>
                                        <div className="module-text">
                                            <p>Timely delivery of trusted data with proactive
                                                identification of incidents</p>
                                        </div>
                                        <Link
                                            to={`/empower-pryzm`}
                                            state={"blogs"}
                                            name="empPryzm"
                                            target="_blank"
                                        >
                                            <div className="module-button">
                                                <div>
                                                    <p>Learn More</p>
                                                </div>
                                                <div className="arrow-white">
                                                    <img src={arrowWhite} alt={imgAlt} />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -------- section-03 end -------- */}

                <Underline />
                {/* -------- section 04 start -------- */}

                <div className="section-04" >
                    <div className="page-wrapper">
                        <RequestDemo />
                    </div>
                </div>

                {/* -------- section 04 end -------- */}

                <Underline />
            </div>
        </div>
    )
}

export default PlatformV3
