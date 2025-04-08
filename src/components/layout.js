/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Header from "./header"
import { Footer } from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-5 py-10 md:px-16 space-y-10 md:space-y-16">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
