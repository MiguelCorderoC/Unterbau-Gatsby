import { Link } from "gatsby"
import * as React from "react"
import { CiLocationOn } from "react-icons/ci"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6"
import { TbLetterX } from "react-icons/tb"
import { useLocation } from "@reach/router"

export const Suscribirme = () => {
  const location = useLocation()
  const [notificationVisible, setNotificatioVisible] = React.useState(false)
  return (
    <section
      className={`space-y-8 lg:space-y-0 ${
        location.pathname === "/contacto/"
          ? "bg-white text-black -mx-5 px-5 py-10"
          : "bg-unterbau-dark text-unterbau-white"
      } `}
    >
      <article className="flex justify-between items-start">
        <span className="font-black text-[20px] lg:text-5xl">
          CAPITALIZAMOS <br /> EL DISEÑO.
        </span>
        <Link className="bg-unterbau-red text-unterbau-white rounded-lg px-5 py-1.5 font-bold text-[13px]">
          Contactar
        </Link>
      </article>
      <article className="space-y-12 lg:flex lg:items-end lg:justify-between">
        <article className="flex justify-between lg:justify-start lg:gap-10">
          <div className="flex gap-5 items-center lg:gap-3">
            <CiLocationOn className="text-2xl" />
            <span>Mexico City</span>
          </div>
          <div className="flex gap-5 items-center text-2xl lg:gap-3">
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </article>
        <article className="text-center space-y-3 relative lg:flex lg:flex-col">
          <span className="lg:hidden">¡Suscríbete a nuestro Newsletter!</span>
          <span className="hidden lg:block">
            Recibe contenido sobre estrategias de diseño y novedades
          </span>
          <div className="relative flex items-center">
            <input
              placeholder="Tu correo"
              className={`w-full rounded-full px-4 py-3 focus:outline-none focus:ring-0 text-unterbau-dark ${
                location.pathname === "/contacto/"
                  ? "bg-unterbau-dark text-white"
                  : "bg-white text-black"
              }`}
            />
            <button
              onClick={() => {
                setNotificatioVisible(true)
              }}
              className={`absolute right-3 rounded-full px-4 py-1.5 ${
                location.pathname === "/contacto/"
                  ? "bg-white text-black"
                  : "bg-unterbau-dark text-white"
              }`}
            >
              Suscribirme
            </button>
          </div>{" "}
          {notificationVisible && (
            <div className="block lg:flex justify-center">
              <div className="lg:absolute bg-unterbau-red text-unterbau-white px-5 py-2 flex items-center justify-between gap-5 -top-12">
                ¡Ya estás suscrito! Revisa tu correo.{" "}
                <button
                  onClick={() => {
                    setNotificatioVisible(false)
                  }}
                >
                  <TbLetterX />
                </button>
              </div>
            </div>
          )}
        </article>
      </article>
    </section>
  )
}
