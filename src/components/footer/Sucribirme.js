import * as React from "react"
import { CiLocationOn } from "react-icons/ci"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6"
import { TbLetterX } from "react-icons/tb"

export const Suscribirme = () => {
  const [notificationVisible, setNotificatioVisible] = React.useState(false)
  return (
    <section className="text-unterbau-white bg-unterbau-dark space-y-8 md:space-y-0">
      <article className="flex justify-between items-start">
        <span className="font-bold text-2xl md:text-5xl">
          CAPITALIZAMOS <br /> EL DISEÑO.
        </span>
        <button className="bg-unterbau-red text-unterbau-white font-semibold rounded-lg px-5 py-1.5">
          Contactar
        </button>
      </article>
      <article className="space-y-5 md:flex md:items-end md:justify-between">
        <article className="flex justify-between md:justify-start md:gap-10">
          <div className="flex gap-5 items-center md:gap-3">
            <CiLocationOn className="text-2xl" />
            <span>Mexico City</span>
          </div>
          <div className="flex gap-5 items-center text-2xl md:gap-3">
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </article>
        <article className="text-center space-y-3 relative lg:flex lg:flex-col">
          <span className="md:hidden">¡Suscríbete a nuestro Newsletter!</span>
          <span className="hidden md:block">
            Recibe contenido sobre estrategias de diseño y novedades
          </span>
          <div className="relative flex items-center">
            <input
              placeholder="Tu correo"
              className="w-full rounded-full px-4 py-3 focus:outline-none focus:ring-0 text-unterbau-dark"
            />
            <button
              onClick={() => {
                setNotificatioVisible(true)
              }}
              className="absolute right-3 bg-unterbau-dark text-unterbau-white rounded-full px-4 py-1.5"
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
