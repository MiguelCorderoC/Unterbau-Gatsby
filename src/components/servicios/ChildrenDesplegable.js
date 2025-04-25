import * as React from "react"

export const ChildrenDesplegable = ({ arrayList = [] }) => {
  return (
    <article className="space-y-5">
      {arrayList.map((categoria, index) => (
        <div
          key={index}
          className="flex border-b-2 pb-5 border-dashed lg:items-center lg:pb-0"
        >
          <div className="size-3 bg-unterbau-red mt-[10px] lg:mt-0" />
          <div className="ml-5 w-full lg:flex lg:justify-between  lg:items-center">
            <div className="text-[20px] mb-3 lg:mb-0 font-mono">
              <span>{categoria.titulo}</span>
            </div>
            <ul className="lg:flex lg:justify-end lg:gap-8  lg:w-[70%] w-full items-center space-y-3 lg:space-y-0 font-museo font-light text-[15px]">
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
