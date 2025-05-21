import * as React from "react"
import imgProducto from "../../assets/images/pexels-olly-3823488.jpg"
import { Link } from "gatsby"

export const MundoHumano = () => {
  return (
    <section className="bg-unterbau-dark text-unterbau-white -mx-5 lg:-mx-16 px-5 py-10 space-y-7 lg:space-y-0 lg:flex lg:justify-center lg:gap-36 lg:items-center lg:py-16">
      <article className="space-y-[17px] mt-[40px] lg:space-y-[30px] lg:pb-[50px]">
        <span className="font-black text-[30px] leading-[1.2] lg:text-[40px]">
          UN MUNDO <br className="lg:hidden" />
          CON <br className="hidden lg:block" />
          DISEÑO <br className="lg:hidden" /> MÁS{" "}
          <br className="hidden lg:block" />
          HUMANO
        </span>
        <p className="font-light text-[17px] lg:text-[15px]">
          Nuestro objetivo es capitalizar el diseño y{" "}
          <br className="hidden lg:block" />
          así llevarlo más lejos.
        </p>
        <p className="font-light text-[17px] lg:text-[15px]">
          Mejores productos. Más amigables. Más{" "}
          <br className="hidden lg:block" />
          innovadores. Mejor propuesta de valor.
        </p>
        <div>
          <Link
            to="/contacto/"
            className="rounded-full bg-unterbau-white text-unterbau-dark px-5 py-1 font-semibold lg:text-[15px]"
          >
            Contáctanos
          </Link>
        </div>
      </article>
      <article className="px-3 pt-[40px] pb-[50px]">
        <img
          src={imgProducto}
          alt="Un mundo más humano"
          className="rounded-xl h-[500px] lg:w-[336px] lg:h-[470px] object-cover"
        />
      </article>
    </section>
  )
}
