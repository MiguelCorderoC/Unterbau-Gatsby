import * as React from "react"
import imgEstrategia from "../../assets/images/docusign-7RWBSYA9Rro-unsplash.jpg"
import { Link } from "gatsby"

export const NuestraEstrategia = () => {
  return (
    <section className="space-y-5 lg:flex flex-row-reverse items-center justify-center gap-10">
      <article className="flex flex-col gap-3 items-start">
        <span className="text-5xl font-semibold">
          NUESTRA <br /> ESTRATEGIA
        </span>
        <p className="text-xl">
          Crear proyectos de diseño rentables,{" "}
          <br className="hidden lg:block" /> que inspiren a más empresas a
          invertir <br className="hidden lg:block" /> en mejorar la vida de sus
          usuarios.
        </p>
        <Link
          to="/contacto/"
          className="px-4 py-1.5 rounded-full bg-unterbau-dark text-unterbau-white font-semibold"
        >
          Habla con nosotros
        </Link>
      </article>
      <article className="lg:w-[50%]">
        <img
          src={imgEstrategia}
          alt="Nuestra estrategia"
          className="rounded-xl object-cover"
        />
      </article>
    </section>
  )
}
