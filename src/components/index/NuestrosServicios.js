import * as React from "react"

export const NuestrosServicios = () => {
  return (
    <section className="space-y-5 md:flex md:justify-between md:items-center">
      <article className="font-bold text-6xl flex flex-col md:text-7xl">
        <span>NUESTROS</span>
        <span className="flex justify-end md:pl-8">SERVICIOS</span>
      </article>
      <article className="flex flex-col items-start gap-3">
        <span className="font-light">
          Nuestro portafolio de servicios se centra en diseñar{" "}
          <br className="hidden md:block" /> estrategias que forjan conexiones
          auténticas entre <br className="hidden md:block" /> tu negocio y tus
          usuarios, impulsando tu liderazgo <br className="hidden md:block" />
          en el mercado.
        </span>
        <button className="font-bold bg-unterbau-dark rounded-full px-5 py-1.5 text-unterbau-white">
          Contáctanos
        </button>
      </article>
    </section>
  )
}
