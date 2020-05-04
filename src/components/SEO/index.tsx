import React from 'react'
import { Helmet } from "react-helmet"

type Props = {
  pageName: string | undefined;
}

const Seo: React.FC<Props> = ({ pageName }) => {
  return (
    <Helmet>
      <title>{`TSS ${pageName ? "| " + pageName : ""}`}</title>
    </Helmet>
  )
}

export default Seo
