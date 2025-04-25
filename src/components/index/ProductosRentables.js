import * as React from "react"
import imgManos from "../../assets/images/gilles-lambert-pb_lF8VWaPU-unsplash.jpg"
import { Link } from "gatsby"

export const ProductosRentables = () => {
  return (
    <section className="-mx-5 -mt-10 relative lg:-mx-16">
      <article className="absolute text-unterbau-white left-10 top-10 lg:top-0 flex flex-col justify-between h-full lg:justify-around lg:mt-5">
        <div className="text-[40px] font-black lg:text-7xl md:text-6xl flex flex-col leading-[1.2]">
          <span>DISEÑAMOS </span>
          <span>PRODUCTOS</span>
          <span>RENTABLES Y</span>
          <span>EMPÁTICOS</span>
        </div>

        <div className="flex flex-col items-start mb-32 gap-2">
          <span className="text-xl font-light  md:text-4xl lg:text-3xl font-mono">
            Método científico + <br className="lg:hidden" /> Metodologías de
            empatía
          </span>
          <Link
            to="/contacto/"
            className="bg-unterbau-red rounded-full px-4 py-1 lg:px-7 lg:text-xl md:py-2 md:px-6 font-museo text-[17px] font-bold"
          >
            Contáctanos
          </Link>
        </div>
      </article>
      <img
        src={imgManos}
        alt="Productos rentables y empáticos"
        className="h-[700px] object-cover lg:w-full lg:h-[600px]"
      />
    </section>
  )
}
