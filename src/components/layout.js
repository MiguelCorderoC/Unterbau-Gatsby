/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Header from "./header"
import { Footer } from "./Footer"
import { useLocation } from "@reach/router"

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <>
      <div className="font-museo border border-black md:border-none">
        <Header />
        <main
          className={`px-5 py-10 lg:px-16 space-y-10 lg:space-y-16 lg:pt-28 pt-20 ${
            location.pathname === "/contacto/" && "py-0 -mt-20"
          }`}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
