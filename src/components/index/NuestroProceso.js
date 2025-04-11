import * as React from "react"

export const NuestroProceso = () => {
  return (
    <section className="space-y-3 lg:flex lg:flex-row-reverse lg:justify-between lg:items-start">
      <article className="font-bold text-5xl flex flex-col lg:text-end lg:text-7xl">
        <span className="lg:hidden">CONOCE</span>
        <span>NUESTRO</span>
        <span className="lg:mr-40"> PROCESO</span>
        <span className="lg:mr-72"> DE TRABAJO</span>
      </article>
      <article className="flex flex-col gap-3 items-start">
        <span>
          Fundamentamos nuestro trabajo en el método{" "}
          <br className="hidden lg:block" /> científico, enriqueciéndolo con un{" "}
          enfoque
          <br className="hidden lg:block" /> humano a través de herramientas y
          <br className="hidden lg:block" />
          metodologías de empatía.
        </span>
        <button className="font-bold bg-unterbau-dark rounded-full px-5 py-1.5 text-unterbau-white">
          Contáctanos
        </button>
      </article>
    </section>
  )
}
