import * as React from "react"
import { DesignTarget } from "./DesignTarget"
import imgProducto from "../../assets/images/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
import imgServicio from "../../assets/images/crew-szCvt1gP2d4-unsplash.jpg"
import imgInvestigacion from "../../assets/images/pexels-fauxels-3182772.jpg"
import imgMarca from "../../assets/images/pexels-anna-nekrashevich-7552373.jpg"

export const SectionDesign = () => {
  return (
    <section className="md:flex md:flex-wrap -mx-5 md:-mx-16">
      <DesignTarget
        imagen={imgProducto}
        titulo={"Product Design"}
        texto={"Web App - Mobile App - Website - Landingpage"}
      />
      <DesignTarget
        imagen={imgServicio}
        titulo={"Product Design"}
        texto={"Web App - Mobile App - Website - Landingpage"}
      />
      <DesignTarget
        imagen={imgInvestigacion}
        titulo={"Product Design"}
        texto={"Web App - Mobile App - Website - Landingpage"}
      />
      <DesignTarget
        imagen={imgMarca}
        titulo={"Product Design"}
        texto={"Web App - Mobile App - Website - Landingpage"}
      />
    </section>
  )
}
