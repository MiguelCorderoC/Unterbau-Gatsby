import * as React from "react"
import { Procesos } from "./Procesos"
import imgEntendimiento from "../../assets/icons/man-scientist-2.svg"
import imgCreacion from "../../assets/icons/transparency.svg"
import imgPruebas from "../../assets/icons/quiz.svg"
import imgLanzamiento from "../../assets/icons/rocket-lunch.svg"
import imgMedicion from "../../assets/icons/speedometer-kpi.svg"

export const ProcesosSeccion = () => {
  return (
    <section className="flex flex-wrap gap-5 justify-between lg:pb-[100px]">
      <Procesos
        titulo={"ENTENDIMIENTO"}
        icono={imgEntendimiento}
        texto={
          "Profundizamos en la esencia de cada proyecto, analizando el objetivo, las necesidades del usuario, el mercado y el negocio."
        }
      />
      <Procesos
        icono={imgCreacion}
        titulo={"CREACIÓN"}
        texto={
          "En conjunto con cada cliente, definimos y creamos soluciones que se alinean con los objetivos y la visión de cada proyecto."
        }
      />
      <Procesos
        icono={imgPruebas}
        titulo={"PRUEBAS"}
        texto={
          "Probamos con usuarios reales previo al lanzamiento, lo que nos permite minimizar errores y lanzar productos optimizados."
        }
      />
      <Procesos
        icono={imgLanzamiento}
        titulo={"LANZAMIENTO"}
        texto={
          "Diseñamos una estrategia de lanzamiento que aumente las posibilidades de éxito de cada proyecto."
        }
      />

      <Procesos
        icono={imgMedicion}
        titulo={"MEDICIÓN"}
        texto={
          "Evaluamos el desempeño de cada proyecto, monitoreando y analizándolo a lo largo del período requerido."
        }
      />
    </section>
  )
}
