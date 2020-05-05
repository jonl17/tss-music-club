import React, { useState, useEffect } from 'react'
import Img, { FluidObject } from "gatsby-image"
import { BtnWrap } from "./styled"
import { Link } from "gatsby"

interface Props {
  regular: FluidObject;
  underlined: FluidObject;
  to: string;
  currentPathname: string;
}

const Btn: React.FC<Props> = ({ regular, underlined, to, currentPathname }) => {
  const [active, setActive] = useState(false)
  const [isCurrentPage, setIsCurrentPage] = useState(false)
  useEffect(() => {
    if (currentPathname === to) {
      setIsCurrentPage(true)
    }
    else {
      setIsCurrentPage(false)
      setActive(false)
    }
  }, [currentPathname])
  return (
    <BtnWrap onMouseOver={() => setActive(true)} onMouseLeave={() => {
      if (!isCurrentPage)
        setActive(false)
    }}>
      <Link to={to}>
        <Img fluid={regular}></Img>
        <Img style={active || isCurrentPage ? { opacity: "1" } : { opacity: "0" }} fluid={underlined}></Img>
      </Link>
    </BtnWrap>
  )
}

export default Btn
