import { Link } from "gatsby"
import * as React from "react"

export const NuestrosServicios = () => {
  return (
    <section className="space-y-5 lg:flex lg:justify-between lg:items-center">
      <article className="font-bold text-6xl flex flex-col lg:text-7xl md:text-8xl">
        <span>NUESTROS</span>
        <span className="flex justify-end lg:pl-8">SERVICIOS</span>
      </article>
      <article className="flex flex-col items-start gap-3">
        <span className="font-light">
          Nuestro portafolio de servicios se centra en diseñar{" "}
          <br className="hidden lg:block" /> estrategias que forjan conexiones
          auténticas entre <br className="hidden lg:block" /> tu negocio y tus
          usuarios, impulsando tu liderazgo <br className="hidden lg:block" />
          en el mercado.
        </span>
        <Link
          to="/contacto/"
          className="font-bold bg-unterbau-dark rounded-full px-5 py-1.5 text-unterbau-white"
        >
          Contáctanos
        </Link>
      </article>
    </section>
  )
}
