import React, { useRef } from "react"
import "../static/style/componentStyle/circle-btn.scss"
import { Link } from "gatsby"
import downloadFile from '../static/pdfs/LUMIQ_Data_Sheet.pdf'
import ambassadorPdf from "../static/pdfs/LUMIQ-Ambassador-Program.pdf"

const CircleBtn = props => {
  const downloadLinkRef = useRef(null);
  const handleDownloadAndNavigate = (e) => {
    e.preventDefault();
    if (downloadLinkRef.current) {
      downloadLinkRef.current.href = ambassadorPdf;
      downloadLinkRef.current.download = 'lumiq-ambassdor-program.pdf';
      downloadLinkRef.current.click();
    }
    window.open(ambassadorPdf, '_blank');
  };
  return (
    <>
      {props?.pdf ? (
        <>
          {props.pdf === "LUMIQ_Brochure.pdf" && <a href={downloadFile} download={`LUMIQ_Brochure.pdf`} name="dataSheet">
            <div className="platform-tour">
              <div className="platform-box">
                <div className="hover-button btn rounded">
                  <p className="btn-text text-black tw-pl-24">{props.BtnText}</p>
                </div>
              </div>
            </div>
          </a>}
          {
            props.pdf === "LUMIQ-Ambassador-Program.pdf" && <><a href={ambassadorPdf} download={`lumiq_ambassdor_program.pdf`} target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadAndNavigate}>
              <div className="platform-tour">
                <div className="platform-box">
                  <div className="hover-button btn rounded">
                    <p className="btn-text text-black tw-pl-24">{props.BtnText}</p>
                  </div>
                </div>
              </div>
            </a>
              <a ref={downloadLinkRef} style={{ display: 'none' }}></a>
            </>
          }
        </>

      ) : (
        <Link to={`${props?.url}`} name="get-startd">
          <div className="platform-tour">
            <div className="platform-box">
              <div className="hover-button btn rounded">
                <p className="btn-text text-black tw-pl-24">{props.BtnText}</p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}

export default CircleBtn
