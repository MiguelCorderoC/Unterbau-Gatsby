import { Link } from "gatsby"
import * as React from "react"
import imgWalmart from "../../assets/images/walmart.jpg"

export const MarcasTrabajo = () => {
  return (
    <section className="bg-unterbau-dark text-unterbau-white -mx-5 lg:-mx-16 lg:py-20 py-10 px-5 flex flex-col gap-6 lg:gap-10">
      <article className="space-y-2 lg:flex lg:justify-around gap-28">
        <div className="text-4xl font-semibold lg:font-light lg:text-5xl lg:w-[50%]">
          <span>MARCAS CON LAS QUE </span>
          <br className="hidden lg:block" />
          <span className="lg:flex justify-end">HEMOS TRABAJADO</span>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <p className="text-lg">
            Objetivos diferentes, proyectos diferentes,{" "}
            <br className="hidde lg:block" /> misma pasion
          </p>
          <Link
            to="/contacto/"
            className="bg-unterbau-white text-unterbau-dark px-4 py-1.5 rounded-full font-semibold"
          >
            Contactanos
          </Link>
        </div>
      </article>
      <article className="flex gap-3 items-center justify-between lg:justify-end lg:gap-8">
        <img
          src={imgWalmart}
          alt="Logo walmart"
          className=" w-[20%] lg:w-[10%] lg:h-[30px]"
        />
        <img
          src={imgWalmart}
          alt="Logo walmart"
          className=" w-[20%] lg:w-[10%] lg:h-[30px]"
        />{" "}
        <img
          src={imgWalmart}
          alt="Logo walmart"
          className=" w-[20%] lg:w-[10%] lg:h-[30px]"
        />{" "}
        <img
          src={imgWalmart}
          alt="Logo walmart"
          className=" w-[20%] lg:w-[10%] lg:h-[30px]"
        />{" "}
        <img
          src={imgWalmart}
          alt="Logo walmart"
          className=" w-[20%] lg:w-[10%] lg:h-[30px] hidden lg:block"
        />{" "}
        <img
          src={imgWalmart}
          alt="Logo walmart"
          className=" w-[20%] lg:w-[10%] lg:h-[30px] hidden lg:block"
        />{" "}
      </article>
    </section>
  )
}
