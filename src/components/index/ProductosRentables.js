import * as React from "react"
import imgManos from "../../assets/images/gilles-lambert-pb_lF8VWaPU-unsplash.jpg"

export const ProductosRentables = () => {
  return (
    <section className="-mx-5 -mt-10 relative md:-mx-16">
      <article className="absolute text-unterbau-white left-10 top-10 md:top-0 flex flex-col justify-between h-full md:justify-center md:gap-2">
        <span className="text-4xl font-semibold md:text-7xl">
          DISEÑAMOS <br /> PRODUCTOS
          <br /> RENTABLES <br className="hidden md:block" /> Y
          <br className="md:hidden" /> EMPÁTICOS
        </span>
        <div className="flex flex-col items-start mb-32 gap-2">
          <span className="text-xl font-light">
            Método científico + <br className="md:hidden" /> Metodologías de
            empatía
          </span>
          <button className="bg-unterbau-red rounded-full px-4 py-1 md:px-7 md:font-medium">
            Contáctanos
          </button>
        </div>
      </article>
      <img
        src={imgManos}
        alt="Productos rentables y empáticos"
        className="h-[700px] object-cover md:w-full md:h-[600px]"
      />
    </section>
  )
}
