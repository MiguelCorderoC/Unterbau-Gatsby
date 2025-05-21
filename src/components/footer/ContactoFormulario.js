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
      <article
        className={`flex justify-between items-center lg:justify-start lg:gap-5 font-light text-[14px] ${
          location.pathname === "/contacto/" && "lg:-mx-28 lg:text-lg lg:gap-14"
        }`}
      >
        <span className="flex gap-2 items-center">
          <CiLocationOn className="text-lg lg:text-xl" /> Ciudad de México
        </span>
        <span className="flex gap-2 items-center">
          <CiMail className="text-lg lg:text-xl" /> contacto@unterbau.mx
        </span>
      </article>
      <div
        className={`space-y-5 lg:space-y-8 ${
          location.pathname === "/contacto/" && "lg:flex lg:-mx-28"
        }`}
      >
        <article
          className={`font-thin text-[33px] ${
            location.pathname === "/contacto/" && "lg:w-[50%]"
          }`}
        >
          <span className="lg:hidden">
            ¿TIENES UN <br /> PROYECTO EN <br /> PUERTA? ¡HABLEMOS!
          </span>
          <span
            className={`hidden lg:text-[60px] ${
              location.pathname === "/contacto/" ? "lg:hidden" : "lg:block"
            }`}
          >
            DISEÑEMOS JUNTOS ESA <br /> GRAN IDEA
          </span>
          <span
            className={`hidden text-8xl leading-[1.1] ${
              location.pathname === "/contacto/" ? "lg:block" : "lg:hidden"
            }`}
          >
            TU <br className="hidden lg:block" /> PRÓXIMA{" "}
            <br className="hidden lg:block" />
            GRAN IDEA
            <br className="hidden lg:block" /> COMIENZA{" "}
            <br className="hidden lg:block" />
            AQUÍ
          </span>
        </article>
        <form
          className={`lg:space-y-8 ${
            location.pathname === "/contacto/" && "lg:w-[50%]"
          }`}
        >
          <div
            className={`space-y-3 lg:space-y-0 lg:flex lg:justify-between ${
              location.pathname === "/contacto/" && "lg:flex-col lg:space-y-8"
            }`}
          >
            <div
              className={`flex flex-col ${
                location.pathname === "/contacto/" ? "lg:w-full" : "lg:w-[40%]"
              }`}
            >
              <label
                htmlFor="mensaje"
                className={`font-medium text-[15px] ${
                  location.pathname === "/contacto/" ? "lg:hidden" : "block"
                }`}
              >
                {" "}
                Nombre*:
              </label>{" "}
              <label
                htmlFor="mensaje"
                className={`font-medium text-[15px] ${
                  location.pathname === "/contacto/"
                    ? "hidden lg:block"
                    : "hidden"
                }`}
              >
                Nombre*
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
            <div
              className={`flex flex-col ${
                location.pathname === "/contacto/" ? "lg:w-full" : "lg:w-[40%]"
              }`}
            >
              <label
                htmlFor="mensaje"
                className={`font-medium text-[15px] ${
                  location.pathname === "/contacto/" ? "lg:hidden" : "block"
                }`}
              >
                {" "}
                Apellido*:
              </label>{" "}
              <label
                htmlFor="mensaje"
                className={`font-medium text-[15px] ${
                  location.pathname === "/contacto/"
                    ? "hidden lg:block"
                    : "hidden"
                }`}
              >
                Apellido*
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
          <div
            className={`space-y-3 lg:space-y-0 lg:flex lg:justify-between ${
              location.pathname === "/contacto/" && "lg:flex-col lg:space-y-8"
            }`}
          >
            <div
              className={`flex flex-col ${
                location.pathname === "/contacto/" ? "lg:w-full" : "lg:w-[40%]"
              }`}
            >
              {" "}
              <label
                htmlFor="mensaje"
                className={`font-medium text-[15px] ${
                  location.pathname === "/contacto/" ? "lg:hidden" : "block"
                }`}
              >
                {" "}
                Correo*:
              </label>{" "}
              <label
                htmlFor="mensaje"
                className={`font-medium text-[15px] ${
                  location.pathname === "/contacto/"
                    ? "hidden lg:block"
                    : "hidden"
                }`}
              >
                Correo electrónico*
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
            <div
              className={`flex flex-col ${
                location.pathname === "/contacto/" ? "lg:w-full" : "lg:w-[40%]"
              }`}
            >
              {" "}
              <label
                htmlFor="mensaje"
                className={`font-medium text-[15px] ${
                  location.pathname === "/contacto/" ? "lg:hidden" : "block"
                }`}
              >
                {" "}
                Teléfono*:
              </label>
              <label
                htmlFor="mensaje"
                className={`font-medium text-[15px] ${
                  location.pathname === "/contacto/"
                    ? "hidden lg:block"
                    : "hidden"
                }`}
              >
                Número de teléfono
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
            <label
              htmlFor="mensaje"
              className={`font-medium text-[15px] ${
                location.pathname === "/contacto/" ? "lg:hidden" : "block"
              }`}
            >
              Mensaje*:
            </label>
            <label
              htmlFor="mensaje"
              className={`font-medium text-[15px] ${
                location.pathname === "/contacto/"
                  ? "hidden lg:block"
                  : "hidden"
              }`}
            >
              Cuéntanos el motivo de tu mensaje
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
          <div className="flex justify-between font-thin text-xs mt-5">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="border border-white text-white accent-transparent hidden lg:block"
              />{" "}
              <input type="checkbox" className="lg:hidden" />
              <span>Aceptar aviso de privacidad</span>
            </div>
            <span className="hidden lg:block">*Campos obligatorios</span>
          </div>
          <div className="flex justify-center">
            <button
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
      </div>
    </section>
  )
}
