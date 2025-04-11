import * as React from "react"
import img1 from "../../assets/images/brooke-cagle-eL4xIEuHzzk-unsplash.jpg"
import img2 from "../../assets/images/possessed-photography-g29arbbvPjo-unsplash.jpg"
import img3 from "../../assets/images/docusign-7RWBSYA9Rro-unsplash.jpg"
import { Link } from "gatsby"

export const Proposito = () => {
  return (
    <section className="space-y-10">
      <article className="space-y-10">
        <span className="text-6xl font-semibold lg:font-light lg:text-9xl">
          DISEÑAMOS <br className="lg:hidden" />
          <p className="lg:flex justify-end">
            CON
            <br className="lg:hidden" /> PROPÓSITO
          </p>
        </span>
        <p className="text-xl lg:hidden">
          Más que un estudio creativo, somos estrategas del diseño. Partimos
          siempre de la claridad de objetivos, priorizamos el entendimiento para
          poder crear estrategias exitosas.
        </p>
        <div className="hidden lg:flex justify-between items-center">
          <p className="text-xl">
            <span className="font-semibold">
              Más que creativos, nos consideramos un estudio de estrategia de
              diseño.
            </span>
            <br />
            Partimos siempre del objetivo a lograr, priorizamos su entendimiento
            para <br />
            posteriormente crear una estrategia de diseño que nos ayude a
            lograrlo.
          </p>
          <Link
            to="/contacto"
            className="bg-unterbau-dark text-unterbau-white px-5 py-1.5 rounded-full"
          >
            Habla con nosotros
          </Link>
        </div>
      </article>
      <article className="lg:flex justify-between">
        <img
          src={img1}
          alt="Imagen propósito"
          className="h-28 w-[90%] lg:w-[30%] lg:h-72 object-cover"
        />
        <div className="flex justify-end lg:inline-block lg:w-[30%]">
          <img
            src={img2}
            alt="Imagen propósito"
            className="h-28 lg:h-72 object-cover w-[90%] lg:w-[100%]"
          />
        </div>
        <img
          src={img3}
          alt="Imagen propósito"
          className="h-28 w-[90%] lg:w-[30%] lg:h-72 object-cover"
        />
      </article>
      <p className="text-5xl font-thin lg:text-8xl">
        <span className="lg:font-bold">Unterbau</span> nace de la necesidad de
        brindar a las personas la libertad de interactuar con la tecnología con
        confianza y sin sentirse juzgadas.
      </p>
    </section>
  )
}
