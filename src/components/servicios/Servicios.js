import { Link } from "gatsby"
import * as React from "react"

export const Servicios = () => {
  return (
    <section className="space-y-3 lg:relative">
      <article className="text-6xl flex flex-col lg:text-9xl">
        <span>NUESTROS</span>
        <span className="lg:text-end">SERVICIOS</span>
      </article>
      <article className="flex flex-col gap-3 items-start lg:absolute lg:top-0 lg:right-0">
        <p>
          Desde el corazón de la Ciudad de <br className="hidden lg:block" />{" "}
          México, creamos estrategias de diseño
          <br className="hidden lg:block" /> con alcance global, transformando
          <br className="hidden lg:block" /> ideas en productos de éxito.
        </p>
        <Link
          to="/#"
          className="bg-unterbau-dark rounded-full text-unterbau-white px-7 py-1.5 font-semibold lg:hidden"
        >
          Contáctanos
        </Link>
      </article>
    </section>
  )
}
