import * as React from "react"
import { DesignTarget } from "./DesignTarget"
import imgProducto from "../../assets/images/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
import imgServicio from "../../assets/images/crew-szCvt1gP2d4-unsplash.jpg"
import imgInvestigacion from "../../assets/images/pexels-fauxels-3182772.jpg"
import imgMarca from "../../assets/images/pexels-anna-nekrashevich-7552373.jpg"

export const SectionDesign = () => {
  return (
    <section className="lg:flex lg:flex-wrap -mx-5 lg:-mx-16">
      <DesignTarget
        imagen={imgProducto}
        titulo={"Product Design"}
        texto={"Web App - Mobile App - Website - Landingpage"}
        position={"object-right"}
        idSection={"productDesign"}
      />
      <DesignTarget
        imagen={imgServicio}
        titulo={"Service Design"}
        texto={"Digital - POS"}
        position={"object-left"}
        idSection={"serviceDesign"}
      />
      <DesignTarget
        imagen={imgInvestigacion}
        titulo={"Research Design"}
        texto={"UX - CX - Product - Brand"}
        position={"object-left"}
        idSection={"researchDesign"}
      />
      <DesignTarget
        imagen={imgMarca}
        titulo={"Brand Design"}
        texto={" Naming - Branding - Brand Book"}
        idSection={"brandDesign"}
      />
    </section>
  )
}
