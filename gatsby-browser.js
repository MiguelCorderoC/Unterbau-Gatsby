/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import "./src/styles/global.css"
import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
      rel="stylesheet"
      key="orbitron-font"
    />,
  ])
}
