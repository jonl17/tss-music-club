import React, { useState } from 'react'
import Img, { FluidObject } from "gatsby-image"
import { BtnWrap } from "./styled"
import { Link } from "gatsby"

interface Props {
  regular: FluidObject;
  underlined: FluidObject;
  to: string;
}

const Btn: React.FC<Props> = ({ regular, underlined, to }) => {
  const [active, setActive] = useState(false)
  return (
    <BtnWrap onMouseOver={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <Link to={to}>
        <Img fluid={regular}></Img>
        <Img style={active ? { opacity: "1" } : { opacity: "0" }} fluid={underlined}></Img>
      </Link>
    </BtnWrap>
  )
}

export default Btn
