import * as React from "react"
import imgEstrategia from "../../assets/images/docusign-7RWBSYA9Rro-unsplash.jpg"
import { Link } from "gatsby"

export const NuestraEstrategia = () => {
  return (
    <section className="space-y-7 lg:flex flex-row-reverse items-center justify-center gap-10">
      <article className="flex flex-col gap-3 items-start">
        <span className="font-black text-[50px] lg:text-[60px] leading-[1.1]">
          NUESTRA <br /> ESTRATEGIA
        </span>
        <div className="flex flex-col items-start gap-[17px]">
          <p className="font-thin text-[20px] lg:text-[25px]">
            Crear proyectos de diseño rentables,{" "}
            <br className="hidden lg:block" /> que inspiren a más empresas a
            invertir <br className="hidden lg:block" /> en mejorar la vida de
            sus usuarios.
          </p>
          <Link
            to="/contacto/"
            className="px-4 py-1.5 rounded-full bg-unterbau-dark text-unterbau-white font-bold text-[15px]"
          >
            Hablar
          </Link>
        </div>
      </article>
      <article className="lg:w-[50%] flex justify-center">
        <img
          src={imgEstrategia}
          alt="Nuestra estrategia"
          className="rounded-[20px] w-[333px] h-[480px] object-cover object-[left_85%] lg:w-[395px] lg:h-[545px]"
        />
      </article>
    </section>
  )
}
