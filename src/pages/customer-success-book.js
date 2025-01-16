import React from "react"
import CustomerSuccesspdf from "../static/pdfs/CustomerSuccessBook.pdf"

function CustomerSuccessBook() {

  return (
    <div className="pdf-wrapper no-scroll" >
      <div className="page-wrapper">
        <div className="pdf-viewer">
          <embed
            src={CustomerSuccesspdf  + "#toolbar=0"}
            width="100%"
            type="application/pdf"
            title="PDF Viewer"
            height="100%"
            sandbox="allow-same-origin allow-scripts"
          />
        </div>
      </div>
    </div>
  )
}



export default CustomerSuccessBook
