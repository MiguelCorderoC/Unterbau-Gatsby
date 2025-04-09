import * as React from "react"
import imgUnterbau from "../assets/logos/logo_unterbau_negro.png"
import { TbLetterX } from "react-icons/tb"
import { Link } from "gatsby"

export const MenuMobile = ({ visible, onClose }) => {
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
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/servicios">SERVICIOS</Link>
        </li>
        <li>
          <Link to="/nosotros">NOSOTROS</Link>
        </li>
        <li>
          <Link to="/contacto">CONTACTO</Link>
        </li>
        <li>
          <Link to="/blog">BLOG</Link>
        </li>
      </ul>
    </article>
  )
}
