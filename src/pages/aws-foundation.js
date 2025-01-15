import React, { useState, useRef } from "react"
import "../static/style/pageStyle/aws-foundation.scss"
import { graphql, useStaticQuery } from "gatsby"
import Underline from "../components/underline"
import Parser from "html-react-parser"
import BlackBtn from "../components/black-btn"
import { destructureData } from "../services/helperFunctions";


const AwsConsultingPartner = props => {
    const data = useStaticQuery(
        graphql`
          {
            allAwsFoundation {
                nodes {
                    journey {
                        attributes {
                            Header
                            cmpName
                            paragraph
                            imageUrl
                            dynamicCmp {
                                cardHeading
                                content
                                iconUrl
                                imageUrl
                                id
                            }
                        }
                    }
                }
            }
          }
        `
    )
    //console.log(data,JSON.stringify(data), "hello->");
    const destructuredData = destructureData(data);
    console.log(destructuredData, "hello->");


    const [isNavBarOpen, setIsNavBarOpen] = useState(true);
    const [partneringIndex, setPartneringIndex] = useState(0);
    const [activeTab, setActiveTab] = useState(0)
    const [mobileActiveTab, setMobileActiveTab] = useState(false)
    const [activeIndexforImage, setActiveIndexforImage] = useState(0);
    let count = 1;

    const [dActiveTab, setDActiveTab] = useState(true)
    const [mdActiveTab, setMDActiveTab] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(isOpen);
    const handleIsOpenModal = (isModalOpen) => {
        setIsModalOpen(!isModalOpen);
        setIsOpen(!isOpen)
    }
    
    const changePartneringData = (index) => {
        setPartneringIndex(index);
    }

   

    

    
    return (
        <div
            className={`aws-foundation ${isNavBarOpen ? "" : "no-scroll"}`}
        >
            <div className="page-content">

                {/* banner section  */}
                <div className="banner-section">
                    <div className="page-wrapper">
                        <div className="main-container">
                            <div className="contents">
                                <div className="left-content">
                                    <div className="heading">
                                        <span>Proud Launch Partner</span>
                                    </div>
                                    <h1>{destructuredData?.banner?.header}</h1>
                                    <p>{destructuredData?.banner?.paragraph}</p>
                                    <a href="https://shorturl.at/niXrB" target="_blank">Know More</a>
                                </div>
                                <div className="right-image">
                                    <img src={`${process.env.STRAPI_URL + destructuredData?.banner?.imageUrl}`} alt="AWS logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Underline />

                {/* below image  */}
                {/* <div className="image-section">
                    <div className="page-wrapper">
                        <img src={banner} />
                    </div>
                </div>
                <div className="image-section-mobile">
                    <div className="page-wrapper">
                        <img src={bannerMobile} />
                    </div>
                </div>
                <Underline /> */}

                <div className="del-exp">
                    <div className="page-wrapper">
                        <div className="main-container">
                            <div className="left-content" >
                                <h2>{destructuredData?.cmp1?.header}
                                </h2>
                                <p>{destructuredData?.cmp1?.paragraph}</p>
                            </div>
                            <div className="right-image-click" >
                                <div className="images-list">
                                    {destructuredData?.cmp1?.dynamicComponents.map((item, index) => (
                                        <div
                                            key={item?.id}
                                            className={`child-image ${activeIndexforImage === index ? 'active' : 'inactive'}`}
                                            onClick={() => setActiveIndexforImage(index)} >
                                            <img src={`${process.env.STRAPI_URL + item?.iconUrl}`} alt={"imgAlt"} />
                                        </div>))}
                                </div>
                                <div className="image-content">
                                    <h3>{destructuredData?.cmp1?.dynamicComponents[activeIndexforImage].cardHeading}</h3>
                                    <p>{destructuredData?.cmp1?.dynamicComponents[activeIndexforImage].content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Underline />
                <div className="partnering-foundation">
                    <div className="page-wrapper">
                        <div className="main-container">
                            <h2>{destructuredData?.cmp2?.header}</h2>
                            <p className="para">{destructuredData?.cmp2?.paragraph}</p>
                            <div className="content">
                                <div className="headers">
                                    {
                                        destructuredData?.cmp2?.dynamicComponents?.map((item, index) => (
                                            <div key={item?.id} className={partneringIndex === index ? "active-heading" : "heading"} onClick={() => { changePartneringData(index) }}>
                                                <p>0{index + 1}&nbsp; &nbsp;{item.cardHeading}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="explained-para">
                                    <p>{destructuredData?.cmp2?.dynamicComponents[partneringIndex]?.content}</p>
                                </div>
                            </div>
                            <div className="content-mobile">
                                <div className="headers">
                                    {
                                        destructuredData?.cmp2?.dynamicComponents?.map((item, index) => (
                                            <div className={partneringIndex === index ? "active-heading" : "heading"} onClick={() => { changePartneringData(index) }}>
                                                <h3>0{index + 1}&nbsp; &nbsp; <span>{item.cardHeading}</span></h3>
                                                {partneringIndex === index && <p className="para-content">{item.content}</p>}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Underline />
                <div className="image-section">
                    <div className="page-wrapper">
                        <img src={`${process.env.STRAPI_URL + destructuredData?.cmp3?.imageUrl}` } />
                    </div>
                </div>
                <div className="image-section-mobile">
                    <div className="page-wrapper">
                        <img  src={`${process.env.STRAPI_URL + destructuredData?.cmp3?.dynamicComponents[0]?.imageUrl} `} />
                    </div>
                </div>
                <Underline />
                <div className="build-holistic">
                    <div className="page-wrapper">
                        <div className="content">
                            <div className="aws-cons-left-details">
                                <h2>{destructuredData?.cmp4?.header}</h2>
                                <p>{Parser(destructuredData?.cmp4?.paragraph)}</p>
                            </div>
                            <div className="aws-cons-right-details">
                                <img src={`${process.env.STRAPI_URL + "/uploads/aws_1f350205d5.png"}`} alt={"imgAlt"} />
                            </div>
                        </div>
                    </div>
                </div>

                <Underline />
                <div className="genai-adoption">
                    <div className="page-wrapper">
                        <div className="main-container">
                            <h2>{destructuredData?.cmp5?.header}</h2>
                            <div className="content">
                                {destructuredData?.cmp5?.dynamicComponents?.map((content, index) => (
                                    <>
                                        <div className="content-details" key={content?.id} >
                                            <h3 className="benefit-heading">
                                                {Parser(content.cardHeading)}
                                            </h3>
                                            <div className="fs-link">
                                                <p>{content.content}</p>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <Underline />
                {/* <div className="lumiq-offering">
                    <div className="page-wrapper">
                        <div className="main-container">
                            <h2>LUMIQ's Offerings That Empower GenAI Success</h2>
                            <div className="cards-container">
                                {
                                    lumiqOfferingCard.map((item, index) => (
                                        <div className="card">
                                            <div className="icon">
                                                <img src={item.icon} />
                                            </div>
                                            <h3>{item.header}</h3>
                                            <p>{item.paragraph}</p>

                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <Underline /> */}
                <div className="empowering-financial">
                    <div className="page-wrapper">
                        <div className="main-container">
                            <h2>{destructuredData?.cmp6?.header}</h2>
                            <p>{destructuredData?.cmp6?.paragraph}</p>
                            <div className='btn-area'>
                                <a href={"/get-started"}><BlackBtn text={"Contact Us"} /></a>
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
