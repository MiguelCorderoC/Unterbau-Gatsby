import { Link } from "gatsby"
import * as React from "react"

export const Servicios = () => {
  return (
    <section className="space-y-[15px] lg:relative mt-[10px] pb-16">
      <article className="flex flex-col lg:text-9xl lg:font-normal font-museo font-black text-[65px] leading-[1.2]">
        <span>NUESTROS</span>
        <span className="lg:text-end">SERVICIOS</span>
      </article>
      <article className="flex flex-col gap-8 items-start lg:absolute lg:-top-3 lg:right-0">
        <p className="font-museo font-light text-[18px] lg:pb-[10px]">
          Desde el corazón de la Ciudad de <br className="hidden lg:block" />{" "}
          México, creamos estrategias de diseño
          <br className="hidden lg:block" /> con alcance global, transformando
          <br className="hidden lg:block" /> ideas en productos de éxito.
        </p>
        <Link
          to="/#"
          className="bg-unterbau-dark rounded-full text-unterbau-white px-7 py-1.5 lg:hidden font-museo font-bold"
        >
          Contáctanos
        </Link>
      </article>
    </section>
  )
}
