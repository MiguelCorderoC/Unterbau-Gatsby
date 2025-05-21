import * as React from "react"
import { Link } from "gatsby"
import { PostTarget } from "./PostTarget"
import imgPost from "../../assets/faltantes/Tamano-grande/pexels-cottonbro-3831861.jpg"

export const PostSection = () => {
  return (
    <section className="lg:pt-10">
      <article className="flex flex-col gap-10 lg:flex-row lg:flex-wrap lg:justify-between">
        <PostTarget
          categoria={"Research Design"}
          titulo={"La importancia de investigar antes de crear"}
          imagen={imgPost}
          fecha={"Feb 2025"}
        />
        <PostTarget
          categoria={"Research Design"}
          titulo={"La importancia de investigar antes de crear"}
          imagen={imgPost}
          fecha={"Feb 2025"}
        />{" "}
        <PostTarget
          categoria={"Research Design"}
          titulo={"La importancia de investigar antes de crear"}
          imagen={imgPost}
          fecha={"Feb 2025"}
        />{" "}
        <PostTarget
          categoria={"Research Design"}
          titulo={"La importancia de investigar antes de crear"}
          imagen={imgPost}
          fecha={"Feb 2025"}
        />
      </article>
      <article className="flex flex-col gap-3">
        <div className="flex justify-center font-semibold text-lg py-8">
          <Link>Ver más</Link>
        </div>
        <span className="text-3xl lg:hidden">
          Encuentra más <br /> artículos relacionados
        </span>
      </article>
    </section>
  )
}
