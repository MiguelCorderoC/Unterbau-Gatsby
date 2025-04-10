import * as React from "react"
import Layout from "../components/layout"
import { Proposito } from "../components/nosotros/Proposito"
import { NuestroProposito } from "../components/nosotros/NuestroProposito"
import { NuestraEstrategia } from "../components/nosotros/NuestraEstrategia"
import { Capitalizamos } from "../components/nosotros/Capitalizamos"

const NosotrosPage = () => {
  return (
    <Layout>
      <Proposito />
      <NuestroProposito />
      <NuestraEstrategia />
      <Capitalizamos />
    </Layout>
  )
}

export default NosotrosPage
