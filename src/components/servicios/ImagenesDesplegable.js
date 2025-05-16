import * as React from "react"

export const ImagenesDesplegable = ({ imageArray = [] }) => {
  return (
    <>
      {imageArray.map((seccion, index) => (
        <article
          key={index}
          className="space-y-5 lg:pt-5 lg:flex items-center justify-between lg:items-start"
        >
          <span className="text-[20px] lg:text-[15px] font-museo font-medium lg:text-xl lg:font-light">
            {seccion.titulo}
          </span>
          <div className="flex justify-center lg:justify-end flex-wrap gap-2 lg:w-[80%]">
            {seccion.items.map((image, index) => (
              <div
                key={index}
                className="w-[45%] flex flex-col items-center lg:w-[18%] gap-2"
              >
                <img
                  src={image.imagen}
                  alt="Imagen unterbau"
                  className={`object-cover object-top `}
                />
                <span className="lg:text-sm text-center text-[12px] font-light">
                  {image.subtitulo}
                </span>
              </div>
            ))}
          </div>
        </article>
      ))}
    </>
  )
}
