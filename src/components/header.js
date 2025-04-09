import * as React from "react"
import imgUnterbauLogo from "../assets/logos/logo_unterbau_blanco.png"
import { IoMenu } from "react-icons/io5"
import { Link } from "gatsby"
import { MenuMobile } from "./MenuMobile"

const Header = () => {
  const [visible, setVisible] = React.useState(false)
  return (
    <header className="bg-unterbau-dark text-unterbau-white px-5 py-2 md:px-16 md:py-8">
      <nav className="flex justify-between items-center">
        <img src={imgUnterbauLogo} alt="Logo unterbau" className="w-36" />
        <button
          onClick={() => {
            setVisible(prev => !prev)
          }}
          className="md:hidden"
        >
          <IoMenu className="text-4xl" />
        </button>
        <MenuMobile visible={visible} onClose={() => setVisible(false)} />
        <ul className="hidden md:flex gap-16 text-sm">
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/servicios">SERVICIOS</Link>
          </li>
          <li>
            <span>NOSOTROS</span>
          </li>
          <li>
            <span>CONTACTO</span>
          </li>
          <li>
            <span>BLOG</span>
          </li>
          <li>
            <span className="border-dashed border-2 rounded px-2 py-1">
              SOLICITA UN ANTEPROYECTO
            </span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
