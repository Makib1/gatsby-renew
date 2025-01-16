import React, { useRef } from 'react';
import "../static/style/pageStyle/AWSAmbassadorPage.scss"
import bannerImage from "../static/images/ambassdor/banner.png"
import BlackBtn from '../components/black-btn';
import secondImage from "../static/images/ambassdor/second-image.png"
import Underline from '../components/underline';
import GreyArrow from "../static/images/left-arrow-grey.svg"
import CircleBtn from '../components/circleBtn';
import pdf from "../static/pdfs/LUMIQ-Ambassador-Program.pdf"


const AWSAmbassadorPage = () => {
  const downloadLinkRef = useRef(null);
  const handleDownloadAndNavigate = (e) => {
    e.preventDefault();
    if (downloadLinkRef.current) {
      downloadLinkRef.current.href = pdf;
      downloadLinkRef.current.download = 'lumiq-ambassdor-program.pdf';
      downloadLinkRef.current.click();
    }
    window.open(pdf, '_blank');
  };
  const financialServices = [
    {
      header: "Increased Visibility",
      paragraph: "Gain recognition through publications and events."
    },
    {
      header: "Exclusive Events",
      paragraph: "Attend global and regional meetups with experts."
    },
    {
      header: "Innovation Credits",
      paragraph: "Access credits to drive solutions."
    },
    {
      header: "Global Access",
      paragraph: "Connect with top AWS Ambassadors worldwide."
    },
    {
      header: "Exclusive SWAG",
      paragraph: "Enjoy unique merchandise and recognition for your contributions."
    },
  ]
  const formLink = "https://forms.office.com/pages/responsepage.aspx?id=zgJ8WJSyu0SP1g9WlVCNKPm9kW3UjW5Fvdwvjm63kY9UM1pFUUg2MTlRQ1Q5TE9OV1NaRjVSUElVSi4u&route=shorturl";

  return (
    <div className="aws-ambassador-page">
      <div className='page-content'>
        <div className="banner-section">
          <div className="page-wrapper">
            <div className='image-part'>
              <img src={bannerImage} />
            </div>
            <div className='content-section'>
              <h1>Become part of the exclusive circle as AWS Ambassador and elevate your presence in the cloud computing world.</h1>
              <div className='btn-area'>
                <a href={formLink} target='_blank'><BlackBtn text={"Be A Part Of The Program"} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="image-section">
          <div className="page-wrapper">
            <img
              src={secondImage}
              alt="Ambassadors collaborating"
            />
          </div>
        </div>

        <Underline />

        <div className="about-section">
          <div className="page-wrapper">
            <h2>Own the Stage & Become an <span>AWS Ambassador</span></h2>
            <p>
              Fast-track your journey to AWS Ambassador status! Get expert training, certification support, and personalized mentorship. Shine at tech events, grow your thought leadership, and build your profile in the global community. It’s your time to lead!
            </p>
            <div className="btn-area">
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownloadAndNavigate}
              >
                <BlackBtn text="Download Program Details" />
              </a>
              <a ref={downloadLinkRef} style={{ display: 'none' }}></a>
            </div>
          </div>
        </div>
        <Underline />


        <div className="statistics-section">
          <div className="page-wrapper">
            <h2><span>Know AWS Ambassadors</span> by the Numbers</h2>
            <div className="stats-grid">
              <div className="stat">
                <h3>50</h3>
                <p>Total AWS Ambassadors in India.</p>
              </div>
              <div className="stat">
                <h3>20</h3>
                <p>Indian AWS Ambassadors who joined in 2024.</p>
              </div>
              <div className="stat">
                <h3>30</h3>
                <p>Youngest Indian Ambassador Age</p>
              </div>
            </div>
          </div>
        </div>

        <Underline />
        <div className="why-join-section">
          <div className="page-wrapper">
            <div className='head-content'>
              <h2>Why Join the <span>AWS Ambassador Program?</span></h2>
              <p>
                As an AWS Ambassador, you unlock a world of exclusive rewards including the prestigious gold-tier jacket—a symbol of your expertise and leadership within the AWS ecosystem.
              </p>

            </div>
            <div className="main-container">
              <div className="content">
                {financialServices.map((content, index) => (
                  <div className="content-details" key={index}>
                    <h3 className="heading-sm">{content.header}</h3>
                    <div className="fs-link">
                      <div className="fs-left-arrow">
                        <img src={GreyArrow} alt={"imgAlt"} />
                      </div>
                      <span className="fs-text">{content.paragraph}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Underline />

        <div className="fast-track-section">
          <div className="page-wrapper">
            <div className='head-content'>
              <h2>Your Fast-Track to Becoming an Ambassador</h2>
              <p>Unleash your potential, shape the future of cloud innovation, and join the ranks of leaders. Ready to make the leap? Here’s how:</p>
            </div>
            <div className='box-container'>
              <div className='box'>
                <h3>Build Your <br />Credentials </h3>
                <p>Achieve recognized certifications to showcase your cloud expertise.</p>
              </div>
              <div className='box'>
                <h3>Thought <br />Leadership</h3>
                <p>Share your expertise through blogs, events, and industry talks.</p>
              </div>
              <div className='box'>
                <h3>Drive Cloud<br />Success</h3>
                <p>Lead initiatives within your organization and meet partner goals.</p>
              </div>
              <div className='box'>
                <h3>Get Company <br />Support</h3>
                <p>Secure executive backing and apply with full endorsement.</p>
              </div>
              <div className='box'>
                <h3>Stay <br />Engaged</h3>
                <p>Keep your certifications current and continue contributing leadership content.</p>
              </div>

            </div>
          </div>
        </div>

        <Underline />
        <div className="next-step-section">
          <div className="page-wrapper">
            <h2 className='main-heading'>Ready to Take the Next Step?</h2>
            <div className='content'>
              <p className='para'>Transform your career, join the ranks of Ambassadors, and wear the Golden Jacket with pride!
              </p>
              <div className='btn-area'>
                <CircleBtn BtnText="Know More About Program" pdf={"LUMIQ-Ambassador-Program.pdf"} />
                <a ref={downloadLinkRef} style={{ display: 'none' }}></a>
              </div>
            </div>
          </div>
        </div>
        <Underline />

      </div>
    </div>
  );
};

export default AWSAmbassadorPage;
