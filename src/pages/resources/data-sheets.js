import React, { useState, useEffect } from "react"
import ResourceCmp from "../../components/resourceComponent"
import { FetchedResourcePageData } from "../../services/helperFunctions"
import ResourceCmpDataSheets from "../../components/ResourceCmpDataSheets";

const Data = (props) => {
  const {tabs} = FetchedResourcePageData();
  const slugUrl =(props?.location?.pathname)?.split("/");
  let slug = slugUrl[3];
  const matchedItem = tabs.find(item => item.id === slug);
  const label = matchedItem ? matchedItem.label : null;
  return (
    
    <><ResourceCmpDataSheets header={label} label={slug}/></>
  )
}

export default Data
