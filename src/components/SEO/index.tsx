import React from 'react'
import { Helmet } from "react-helmet"
import { PageName } from '~/types'

type Props = {
  pageName: PageName;
}

const Seo: React.FC<Props> = ({ pageName }) => {
  return (
    <Helmet>
      <title>{`TSS ${pageName ? "| " + pageName : ""}`}</title>
    </Helmet>
  )
}

export default Seo
