import React, { useState } from "react"
import "../static/style/pageStyle/data-ai.scss"
import BannerHeader from "../components/bannerHeader"
import Underline from "../components/underline"
import Parser from "html-react-parser"
import BlackBtn from "../components/black-btn"
import OfferingGovernance from "../components/offering-governance"
import TestimonialSlider from "../components/testimonial-slider"
import AWSBanner from "../static/images/data-ai/banner.png";
import AWSBannerMobile from "../static/images/data-ai/banner-mobile.svg";
import AIGovernance from "../static/images/data-ai/ai-governance-vertical.jpg";
import Empowerpryzm from "../static/images/data-ai/empower-pryzm-vertical.jpg";
import Governanceconsulting from "../static/images/data-ai/governance-consulting-vertical.jpg";

import { Link } from "gatsby"

const AwsConsultingPartner = props => {

    const [isNavBarOpen, setIsNavBarOpen] = useState(true);
    const offeringContent = [
        {
            iconUrl:Governanceconsulting,
            heading: "Governance Consulting",
            features: `Detailed governance policies & standards (GDPR/HIPAA aligned)*
            Clear role definitions (Data Stewards, Governance Officers)*
            Comprehensive data management strategy & metrics*
            Structured change management & training`,
            benefits: `Consistent governance framework*
            Reduced data silos & inconsistencies*
            Clear data ownership & accountability*
            Standardized data definitions across the organization`
        },
        {
            iconUrl:Empowerpryzm,
            heading: "emPower Pryzm (Data Reliability & Observability)",
            features: `Data Quality rules & tracking (TDQ/BDQ)*
            Centralized Data Catalog & Glossary*
            Granular Data Lineage & Metadata Management*
            Incident Discovery for real-time anomaly alerts`,
            benefits: `Ensures data accuracy & reliability*
            Automated monitoring & real-time alerts*
            Faster resolution of data issues*
            Clear, unified visibility into data quality`
        },
        {
            iconUrl:AIGovernance,
            heading: "AI Governance (MLOps)",
            features: `End-to-end Model Lifecycle Management (dev to deploy)*
            Version Control & Feature Store*
            Advanced Monitoring (performance, data drift)*
            Secure model auditing & encryption`,
            benefits: `Streamlined model deployment & updates*
            Enhanced model reliability & performance*
            Faster, more transparent AI/ML processes*
            Secure access & data protection`
        }
    ]

    const testimonials = [
        {
            heading: "Large Asset Management Company managing AUM of $9T+",
            content: `Setup Pryzm to enable asset monitoring and data reliability framework for the technology platform*
            Implementing Smart incident discovery with automatic dynamic threshold discovery and enhanced performance monitoring*
            Enabled Automated data quality monitoring*
            Self-Service BI & customizable dashboards and reporting to be enabled*
            Implemented solution to manage 5K+ data pipelines in progress`
        },
        {
            heading: "Large General Insurance Company with 15M+ Customers",
            content: `Provided Consulting services to help customer implement data governance on an organization-wide level*
                    Deploying Pryzm for centralized data observability and reliability*
                    Projected benefits of 30% reduction in MTTR and 50% reduction in duplicate incidents*
                    Enabled domain classification along with authentication and authorization, along with seamless RBAC enablement*`
        },
        {
            heading: "Large Bank with 22M+ Customers",
            content: `Implementing AI Governance & MLOps framework for efficient model lifecycle management*
                    Built a centralized feature store, managing 700+ real-time and 3000+ batch features*
                    Establishing version control and model registry to ensure consistent model deployment and tracking*
                    Enabling comprehensive monitoring and observability with prediction logging, data quality checks, and compliance tracking`
        },
        {
            heading: "Large Bank with 1M+ Customers",
            content: `Providing Data Governance Consulting Services to establish structured governance framework*
                    Providing recommendations across Data Policy, Data Quality, Metadata Management, etc.*
                    Setup the best practices around Data Privacy & Security, Lifecycle Management, and Regulatory Compliances*
                    Establishing risk mitigation frameworks and breach response measures`
        }
    ]
    return (
        <div
            className={`data-ai ${isNavBarOpen ? "" : "no-scroll"}`}
        >
            <div className="page-content">
                <div className="banner-wrapper">

                    <div className="page-wrapper">
                        <div className="page-banner">
                            <Link to="/get-started">
                                <img className="desktop-image" src={AWSBanner} alt="AWS Banner" />
                                <img className="mobile-image" src ={AWSBannerMobile} alt="aws banner mobile" />
                            </Link>
                            {/* <div className="banner-header">
                                <BannerHeader headingType={"bannerTitle"} header={"LUMIQ is a launch partner for AWS’s Data and AI Governance and Security"} class="heading-md" line={"three-line"} />
                            </div>
                            <div className="paragraph">
                                <p>{"Energizing your Governance Strategy with LUMIQ and AWS"}</p>
                            </div> */}
                            {/* <div className='btn-area'>
                                <a href={"/get-started"}><BlackBtn text={"Contact Us"} /></a>
                            </div> */}

                        </div>
                    </div>
                </div>
                <Underline />

                <div className="second-part">

                    <div className="page-wrapper">
                        <div className="page-banner">
                            <div className="banner-header">
                                <BannerHeader headingType={"md"} header={"Empower Your Data & AI Journey with LUMIQ and AWS"} class="heading-md" line={"single-line"} />
                            </div>
                            <div className="paragraph">
                                <p>{Parser(
                                    `At LUMIQ, we understand that data is your most valuable asset and ensuring complete trust on the data is critical to business success. That's why we are proud to announce that we are one of the vey few selected launch partners across the globe for the Data & AI Governance Initiative.
                                    <br /><br />
                                    With our 11+ years of delivering comprehensive data-led solutions for customers and extensive expertise in implementing governance solutions across Data and AI, we are bringing together our expertise Data Governance, AI Governance and Security to enable customers ensure data reliability.
                                    `
                                )}
                                </p>
                            </div>
                            {/* <div className='btn-area'>
                                <a href={"/get-started"}><BlackBtn text={"Know More"} /></a>
                            </div> */}

                        </div>
                    </div>
                </div>
                <Underline />
                <div className="our-offerings">
                    <div className="page-wrapper">
                        <div className="slider">
                            {/* <div className="image-bg">
                                    <img src={OurOffBgImage} />
                                </div> */}
                            <div className="slide-container">
                                <OfferingGovernance content={offeringContent} />
                            </div>
                        </div>
                        <div className="slider-mobile">
                            <div className="slide-container">
                                <OfferingGovernance content={offeringContent} />
                            </div>
                        </div>
                    </div>
                </div>

                <Underline />
                <div className="why-lumiq-aws">
                    <div className="page-wrapper">
                        <div className="main-container">
                            <div className="heading">
                                <BannerHeader header={"Why LUMIQ + AWS?"} class="heading-lg" line={"single-line"} />
                            </div>
                            <div className="para">
                                <p>Build a Holistic Data Ecosystem Leveraging LUMIQ and AWS</p>
                            </div>
                            <ul>{
                                `The partnership between LUMIQ and AWS brings together unmatched expertise and cutting-edge technology to revolutionize how companies govern and secure their data*
                            AWS provides a robust, scalable, and secure cloud platform and LUMIQ complements this by delivering proven industry expertise and governance solutions*
                            Together, LUMIQ and AWS empower organizations to fast-track their data governance and modernization journeys*
                            By leveraging AWS's scalable infrastructure and LUMIQ's tailored approach, companies can confidently unlock the value of their data while future-proofing their operations for innovation and growth`.split('*').map((item, index) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                            <div className='btn-area'>
                                <a href={"/aws-partner"} target="_blank"><BlackBtn text={"Know More"} /></a>
                            </div>
                        </div>
                    </div>
                </div>


                <Underline />
                <div className="testimonials">
                    <div className="page-wrapper">
                        <div className="main-container">
                            <div className="heading">
                                <BannerHeader header={"Trusted by Leading Organizations"} class="heading-lg" line={"single-line"} />
                            </div>
                            <div className="para">
                                <p>Real Results. Real Confidence.</p>
                            </div>
                            <div className="slider">
                                {/* <div className="image-bg">
                                    <img src={OurOffBgImage} />
                                </div> */}
                                <div className="slide-container">
                                    <TestimonialSlider content={testimonials} />
                                </div>
                            </div>
                            {/* <div className="slider-mobile">
                            <div className="slide-container">
                                <TestimonialSlider content={testimonials} />
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>


                <Underline />

                <div className="CTA">
                    <div className="page-wrapper">
                        <div className="main-container">
                            {/* Ready to Govern Your Data and AI with Confidence? */}
                            <h2>Ready to Govern Your Data and AI with Confidence?</h2>
                            <p>Join the growing number of organizations that are building robust governance frameworks, ensuring regulatory compliance, and unlocking sustainable innovation in data and AI. </p>
                            <div className='btn-area'>
                                <a href={"/get-started"}><BlackBtn text={"Learn More"} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Underline />
            </div>
        </div >
    )
}

export default AwsConsultingPartner
