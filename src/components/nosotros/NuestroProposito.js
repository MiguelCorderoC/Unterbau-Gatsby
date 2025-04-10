import { Link } from "gatsby"
import * as React from "react"
import imgProposito from "../../assets/images/possessed-photography-g29arbbvPjo-unsplash.jpg"

export const NuestroProposito = () => {
  return (
    <section className="space-y-5 md:flex justify-center items-center gap-10">
      <article className="flex flex-col gap-2 items-start md:gap-4">
        <span className="text-6xl font-semibold">
          NUESTRO <br /> PROPÓSITO
        </span>
        <p>
          Lograr que cada persona que <br className="hidden md:block" />{" "}
          interactúe con un diseño nuestro, no
          <br className="hidden md:block" /> experimente sentimientos negativos.
        </p>
        <Link
          to="/contacto/"
          className="bg-unterbau-dark text-unterbau-white rounded-full px-5 py-1.5 font-semibold"
        >
          Habla con nosotros
        </Link>
      </article>
      <article className="md:w-[50%]">
        <img
          src={imgProposito}
          alt="Nuestro proposito"
          className="rounded-xl object-cover"
        />
      </article>
    </section>
  )
}
