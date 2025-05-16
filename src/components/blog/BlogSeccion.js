import * as React from "react"
import { Link } from "gatsby"

export const BlogSeccion = () => {
  return (
    <section>
      <article className="space-y-5 font-semibold lg:space-y-10">
        <span className="flex justify-center text-7xl lg:text-[105px] lg:font-black">
          BLOG
        </span>
        <ul className="flex justify-between lg:justify-around lg:text-[20px] lg:font-light">
          <li>
            <Link to="/#" className="text-start ">
              Research Desing
            </Link>
          </li>
          <li>
            <Link to="/#" className="text-start ">
              Product Desing
            </Link>
          </li>
          <li>
            <Link to="/#" className="text-start ">
              Service Desing
            </Link>
          </li>
          <li>
            <Link to="/#" className="text-start ">
              Brand Design
            </Link>
          </li>
        </ul>
        <div className="lg:flex justify-center lg:pt-5">
          <input
            placeholder="Buscar..."
            className="border rounded-none py-2 px-5 w-full border-unterbau-dark outline-none lg:h-[48px] lg:w-[608px]"
          />
        </div>
      </article>
    </section>
  )
}
