import * as React from "react"
import Layout from "../components/layout"
import { BlogSeccion } from "../components/blog/BlogSeccion"
import { PostSection } from "../components/blog/PostSection"

const BlogPage = () => {
  return (
    <Layout>
      {" "}
      <span className="flex justify-center text-7xl lg:text-[105px] lg:font-black">
        BLOG
      </span>
      <BlogSeccion />
      <PostSection />
      <BlogSeccion />
    </Layout>
  )
}

export default BlogPage
