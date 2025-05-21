import * as React from "react"
import { Link } from "gatsby"

export const PostTarget = ({ categoria, titulo, fecha, imagen }) => {
  return (
    <article className="flex flex-col gap-2 lg:w-[45%]">
      <img src={imagen} alt="img post" className="rounded-3xl" />
      <div className="flex flex-col font-light">
        <span>{categoria}</span>
        <span className="font-normal">{titulo}</span>
        <span className="text-blue-500">{fecha}</span>
      </div>
    </article>
  )
}
