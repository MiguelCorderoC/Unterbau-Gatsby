import * as React from "react"
import { FaMinus, FaPlus } from "react-icons/fa"

export const DesignDesplegable = ({
  titulo,
  texto,
  imagen,
  children,
  childrenImages,
  moveImage,
  idDesign,
}) => {
  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <article id={idDesign} className="space-y-3">
        <div className="border w-full h-[3px] bg-black lg:mb-16"></div>
        <div className="flex items-center justify-between lg:gap-5 pt-[10px]">
          <span className="text-3xl lg:text-5xl lg:text-nowrap font-museo font-bold text-[30px]">
            {titulo}
          </span>
          <div className="lg:flex items-center justify-end gap-5">
            <p className="hidden lg:block lg:w-2/3 font-light text-[17px]">
              {texto}
            </p>
            <button
              onClick={() => {
                setVisible(prev => !prev)
              }}
              className="p-2 bg-unterbau-dark text-unterbau-white rounded-full flex justify-center items-center w-[25px] h-[25px]"
            >
              {visible ? (
                <FaMinus className="lg:text-[30px]" />
              ) : (
                <FaPlus className="lg:text-[30px]" />
              )}
            </button>
          </div>
        </div>
        <p className="lg:hidden">{texto}</p>
        <img
          src={imagen}
          alt="Imagen design"
          className={`h-32 w-full object-cover lg:h-40 ${moveImage}`}
        />
      </article>
      {visible && children}
      {visible && childrenImages}
    </>
  )
}
