import * as React from "react"

export const NuestroProceso = () => {
  return (
    <section className="space-y-3 md:flex md:flex-row-reverse md:justify-between md:items-start">
      <article className="font-bold text-5xl flex flex-col md:text-end md:text-7xl">
        <span className="md:hidden">CONOCE</span>
        <span>NUESTRO</span>
        <span className="md:mr-40"> PROCESO</span>
        <span className="md:mr-72"> DE TRABAJO</span>
      </article>
      <article className="flex flex-col gap-3 items-start">
        <span>
          Fundamentamos nuestro trabajo en el método{" "}
          <br className="hidden md:block" /> científico, enriqueciéndolo con un
          enfoque
          <br className="hidden md:block" /> humano a través de herramientas y
          <br className="hidden md:block" />
          metodologías de empatía.
        </span>
        <button className="font-bold bg-unterbau-dark rounded-full px-5 py-1.5 text-unterbau-white">
          Contáctanos
        </button>
      </article>
    </section>
  )
}
