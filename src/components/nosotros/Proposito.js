import * as React from "react"
import img1 from "../../assets/images/kenny-eliason-SvhXD3kPSTY-unsplash.jpg"
import img2 from "../../assets/images/pexels-thalittlemarc-28208333.jpg"
import img3 from "../../assets/images/pexels-quang-nguyen-vinh-222549-2165933.jpg"
import { Link } from "gatsby"

export const Proposito = () => {
  return (
    <section className="space-y-10">
      <article className="space-y-10">
        <span className="text-[50px] font-black lg:font-light lg:text-9xl leading-[1.1]">
          DISEÑAMOS <br className="lg:hidden" />
          <p className="lg:flex justify-end">
            CON
            <br className="lg:hidden" /> PROPÓSITO
          </p>
        </span>
        <p className="text-[18px] font-light lg:hidden">
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
          className="h-28 w-[90%] lg:w-[30%] lg:h-72 object-cover object-top"
        />
      </article>
      <p className="text-5xl font-thin lg:text-8xl pt-[70px] font-museo text-[40px]">
        <span className="lg:font-bold">Unterbau</span> nace{" "}
        <br className="md:hidden" /> de la necesidad{" "}
        <br className="md:hidden" /> de brindar a las personas la{" "}
        <br className="md:hidden" /> libertad de <br className="md:hidden" />{" "}
        interactuar con <br className="md:hidden" /> la tecnología con{" "}
        <br className="md:hidden" /> confianza y sin{" "}
        <br className="md:hidden" /> sentirse juzgadas.
      </p>
    </section>
  )
}
