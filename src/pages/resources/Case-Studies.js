import React, { useState, useEffect } from "react"
import ResourceCmp from "../../components/resourceComponent"
import { FetchedResourcePageData } from "../../services/helperFunctions"

const CaseStudies = (props) => {
  console.log(props,"sdasdfdfds")
  const {tabs} = FetchedResourcePageData();
  const slugUrl =(props?.location?.pathname)?.split("/");
  let slug = slugUrl[2];
  const matchedItem = tabs.find(item => item.id === slug);
  const label = matchedItem ? matchedItem.label : null;
  return (
    <>
    <ResourceCmp header={label} label={slug}/>
    </>
  )
}

export default CaseStudies
