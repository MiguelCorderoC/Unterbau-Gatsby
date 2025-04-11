import * as React from "react"

export const ImagenesDesplegable = ({ imageArray = [] }) => {
  return (
    <>
      {imageArray.map((seccion, index) => (
        <article
          key={index}
          className="space-y-5 lg:flex items-center justify-between "
        >
          <span className="text-2xl lg:text-xl">{seccion.titulo}</span>
          <div className="flex justify-center lg:justify-end flex-wrap gap-5 lg:w-[80%]">
            {seccion.items.map((image, index) => (
              <div
                key={index}
                className="w-[45%] flex flex-col items-center lg:w-[18%] gap-2"
              >
                <img
                  src={image.imagen}
                  alt="Imagen unterbau"
                  className="object-cover"
                />
                <span className="lg:text-sm text-center">
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
