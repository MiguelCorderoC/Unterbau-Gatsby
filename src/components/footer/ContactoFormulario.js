import * as React from "react"
import { CiLocationOn, CiMail } from "react-icons/ci"
import { useLocation } from "@reach/router"

export const ContactoFormulario = () => {
  const location = useLocation()

  return (
    <section
      className={`-mx-5 md:-mx-16 -mt-11 px-5 py-10 md:px-48 space-y-5 md:space-y-8 ${
        location.pathname === "/contacto/"
          ? "text-unterbau-white bg-unterbau-dark"
          : "bg-unterbau-white text-unterbau-dark"
      } ${location.pathname === "/blog/" && "hidden"}`}
    >
      <article className="flex justify-between items-center md:justify-start md:gap-5">
        <span className="flex gap-2 items-center">
          <CiLocationOn /> Ciudad de México
        </span>
        <span className="flex gap-2 items-center">
          <CiMail /> contacto@unterbau.mx
        </span>
      </article>
      <article className="text-4xl">
        <span className="md:hidden">
          ¿TIENES UN <br /> PROYECTO EN <br /> PUERTA? HABLEMOS
        </span>
        <span className="hidden md:block text-6xl">
          DISEÑEMOS JUNTOS ESA <br /> GRAN IDEA
        </span>
      </article>
      <form className="md:space-y-8">
        <div className="space-y-3 md:space-y-0 md:flex md:justify-between">
          <div className="flex flex-col md:w-[40%]">
            <label htmlFor="nombre">Nombre*:</label>
            <input
              id="nombre"
              placeholder="Escribe aqui"
              className={`border-b rounded-none py-2 focus:outline-none ${
                location.pathname === "/contacto/"
                  ? "bg-transparent border-unterbau-white"
                  : "border-unterbau-dark"
              }`}
            />
          </div>
          <div className="flex flex-col md:w-[40%]">
            <label htmlFor="apellido">Apellido*:</label>
            <input
              id="apellido"
              placeholder="Escribe aqui"
              className={`border-b rounded-none py-2 focus:outline-none ${
                location.pathname === "/contacto/"
                  ? "bg-transparent border-unterbau-white"
                  : "border-unterbau-dark"
              }`}
            />
          </div>
        </div>
        <div className="space-y-3 md:space-y-0 md:flex md:justify-between">
          <div className="flex flex-col mt-3 md:mt-0 md:w-[40%]">
            <label htmlFor="correo">Correo*:</label>
            <input
              id="correo"
              placeholder="Escribe aqui"
              className={`border-b rounded-none py-2 focus:outline-none ${
                location.pathname === "/contacto/"
                  ? "bg-transparent border-unterbau-white"
                  : "border-unterbau-dark"
              }`}
            />
          </div>
          <div className="flex flex-col md:w-[40%]">
            <label htmlFor="telefono">Teléfono*:</label>
            <input
              id="telefono"
              placeholder="Escribe aqui"
              className={`border-b rounded-none py-2 focus:outline-none ${
                location.pathname === "/contacto/"
                  ? "bg-transparent border-unterbau-white"
                  : "border-unterbau-dark"
              }`}
            />
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="mensaje">Mensaje*:</label>
          <input
            id="mensaje"
            placeholder="Escribe aqui"
            className={`border-b rounded-none py-2 focus:outline-none ${
              location.pathname === "/contacto/"
                ? "bg-transparent border-unterbau-white"
                : "border-unterbau-dark"
            }`}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className={`py-1.5 px-5 rounded-full mt-5 md:font-semibold ${
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
