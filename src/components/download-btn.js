import React from "react"
import "../static/style/componentStyle/download-btn.scss"
import pryzmDatasheet from "../static/pdfs/PRYZM_Datasheet.pdf"
import empowerFoundationDataSheet from "../static/pdfs/emPower_Foundation_Datasheet.pdf"
import lumiqDataSheet from "../static/pdfs/LUMIQ_Data_Sheet.pdf"
import CustomerSuccessBook from "../static/pdfs/CustomerSuccessBook.pdf"
import "../static/style/componentStyle/underlineButton.scss"
import downloadIcon from "../static/images/component-img/download_black.svg"
import GcpDataSheat from "../static/pdfs/gcp_data_sheat.pdf"

function DownloadBtn({ text, pdf }) {
  return (
    <>
      {pdf ? (
        <a
          href={
            pdf === "PRYZM_Datasheet.pdf"
              ? pryzmDatasheet
              : pdf === "emPOWER_DataSheet.pdf"
              ? empowerFoundationDataSheet
              : pdf === "CustomerSuccessBook.pdf"
              ? CustomerSuccessBook
              : pdf === "Ebook.pdf"
              ? CustomerSuccessBook
              : pdf === "gcp_data_sheat.pdf"
              ? GcpDataSheat
              : lumiqDataSheet
              
          }
          download={
            pdf === "PRYZM_Datasheet.pdf"
              ? "PRYZM_Datasheet"
              : pdf === "emPOWER_DataSheet.pdf"
              ? "emPower_Foundation_Datasheet"
              : pdf === "LUMIQ_infosheet.pdf"
              ? "LUMIQ_infosheet "
              : pdf === 'CustomerSuccessBook.pdf'
              ? 'Customer Success Book'
              : pdf === "Ebook.pdf"
              ? 'Gen AI Strategy'
              : pdf === "gcp_data_sheat.pdf"
              ? 'Our-GenAI-AIML-Solutions'
              :"LUMIQ_DataSheet"
          }
        >
          <button className="right-arrow-btn download-btn underline-remove-effect">
            <p>{text}</p>
            <span className="arrow">
              <img src={downloadIcon} alt="download-icon" />{" "}
            </span>
          </button>
        </a>
      ) : (
        <button className="right-arrow-btn download-btn  underline-remove-effect">
          <p>{text}</p>
          <span className="arrow">
            <img src={downloadIcon} alt="download-icon"/>{" "}
          </span>
        </button>
      )}
    </>
  )
}

export default DownloadBtn
