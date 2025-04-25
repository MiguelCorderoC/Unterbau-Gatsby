import * as React from "react"
import imgUnterbau from "../../assets/logos/logo_unterbau_negro.png"
import imgUnterbauBlanco from "../../assets/logos/logo_unterbau_blanco.png"
import { useLocation } from "@reach/router"

export const AvisoPrivacidad = () => {
  const location = useLocation()
  return (
    <section
      className={`space-y-10 ${
        location.pathname === "/contacto/"
          ? "bg-unterbau-white -mx-5 text-unterbau-dark"
          : "bg-unterbau-dark"
      }`}
    >
      {" "}
      <article
        className={`space-y-10 ${
          location.pathname === "/contacto/" ? "-mx-0" : "-mx-5"
        }`}
      >
        <div
          className={`h-[1px] ${
            location.pathname === "/contacto/"
              ? "bg-unterbau-dark"
              : "bg-unterbau-white"
          }`}
        ></div>
        <div
          className={`h-[1px] ${
            location.pathname === "/contacto/"
              ? "bg-unterbau-dark"
              : "bg-unterbau-white"
          }`}
        ></div>{" "}
      </article>
      <article className="text-center pb-10">
        <span>© 2025 Unterbau</span>
      </article>
      <article className="absolute left-0 right-0 w-full bg-unterbau-red px-5 py-10 lg:px-16 flex justify-center">
        <img
          src={
            location.pathname === "/contacto/" ? imgUnterbauBlanco : imgUnterbau
          }
          alt="Unterbau logo negro"
        />
      </article>
    </section>
  )
}
