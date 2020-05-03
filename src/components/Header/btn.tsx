import React from 'react'
import Img, { FluidObject } from "gatsby-image"
import { BtnWrap } from "./styled"

interface Props {
  fluid: FluidObject
}

const Btn: React.FC<Props> = ({ fluid }) => {
  return (
    <BtnWrap>
      <Img fluid={fluid}></Img>
    </BtnWrap>
  )
}

export default Btn
