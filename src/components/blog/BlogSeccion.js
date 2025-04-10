import * as React from "react"

export const BlogSeccion = () => {
  return (
    <section>
      <article className="space-y-5 font-semibold md:space-y-10">
        <span className="flex justify-center text-7xl">BLOG</span>
        <ul className="flex justify-between">
          <li>
            <button>Research Desing</button>
          </li>
          <li>
            <button>Product Desing</button>
          </li>
          <li>
            <button>Service Desing</button>
          </li>
          <li>
            <button>Brand Design</button>
          </li>
        </ul>
        <input
          placeholder="Buscar"
          className="border rounded-none py-2 px-5 w-full border-unterbau-dark outline-none"
        />
      </article>
    </section>
  )
}
