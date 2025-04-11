import * as React from "react"
import imgUnterbauLogo from "../assets/logos/logo_unterbau_blanco.png"
import imgUnterbauLogoNegro from "../assets/logos/logo_unterbau_negro.png"
import { IoMenu } from "react-icons/io5"
import { Link } from "gatsby"
import { MenuMobile } from "./MenuMobile"
import { useLocation } from "@reach/router"

const Header = () => {
  const location = useLocation()
  const [visible, setVisible] = React.useState(false)
  return (
    <header
      className={`px-5 py-2 lg:px-16 lg:py-8 fixed z-10 w-full top-0 ${
        location.pathname === "/nosotros/" || location.pathname === "/blog/"
          ? "bg-unterbau-white text-unterbau-dark"
          : "bg-unterbau-dark text-unterbau-white "
      }`}
    >
      <nav className="flex justify-between items-center">
        <img
          src={
            location.pathname === "/nosotros/" || location.pathname === "/blog/"
              ? imgUnterbauLogoNegro
              : imgUnterbauLogo
          }
          alt="Logo unterbau"
          className="w-36"
        />
        <button
          onClick={() => {
            setVisible(prev => !prev)
          }}
          className="lg:hidden"
        >
          <IoMenu className="text-4xl" />
        </button>
        <MenuMobile visible={visible} onClose={() => setVisible(false)} />
        <ul className="hidden lg:flex gap-16 text-sm">
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
            ></span>{" "}
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
          <li>
            <Link
              to="/contacto"
              className="border-dashed border-2 rounded px-2 py-1"
            >
              SOLICITA UN ANTEPROYECTO
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
