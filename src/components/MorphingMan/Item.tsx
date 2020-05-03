import React, { useState, useContext, useEffect } from 'react'
import { FluidObject } from 'gatsby-image'
import { GridItem } from "./styled"
import Img from "gatsby-image"
import { MorphingManContext } from '~/context/MorphingMan'

interface Props {
  fluid: FluidObject;
  identifier: number;
}

const Item: React.FC<Props> = ({ fluid, identifier }) => {
  const { chosenImageId } = useContext(MorphingManContext)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (identifier === chosenImageId) {
      setActive(true)
    }
    else {
      setActive(false)
    }
  }, [chosenImageId, identifier])

  return (
    <GridItem opacity={active ? "1" : "0"}>
      <Img fluid={fluid}></Img>
    </GridItem>
  )
}

export default Item
