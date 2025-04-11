import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { Servicios } from "../components/servicios/Servicios"
import { SectionDesign } from "../components/servicios/SectionDesign"
import { MarcasTrabajo } from "../components/servicios/MarcasTrabajos"

const ServiciosPage = () => {
  return (
    <Layout>
      <Servicios />
      <SectionDesign />
      <MarcasTrabajo />
    </Layout>
  )
}

export const Head = () => <Seo title="Servicios" />

export default ServiciosPage
