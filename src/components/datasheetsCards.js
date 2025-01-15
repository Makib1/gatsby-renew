import React from "react"
import empFoundationImg from "../static/images/Datasheets/foundation.png"
import pryzmImg from "../static/images/Datasheets/pryzmImage.png"
import "../static/style/componentStyle/download-btn.scss"
import empowerLumiqDataSheet from "../static/pdfs/emPOWER_DataSheet_190623_compressed.pdf"
import pryzmDatasheet from "../static/pdfs/PRYZM_Datasheet.pdf"
import empowerFoundationDataSheet from "../static/pdfs/emPower_Foundation_Datasheet.pdf"
import EbookDataSheet from "../static/pdfs/Ebook.pdf"
import lumiqDataSheet from "../static/pdfs/LUMIQ_Data_Sheet.pdf"
import lumiqInfoSheet from "../static/pdfs/LUMIQ_infosheet_compressed.pdf"
import CustomerSuccessBook from "../static/pdfs/CustomerSuccessBook.pdf"
import "../static/style/componentStyle/underlineButton.scss"


const truncateText = (text, maxLength) => {
  if (text?.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const DatasheetCard = (props) => {
  const truncatedTitle = truncateText(props?.val.title, 75); 
  const imageMapping = {
    "empFoundationImg": empFoundationImg,
    "pryzmImg": pryzmImg,
    // Add more mappings for other images as needed
  };
  const text=props.val.title;
  const pdf=props.val.pdf;
  const selectedImage = imageMapping[props.val.imageUrl];
  return (
    <>
      {/* <Link className="blogs" to={`/resources/detailedBlog/${props?.val?.attributes?.slug}`} state={{ data: props }} target="_blank" name="blog" > */}
      <a className="blogs"
          href={
            pdf === "PRYZM_Datasheet.pdf"
              ? pryzmDatasheet
              : pdf === "emPOWER_DataSheet.pdf"
              ? empowerFoundationDataSheet
              : pdf === "CustomerSuccessBook.pdf"
              ? CustomerSuccessBook
              : pdf === "Ebook.pdf"
              ? EbookDataSheet
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
              :"LUMIQ_DataSheet"
          }
        >
      {/* <div className="blogs"> */}
        <div className="blog-header">
          {/* <p>{props?.val?.attributes?.date}</p> */}
          <div className="blog-img">
            <img className="blog-image" src={selectedImage} alt="img-select"/>
            
          </div>
          <span className="blog-title">{truncatedTitle}</span>
        </div>
        <div className="blog-footer">
          {/* <p className="blog-title">{truncateddescription}</p> */}
          <div className="read-more">
                <p>Download</p>
          </div>
        </div>
      {/* </Link> */}
      {/* </div> */}
      </a>
    </>
  )
}

export default DatasheetCard
