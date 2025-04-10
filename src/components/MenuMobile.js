import * as React from "react"
import imgUnterbau from "../assets/logos/logo_unterbau_negro.png"
import { TbLetterX } from "react-icons/tb"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

export const MenuMobile = ({ visible, onClose }) => {
  const location = useLocation()
  React.useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [visible])

  if (!visible) return null

  return (
    <article className="w-full fixed z-50 h-screen top-0 left-0 bg-unterbau-white text-unterbau-dark pt-5 px-5">
      <div className="flex justify-between items-center">
        <img src={imgUnterbau} alt="Logo unterbau" className="w-40" />
        <button onClick={onClose}>
          <TbLetterX className="text-4xl" />
        </button>
      </div>
      <ul className="flex flex-col items-center gap-14 text-2xl font-semibold mt-24">
        <li className="flex items-center gap-3">
          <span
            className={`size-2 inline-block ${
              location.pathname === "/" ? "bg-unterbau-red" : "bg-transparent"
            }`}
          ></span>
          <Link to="/">INICIO</Link>
        </li>
        <li className="flex items-center gap-3">
          <span
            className={`size-2 inline-block ${
              location.pathname === "/servicios/"
                ? "bg-unterbau-red"
                : "bg-transparent"
            }`}
          ></span>
          <Link to="/servicios">SERVICIOS</Link>
        </li>
        <li className="flex items-center gap-3">
          <span
            className={`size-2 inline-block ${
              location.pathname === "/nosotros/"
                ? "bg-unterbau-red"
                : "bg-transparent"
            }`}
          ></span>
          <Link to="/nosotros">NOSOTROS</Link>
        </li>
        <li className="flex items-center gap-3">
          <span
            className={`size-2 inline-block ${
              location.pathname === "/contacto/"
                ? "bg-unterbau-red"
                : "bg-transparent"
            }`}
          ></span>
          <Link to="/contacto">CONTACTO</Link>
        </li>
        <li className="flex items-center gap-3">
          <span
            className={`size-2 inline-block ${
              location.pathname === "/blog/"
                ? "bg-unterbau-red"
                : "bg-transparent"
            }`}
          ></span>
          <Link to="/blog">BLOG</Link>
        </li>
      </ul>
    </article>
  )
}
