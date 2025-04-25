import * as React from "react"
import { Suscribirme } from "./footer/Sucribirme"
import { AvisoPrivacidad } from "./footer/AvisoPrivacidad"
import { ContactoFormulario } from "./footer/ContactoFormulario"
import { useLocation } from "@reach/router"
export const Footer = () => {
  const location = useLocation()
  return (
    <footer
      className={` bg-unterbau-dark text-unterbau-white px-5 py-10 lg:px-16 space-y-14 lg:space-y-14 ${
        location.pathname === "/contacto/" ? "bg-unterbau-white" : ""
      }`}
    >
      <ContactoFormulario />
      <Suscribirme />
      <AvisoPrivacidad />
    </footer>
  )
}
