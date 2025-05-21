import { Link } from "gatsby"
import * as React from "react"
import imgWalmart from "../../assets/logos-clientes/walmart-21.svg"
import imgCoppel from "../../assets/logos-clientes/Coppel Logo.svg"
import imgPraxia from "../../assets/logos-clientes/Praxia_logo_blanco.svg"
import imgVenados from "../../assets/logos-clientes/Venados_logo_blanco.svg"
import imgSinaloa from "../../assets/logos-clientes/Sinaloa_logo_negro 1.svg"
import imgChecatel from "../../assets/logos-clientes/Cero papel logo.svg"

export const MarcasTrabajo = () => {
  return (
    <section className="bg-unterbau-dark text-unterbau-white -mx-5 lg:-mx-16 py-16 px-5 flex flex-col gap-6 lg:gap-24 lg:py-32">
      <article className="space-y-2 lg:flex lg:justify-around gap-28">
        <div className="text-4xl lg:font-light lg:text-[50px] font-black text-[30px]">
          <span>
            MARCAS CON LAS <br className="md:hidden lg:hidden" /> QUE{" "}
          </span>
          <br className="hidden lg:block" />
          <span className="lg:flex lg:pl-36 lg:pt-5">
            HEMOS
            <br className="md:hidden lg:hidden" /> TRABAJADO
          </span>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <p className="text-[15px] font-light">
            Objetivos diferentes, proyectos diferentes,{" "}
            <br className="hidde lg:block" /> misma pasion.
          </p>
          <Link
            to="/contacto/"
            className="bg-unterbau-white text-unterbau-dark px-4 py-1.5 rounded-full font-bold text-[15px]"
          >
            Contáctanos{" "}
          </Link>
        </div>
      </article>
      <article className="flex gap-x-11 lg:gap-x-14 gap-y-5 lg:mt-0 mt-3 flex-wrap items-center justify-start lg:justify-end lg:gap-8 lg:pr-[50px]">
        <img
          src={imgWalmart}
          alt="Logo walmart"
          className=" w-[25%] lg:w-[10%] lg:h-[30px] object-cover"
        />{" "}
        <img
          src={imgPraxia}
          alt="Logo walmart"
          className=" w-[25%] lg:w-[10%] lg:h-[30px] object-cover"
        />{" "}
        <img
          src={imgCoppel}
          alt="Logo walmart"
          className=" w-[25%] lg:w-[10%] lg:h-[30px] object-cover"
        />{" "}
        <img
          src={imgSinaloa}
          alt="Logo walmart"
          className=" w-[25%] lg:w-[10%] lg:h-[30px] object-cover"
        />{" "}
        <img
          src={imgChecatel}
          alt="Logo walmart"
          className=" w-[25%] lg:w-[10%] lg:h-[30px] object-cover"
        />{" "}
        <img
          src={imgVenados}
          alt="Logo walmart"
          className=" w-[25%] lg:w-[10%] lg:h-[30px] object-cover"
        />{" "}
      </article>
    </section>
  )
}
