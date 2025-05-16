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
  const [email, setEmail] = React.useState("")
  return (
    <section
      className={`space-y-8 lg:space-y-0 ${
        location.pathname === "/contacto/"
          ? "bg-white text-black"
          : "bg-unterbau-dark text-unterbau-white"
      } `}
    >
      <article className="flex justify-between items-start">
        <span className="font-black text-[20px] lg:text-[65px] font-museo lg:font-bold lg:leading-[1.2]">
          CAPITALIZAMOS <br /> EL DISEÑO.
        </span>
        <Link
          to="/contacto/"
          className="bg-unterbau-red text-unterbau-white rounded-lg px-5 py-1.5 font-bold text-[13px] w-[110px] h-[30px] flex justify-center items-center"
        >
          Contactar
        </Link>
      </article>
      <article className="space-y-12 lg:flex lg:items-end lg:justify-between">
        <article className="flex justify-between lg:justify-start lg:gap-10">
          <div className="flex gap-1 items-center lg:gap-3">
            <CiLocationOn className="text-2xl" />
            <span>Ciudad de México</span>
          </div>
          <div className="flex gap-5 items-center text-2xl lg:gap-3 lg:text-[15px] lg:font-medium">
            <FaInstagram className="text-2xl" />
            <FaLinkedinIn className="text-2xl" />
          </div>
        </article>
        <article className="text-center space-y-3 relative lg:flex lg:flex-col pb-[30px]">
          <span className="lg:hidden">¡Suscríbete a nuestro Newsletter!</span>
          <span className="hidden lg:block">
            Recibe contenido sobre estrategias de diseño y novedades
          </span>
          <div className="relative flex items-center lg:text-[15px]">
            <input
              placeholder="Tu correo"
              onChange={e => {
                setEmail(e.target.value)
              }}
              value={email}
              className={`w-full rounded-full px-4 py-3 focus:outline-none focus:ring-0 text-unterbau-dark ${
                location.pathname === "/contacto/"
                  ? "bg-unterbau-dark text-white"
                  : "bg-white text-black"
              }`}
            />
            <button
              onClick={() => {
                setEmail("")
                setNotificatioVisible(true)
                setTimeout(() => {
                  setNotificatioVisible(false)
                }, 5000) // 5000 ms = 5 segundos
              }}
              className={`absolute right-3 rounded-full px-4 py-1.5 lg:w-[122px] lg:h-[28px] flex items-center justify-center ${
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
              <div className="lg:absolute bg-unterbau-red text-unterbau-white px-5 py-2 flex items-center justify-between gap-5 -top-12 lg:w-[342px] lg:h-[36px]">
                ¡Ya estás suscrito! Revisa tu correo.{" "}
                <button
                  onClick={() => {
                    setNotificatioVisible(false)
                  }}
                >
                  <TbLetterX className="text-[17px]" />
                </button>
              </div>
            </div>
          )}
        </article>
      </article>
    </section>
  )
}
