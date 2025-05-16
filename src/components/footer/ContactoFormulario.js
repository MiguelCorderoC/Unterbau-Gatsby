import * as React from "react"
import { CiLocationOn, CiMail } from "react-icons/ci"
import { useLocation } from "@reach/router"

export const ContactoFormulario = () => {
  const location = useLocation()

  return (
    <section
      className={`-mx-5 lg:-mx-16 -mt-11 px-5 py-10 lg:px-48 space-y-5 lg:space-y-8 ${
        location.pathname === "/contacto/"
          ? "text-unterbau-white bg-unterbau-dark"
          : "bg-unterbau-white text-unterbau-dark"
      } ${location.pathname === "/blog/" && "hidden"}`}
    >
      <article className="flex justify-between items-center lg:justify-start lg:gap-5 font-light text-[14px]">
        <span className="flex gap-2 items-center">
          <CiLocationOn className="text-lg lg:text-xl" /> Ciudad de México
        </span>
        <span className="flex gap-2 items-center">
          <CiMail className="text-lg lg:text-xl" /> contacto@unterbau.mx
        </span>
      </article>
      <article className="font-thin text-[33px] ">
        <span className="lg:hidden">
          ¿TIENES UN <br /> PROYECTO EN <br /> PUERTA? ¡HABLEMOS!
        </span>
        <span className="hidden lg:block lg:text-[60px]">
          DISEÑEMOS JUNTOS ESA <br /> GRAN IDEA
        </span>
      </article>
      <form className="lg:space-y-8">
        <div className="space-y-3 lg:space-y-0 lg:flex lg:justify-between">
          <div className="flex flex-col lg:w-[40%]">
            <label htmlFor="nombre" className="font-medium text-[15px]">
              Nombre*:
            </label>
            <input
              id="nombre"
              placeholder="Escribe aquí"
              className={`border-b rounded-none py-2 focus:outline-none font-light text-[12px] ${
                location.pathname === "/contacto/"
                  ? "bg-transparent border-unterbau-white"
                  : "border-unterbau-dark"
              }`}
            />
          </div>
          <div className="flex flex-col lg:w-[40%]">
            <label htmlFor="apellido" className="font-medium text-[15px]">
              Apellido*:
            </label>
            <input
              id="apellido"
              placeholder="Escribe aquí"
              className={`border-b rounded-none py-2 focus:outline-none font-light text-[12px] ${
                location.pathname === "/contacto/"
                  ? "bg-transparent border-unterbau-white"
                  : "border-unterbau-dark"
              }`}
            />
          </div>
        </div>
        <div className="space-y-3 lg:space-y-0 lg:flex lg:justify-between">
          <div className="flex flex-col mt-3 lg:mt-0 lg:w-[40%]">
            <label htmlFor="correo" className="font-medium text-[15px]">
              Correo*:
            </label>
            <input
              id="correo"
              placeholder="Escribe aquí"
              className={`border-b rounded-none py-2 focus:outline-none font-light text-[12px] ${
                location.pathname === "/contacto/"
                  ? "bg-transparent border-unterbau-white"
                  : "border-unterbau-dark"
              }`}
            />
          </div>
          <div className="flex flex-col lg:w-[40%]">
            <label htmlFor="telefono" className="font-medium text-[15px]">
              Teléfono*:
            </label>
            <input
              id="telefono"
              placeholder="Escribe aquí"
              className={`border-b rounded-none py-2 focus:outline-none font-light text-[12px] ${
                location.pathname === "/contacto/"
                  ? "bg-transparent border-unterbau-white"
                  : "border-unterbau-dark"
              }`}
            />
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="mensaje" className="font-medium text-[15px]">
            Mensaje*:
          </label>
          <input
            id="mensaje"
            placeholder="Escribe aquí"
            className={`border-b rounded-none py-2 focus:outline-none font-light text-[12px] ${
              location.pathname === "/contacto/"
                ? "bg-transparent border-unterbau-white"
                : "border-unterbau-dark"
            }`}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className={`py-1.5 px-5 rounded-full mt-5 lg:font-semibold text-[15px] font-medium lg:w-[174px] lg:h-[39px] ${
              location.pathname === "/contacto/"
                ? "bg-unterbau-white text-unterbau-dark"
                : "bg-unterbau-dark text-unterbau-white"
            }`}
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </section>
  )
}
