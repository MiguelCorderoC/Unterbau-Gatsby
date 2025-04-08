import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { NuestrosServicios } from "../components/index/NuestrosServicios"
import { NuestroProceso } from "../components/index/NuestroProceso"
import { ProcesosSeccion } from "../components/index/ProcesosSeccion"
import { MundoHumano } from "../components/index/MundoHumano"
import { ProductosRentables } from "../components/index/ProductosRentables"
import { SectionDesign } from "../components/index/SectionDesing"

const IndexPage = () => (
  <Layout>
    <ProductosRentables />
    <NuestrosServicios />
    <SectionDesign />
    <NuestroProceso />
    <ProcesosSeccion />
    <MundoHumano />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
