import * as React from "react"
import imgUnterbauLogo from "../assets/logos/logo_unterbau_blanco.png"
import { IoMenu } from "react-icons/io5"

const Header = () => (
  <header className="bg-unterbau-dark text-unterbau-white px-5 py-2 md:px-16 md:py-8">
    <nav className="flex justify-between items-center">
      <img src={imgUnterbauLogo} alt="Logo unterbau" className="w-36" />
      <button className="md:hidden">
        <IoMenu className="text-4xl" />
      </button>
      <ul className="hidden md:flex gap-16 text-sm">
        <li>
          <span>INICIO</span>
        </li>
        <li>
          <span>SERVICIOS</span>
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

export default Header
