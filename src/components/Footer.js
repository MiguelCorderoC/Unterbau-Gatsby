import * as React from "react"
import { Suscribirme } from "./footer/Sucribirme"
import { AvisoPrivacidad } from "./footer/AvisoPrivacidad"
import { ContactoFormulario } from "./footer/ContactoFormulario"

export const Footer = () => {
  return (
    <footer className=" bg-unterbau-dark text-unterbau-white px-5 py-10 md:px-16 space-y-8 md:space-y-14">
      <ContactoFormulario />
      <Suscribirme />
      <AvisoPrivacidad />
    </footer>
  )
}
