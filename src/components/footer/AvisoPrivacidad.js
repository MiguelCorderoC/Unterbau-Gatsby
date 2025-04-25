import * as React from "react"
import imgUnterbau from "../../assets/logos/logo_unterbau_negro.png"

export const AvisoPrivacidad = () => {
  return (
    <section className="space-y-10">
      <article className="text-center space-x-8">
        <span>© 2025 Unterbau</span>
      </article>
      <article className="absolute left-0 right-0 w-full bg-unterbau-red px-5 py-10 lg:px-16 flex justify-center">
        <img src={imgUnterbau} alt="Unterbau logo negro" />
      </article>
    </section>
  )
}
