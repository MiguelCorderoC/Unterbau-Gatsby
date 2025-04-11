import * as React from "react"
import imgProducto from "../../assets/images/pexels-olly-3823488.jpg"

export const MundoHumano = () => {
  return (
    <section className="bg-unterbau-dark text-unterbau-white -mx-5 lg:-mx-16 px-5 py-10 space-y-7 lg:space-y-0 lg:flex lg:justify-center lg:gap-36 lg:items-center lg:py-16">
      <article className="space-y-2 lg:space-y-3">
        <span className="text-4xl font-bold">
          UN MUNDO <br className="lg:hidden" />
          CON <br className="hidden lg:block" />
          DISEÑO <br className="lg:hidden" /> MÁS{" "}
          <br className="hidden lg:block" />
          HUMANO
        </span>
        <p>
          Nuestro objetivo es capitalizar el diseño y{" "}
          <br className="hidden lg:block" />
          así llevarlo más lejos.
        </p>
        <p>
          Mejores productos. Más amigables. Más{" "}
          <br className="hidden lg:block" />
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
          className="rounded-xl lg:w-[300px] lg:h-[450px] object-cover"
        />
      </article>
    </section>
  )
}
