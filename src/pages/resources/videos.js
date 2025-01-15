import React, { useState, useEffect } from "react"
import ResourceCmp from "../../components/resourceComponent"
import { FetchedResourcePageData } from "../../services/helperFunctions"
import ResourceCmpVideo from "../../components/ResourceComponentVideos";

const Videos = (props) => {
  // console.log(videoData,resourceUrl,"lumiq");
  console.log(props,"propsss")
  return (
    <>
    <ResourceCmpVideo />
    </>
  )
}

export default Videos
