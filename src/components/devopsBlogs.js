import React, { useEffect, useState, useRef } from "react"
import { useQuery, gql } from "@apollo/client"
import BlogCard from "./blog-card"
import '../static/style/componentStyle/blogs.scss'
import "../static/style/componentStyle/navMenu.scss"

const DevopsBlogs = ({slug}) => {

  const BLOG_QUERY = gql`
    query blogs($slug: String!) {
        blogs(filters: { slug: { eq: $slug } }) {
            data{
            attributes{
                date
                header
                imageUrl
                description
                slug
                blogType
            }
            }
        }
    }
  `
//   const slug = "getting-started-with-aws-dev-ops-on-amazon-eks blogDataFetched"
const { data,error } = useQuery(BLOG_QUERY, {variables: { slug },});
const val = {val:data?.blogs?.data[0],}
// console.log(val,error,'blog-card')
  return (
    <>
        {data&&<BlogCard val={val?.val}/>}
    </>
  )
}

export default DevopsBlogs
