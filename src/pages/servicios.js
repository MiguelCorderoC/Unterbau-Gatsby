import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { Servicios } from "../components/servicios/Servicios"
import { SectionDesign } from "../components/servicios/SectionDesign"
import { MarcasTrabajo } from "../components/servicios/MarcasTrabajos"
import { useEffect } from "react"

const ServiciosPage = () => {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        const yOffset = -80
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y })
      }
    }
  }, [])
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
