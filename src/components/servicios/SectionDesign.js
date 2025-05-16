import * as React from "react"
import { DesignDesplegable } from "./DesignDesplegable"
import imgInvestigacion from "../../assets/images/pexels-fauxels-3182772.jpg"
import imgMarca from "../../assets/images/pexels-anna-nekrashevich-7552373.jpg"
import imgProducto from "../../assets/images/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
import imgServicio from "../../assets/images/crew-szCvt1gP2d4-unsplash.jpg"
import {
  DesignResearchData,
  DesignBrandData,
  DesignProductData,
  DesignServiceData,
} from "../../data/ChildrenDesignData"
import { ChildrenDesplegable } from "./ChildrenDesplegable"
import { ImagenesDesplegable } from "./ImagenesDesplegable"
import {
  imageArrayResearchDesign,
  imageArrayBrandDesign,
  imageArrayProductDesign,
  imageArrayServiceDesign,
} from "../../data/ChildrenDesignImagesData"

export const SectionDesign = () => {
  return (
    <section className="space-y-10 pb-[30px]">
      <DesignDesplegable
        titulo={"RESEARCH DESIGN"}
        texto={
          "Análisis e investigación de productos, marcas y servicios, a través del método científico y herramientas de empatía."
        }
        imagen={imgInvestigacion}
        moveImage={"object-[center_88%]"}
        children={<ChildrenDesplegable arrayList={DesignResearchData} />}
        childrenImages={
          <ImagenesDesplegable
            imageArray={imageArrayResearchDesign}
            moveImage={"object-bottom"}
          />
        }
      />
      <DesignDesplegable
        titulo={"PRODUCT DESIGN"}
        texto={
          "Diseño de productos digitales rentables, usables y atractivos. A través de metodologías centradas en el usuario y el negocio."
        }
        imagen={imgProducto}
        children={<ChildrenDesplegable arrayList={DesignProductData} />}
        childrenImages={
          <ImagenesDesplegable imageArray={imageArrayProductDesign} />
        }
      />{" "}
      <DesignDesplegable
        titulo={"SERVICE DESIGN"}
        texto={
          "Diseño de servicio digital y piso de venta, considerando la creación de experiencia de cliente y la optimización de procesos de atención."
        }
        imagen={imgServicio}
        moveImage={"object-[center_25%]"}
        children={<ChildrenDesplegable arrayList={DesignServiceData} />}
        childrenImages={
          <ImagenesDesplegable imageArray={imageArrayServiceDesign} />
        }
      />{" "}
      <DesignDesplegable
        titulo={"BRAND DESIGN"}
        texto={
          "Diseño de marca fonética y gráfica con disponibilidad de registro ante el IMPI, que conectan con sus usuarios y reflejan la esencia de cada negocio."
        }
        imagen={imgMarca}
        children={<ChildrenDesplegable arrayList={DesignBrandData} />}
        childrenImages={
          <ImagenesDesplegable imageArray={imageArrayBrandDesign} />
        }
      />
    </section>
  )
}
