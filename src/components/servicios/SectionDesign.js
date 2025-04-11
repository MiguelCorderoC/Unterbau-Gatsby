import * as React from "react"
import { DesignDesplegable } from "./DesignDesplegable"
import imgInvestigacion from "../../assets/images/pexels-fauxels-3182772.jpg"
import imgMarca from "../../assets/images/pexels-anna-nekrashevich-7552373.jpg"
import imgProducto from "../../assets/images/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
import imgServicio from "../../assets/images/crew-szCvt1gP2d4-unsplash.jpg"
import { DesignResearchData } from "../../data/ChildrenDesignData"
import { ChildrenDesplegable } from "./ChildrenDesplegable"
import { ImagenesDesplegable } from "./ImagenesDesplegable"
import { imageArrayResearchDesign } from "../../data/ChildrenDesignImagesData"

export const SectionDesign = () => {
  return (
    <section className="space-y-10">
      <DesignDesplegable
        titulo={"RESEARCH DESIGN"}
        texto={
          "Analisis e investigacion de productos, marcas y servicios, a traves del metodo cientifico y herramientas de empatia"
        }
        imagen={imgInvestigacion}
        children={<ChildrenDesplegable arrayList={DesignResearchData} />}
        childrenImages={
          <ImagenesDesplegable imageArray={imageArrayResearchDesign} />
        }
      />
      <DesignDesplegable
        titulo={"PRODUCT DESIGN"}
        texto={
          "Analisis e investigacion de productos, marcas y servicios, a traves del metodo cientifico y herramientas de empatia"
        }
        imagen={imgProducto}
      />{" "}
      <DesignDesplegable
        titulo={"SERVICE DESIGN"}
        texto={
          "Analisis e investigacion de productos, marcas y servicios, a traves del metodo cientifico y herramientas de empatia"
        }
        imagen={imgServicio}
      />{" "}
      <DesignDesplegable
        titulo={"BRAND DESIGN"}
        texto={
          "Analisis e investigacion de productos, marcas y servicios, a traves del metodo cientifico y herramientas de empatia"
        }
        imagen={imgMarca}
      />
    </section>
  )
}
