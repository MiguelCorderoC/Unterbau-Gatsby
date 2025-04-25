import * as React from "react"
import { FaMinus, FaPlus } from "react-icons/fa"

export const DesignDesplegable = ({
  titulo,
  texto,
  imagen,
  children,
  childrenImages,
}) => {
  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <article className="space-y-3">
        <div className="flex items-center justify-between lg:gap-5">
          <span className="text-3xl lg:text-5xl lg:text-nowrap font-museo font-bold text-[30px]">
            {titulo}
          </span>
          <div className="lg:flex items-center justify-end gap-5">
            <p className="hidden lg:block lg:w-2/3 font-light text-[15px]">
              {texto}
            </p>
            <button
              onClick={() => {
                setVisible(prev => !prev)
              }}
              className="p-2 bg-unterbau-dark text-unterbau-white rounded-full flex justify-center items-center w-[25px] h-[25px]"
            >
              {visible ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
        </div>
        <p className="lg:hidden">{texto}</p>
        <img
          src={imagen}
          alt="Imagen design"
          className="h-32 w-full object-cover lg:h-40"
        />
      </article>
      {visible && children}
      {visible && childrenImages}
    </>
  )
}
