import * as React from "react"
import imgUnterbau from "../assets/logos/logo_unterbau_negro.png"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import imgCancel from "../assets/icons/imgEquis.png"

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
          <img src={imgCancel} className="size-10" />
        </button>
      </div>
      <ul className="flex flex-col items-center gap-14 text-2xl mt-24 font-museo text-[25px]">
        <li className="flex items-center gap-3">
          <span
            className={`w-[16px] h-[16px] inline-block ${
              location.pathname === "/" ? "bg-unterbau-red" : "bg-transparent"
            }`}
          ></span>
          <Link
            to="/"
            className={location.pathname === "/" ? "font-black" : "font-light"}
          >
            INICIO
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <span
            className={`w-[16px] h-[16px] inline-block ${
              location.pathname === "/servicios/"
                ? "bg-unterbau-red font-black"
                : "bg-transparent"
            }`}
          ></span>
          <Link
            to="/servicios"
            className={
              location.pathname === "/servicios/" ? "font-black" : "font-light"
            }
          >
            SERVICIOS
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <span
            className={`w-[16px] h-[16px] inline-block ${
              location.pathname === "/nosotros/"
                ? "bg-unterbau-red font-black"
                : "bg-transparent"
            }`}
          ></span>
          <Link
            to="/nosotros"
            className={
              location.pathname === "/nosotros/" ? "font-black" : "font-light"
            }
          >
            NOSOTROS
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <span
            className={`w-[16px] h-[16px] inline-block ${
              location.pathname === "/contacto/"
                ? "bg-unterbau-red font-black"
                : "bg-transparent"
            }`}
          ></span>
          <Link
            to="/contacto"
            className={
              location.pathname === "/contacto/" ? "font-black" : "font-light"
            }
          >
            CONTACTO
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <span
            className={`w-[16px] h-[16px] inline-block ${
              location.pathname === "/blog/"
                ? "bg-unterbau-red font-black"
                : "bg-transparent font-light"
            }`}
          ></span>
          <Link
            to="/blog"
            className={
              location.pathname === "/blog/" ? "font-black" : "font-light"
            }
          >
            BLOG
          </Link>
        </li>
      </ul>
    </article>
  )
}
