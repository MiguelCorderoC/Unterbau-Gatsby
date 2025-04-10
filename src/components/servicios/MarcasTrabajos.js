import { Link } from "gatsby"
import * as React from "react"
import imgWalmart from "../../assets/images/walmart.jpg"

export const MarcasTrabajo = () => {
  return (
    <section className="bg-unterbau-dark text-unterbau-white -mx-5 py-10 px-5 flex flex-col gap-4">
      <article className="space-y-2">
        <span className="text-4xl font-semibold">
          MARCAS CON LAS <br /> QUE HEMOS <br /> TRABAJADO
        </span>
        <div className="flex flex-col gap-2 items-start">
          <p className="text-lg">
            Objetivos diferentes, proyectos diferentes, misma pasion
          </p>
          <Link
            to="/contacto/"
            className="bg-unterbau-white text-unterbau-dark px-4 py-1.5 rounded-full font-semibold"
          >
            Contactanos
          </Link>
        </div>
      </article>
      <article className="flex gap-3 items-center">
        <img
          src={imgWalmart}
          alt="Logo walmart"
          className=" object-cover w-[25%]"
        />
        <img
          src={imgWalmart}
          alt="Logo walmart"
          className=" object-cover w-[25%]"
        />{" "}
        <img
          src={imgWalmart}
          alt="Logo walmart"
          className=" object-cover w-[25%]"
        />{" "}
      </article>
    </section>
  )
}
