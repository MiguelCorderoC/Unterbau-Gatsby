import * as React from "react"

export const ChildrenDesplegable = ({ arrayList = [] }) => {
  return (
    <article className="space-y-5">
      {arrayList.map((categoria, index) => (
        <div key={index} className="flex border-b-2 pb-5 border-dashed">
          <div className="size-3 bg-unterbau-red mt-[10px] lg:mt-6" />
          <div className="ml-5 w-full">
            <div className="text-2xl mb-3">
              <span>{categoria.titulo}</span>
            </div>
            <ul className="lg:flex lg:justify-between w-full items-center space-y-3 lg:space-y-0">
              {categoria.items.map((item, i) => (
                <li
                  key={i}
                  className={`lg:w-[30%] ${i >= 3 ? "hidden font-bold" : ""}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </article>
  )
}
