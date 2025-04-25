import * as React from "react"
export const Procesos = ({ titulo, icono, texto }) => {
  return (
    <article className="flex items-start gap-3 w-[45%] lg:w-[18%]">
      <img src={icono} alt="Proceso icon" className="size-[25px]" />
      <article>
        <span className=" font-black text-[13px]">{titulo}</span>
        <p className="font-medium text-[13px]">{texto}</p>
      </article>
    </article>
  )
}
