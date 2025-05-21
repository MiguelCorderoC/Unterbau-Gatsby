import { Link } from "gatsby"
import * as React from "react"

export const DesignTarget = ({
  imagen,
  titulo,
  texto,
  position,
  idSection,
}) => {
  return (
    <article className="relative flex flex-col justify-center items-center text-unterbau-white lg:w-1/2">
      <div className="flex flex-col items-center absolute gap-2">
        <span className="text-[40px] font-black lg:text-[50px]">{titulo}</span>
        <span className="text-[12px] text-center font-mono lg:text-[15px]">
          {texto}
        </span>
        <Link
          to={`/servicios/#${idSection}`}
          className="bg-unterbau-red rounded-full px-4 py-1 font-museo font-bold text-[15px] mt-2 lg:text-[12px] lg:font-medium"
        >
          Conoce más
        </Link>
      </div>
      <img
        src={imagen}
        alt="Imagen de diseño"
        className={`object-cover h-96 w-full ${position}`}
      />
    </article>
  )
}
