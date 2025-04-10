import { Link } from "gatsby"
import * as React from "react"

export const Servicios = () => {
  return (
    <section className="space-y-3 md:relative">
      <article className="text-6xl flex flex-col md:text-9xl">
        <span>NUESTROS</span>
        <span className="md:text-end">SERVICIOS</span>
      </article>
      <article className="flex flex-col gap-3 items-start md:absolute md:top-0 md:right-0">
        <p>
          Desde el corazón de la Ciudad de <br className="hidden md:block" />{" "}
          México, creamos estrategias de diseño
          <br className="hidden md:block" /> con alcance global, transformando
          <br className="hidden md:block" /> ideas en productos de éxito.
        </p>
        <Link
          to="/#"
          className="bg-unterbau-dark rounded-full text-unterbau-white px-7 py-1.5 font-semibold md:hidden"
        >
          Contáctanos
        </Link>
      </article>
    </section>
  )
}
