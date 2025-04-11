import * as React from "react"
export const Procesos = ({ titulo, icono, texto }) => {
  return (
    <article className="flex items-start gap-3 w-[45%] lg:w-[18%]">
      <img src={icono} alt="Proceso icon" className="size-6" />
      <article>
        <span className=" font-semibold">{titulo}</span>
        <p>{texto}</p>
      </article>
    </article>
  )
}
