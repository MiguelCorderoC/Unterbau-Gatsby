import * as React from "react"

export const ChildrenDesplegable = ({ arrayList }) => {
  const arrayText = [
    {
      titulo: "Product Research",
      items: [
        "Investigación de nuevos productos",
        "Validación de funcionamiento de productos existentes",
        "Descubrimiento de nuevos features",
      ],
    },
    {
      titulo: "Service Research",
      items: [
        "Investigacion de nuevos servicios",
        "Validacion de funcionamiento de servicios existentes",
        "Descubrimiento de nuevos features",
        "Análisis de métricas",
      ],
    },
    {
      titulo: "Brand Research",
      items: [
        "Investigacion de posicionamiento de marca en el mercado",
        "Posicionamiento de marca interna",
        "Investigacion de competencia",
      ],
    },
  ]

  return (
    <>
      <article className="space-y-5">
        {arrayText.map((categoria, index) => (
          <div className="flex border-b-2 pb-5 border-dashed">
            <div className="size-3 bg-unterbau-red mt-[10px] lg:mt-6" />
            <ul
              key={index}
              className="ml-5 space-y-3 lg:flex lg:justify-between w-full items-center"
            >
              <li className="text-2xl">
                <span>{categoria.titulo}</span>
              </li>
              <div className="lg:flex items-center justify-end gap-7 lg:w-[75%] space-y-3 lg:space-y-0">
                {categoria.items.map((item, i) => (
                  <li
                    key={i}
                    className={`lg:w-[30%] ${i >= 3 ? "hidden font-bold" : ""}`}
                  >
                    {item}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        ))}
      </article>
    </>
  )
}
