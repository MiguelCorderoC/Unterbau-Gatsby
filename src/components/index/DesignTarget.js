import * as React from "react"

export const DesignTarget = ({ imagen, titulo, texto, link }) => {
  return (
    <article className="relative flex flex-col justify-center items-center text-unterbau-white md:w-1/2">
      <div className="flex flex-col items-center absolute gap-2">
        <span className="text-4xl font-semibold">{titulo}</span>
        <span className="font-extralight">{texto}</span>
        <button className="bg-unterbau-red rounded-full px-4 py-1">
          Conoce más
        </button>
      </div>
      <img
        src={imagen}
        alt="Imagen de diseño"
        className="object-cover h-96 w-full"
      />
    </article>
  )
}
