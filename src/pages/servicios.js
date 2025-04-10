import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { Servicios } from "../components/servicios/Servicios"
import { SectionDesign } from "../components/servicios/SectionDesign"
import { ChildrenDesplegable } from "../components/servicios/ChildrenDesplegable"
import { ImagenesDesplegable } from "../components/servicios/ImagenesDesplegable"
import { MarcasTrabajo } from "../components/servicios/MarcasTrabajos"

const ServiciosPage = () => {
  return (
    <Layout>
      <Servicios />
      <SectionDesign />
      <ChildrenDesplegable />
      <ImagenesDesplegable />
      <MarcasTrabajo />
    </Layout>
  )
}

export const Head = () => <Seo title="Servicios" />

export default ServiciosPage
