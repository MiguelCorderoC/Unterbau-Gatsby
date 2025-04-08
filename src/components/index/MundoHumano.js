import * as React from "react"
import imgProducto from "../../assets/images/pexels-olly-3823488.jpg"

export const MundoHumano = () => {
  return (
    <section className="bg-unterbau-dark text-unterbau-white -mx-5 md:-mx-16 px-5 py-10 space-y-7 md:space-y-0 md:flex md:justify-center md:gap-36 md:items-center md:py-16">
      <article className="space-y-2 md:space-y-3">
        <span className="text-4xl font-bold">
          UN MUNDO <br className="md:hidden" />
          CON <br className="hidden md:block" />
          DISEÑO <br className="md:hidden" /> MÁS{" "}
          <br className="hidden md:block" />
          HUMANO
        </span>
        <p>
          Nuestro objetivo es capitalizar el diseño y{" "}
          <br className="hidden md:block" />
          así llevarlo más lejos.
        </p>
        <p>
          Mejores productos. Más amigables. Más
          <br className="hidden md:block" />
          innovadores. Mejor propuesta de valor.
        </p>
        <button className="rounded-full bg-unterbau-white text-unterbau-dark px-5 py-1 font-semibold">
          Contáctanos
        </button>
      </article>
      <article className="px-3">
        <img
          src={imgProducto}
          alt="Un mundo más humano"
          className="rounded-xl md:w-[300px] md:h-[450px] object-cover"
        />
      </article>
    </section>
  )
}
