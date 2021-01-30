import React from "react"
import { Helmet } from "react-helmet"
import { PageName } from "~/types"

type Props = {
  pageName: PageName
}

const Seo: React.FC<Props> = ({ pageName }) => {
  return (
    <Helmet>
      <title>{`TSS ${pageName ? "| " + pageName : ""}`}</title>
      <link rel="icon" href="favi-tss.png" type="image/png"></link>
    </Helmet>
  )
}

export default Seo
