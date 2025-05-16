import { Link } from "gatsby"
import * as React from "react"
import imgProposito from "../../assets/images/possessed-photography-g29arbbvPjo-unsplash.jpg"

export const NuestroProposito = () => {
  return (
    <section className="space-y-5 lg:flex justify-center items-center gap-10">
      <article className="flex flex-col gap-2 items-start lg:gap-4">
        <span className="font-black text-[50px] lg:text-[60px] leading-[1.1]">
          NUESTRO <br /> PROPÓSITO
        </span>
        <div className="flex flex-col gap-[17px] items-start">
          <p className="font-thin text-[20px] lg:text-[25px]">
            Lograr que cada persona que <br className="hidden lg:block" />{" "}
            interactúe con un diseño nuestro, no
            <br className="hidden lg:block" /> experimente sentimientos
            negativos.
          </p>
          <Link
            to="/contacto/"
            className="bg-unterbau-dark text-unterbau-white rounded-full px-5 py-1.5 font-bold text-[15px] lg:font-medium"
          >
            Hablar
          </Link>
        </div>
      </article>
      <article className="lg:w-[50%] flex justify-center">
        <img
          src={imgProposito}
          alt="Nuestro proposito"
          className="rounded-[20px] w-[333px] h-[480px] object-cover object-right lg:w-[395px] lg:h-[545px]"
        />
      </article>
    </section>
  )
}
