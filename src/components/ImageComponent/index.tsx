import React, { useState, useEffect } from 'react'
import { GridItem } from './styled'
import Img from 'gatsby-image'
import { ImageComponentProps } from '@src/types'
import { useGymnist } from '@src/context/StopMotion/Gymnist'

const Item: React.FC<ImageComponentProps> = ({ fluid, identifier, size }) => {
  const { chosenImageId } = useGymnist()
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (identifier === chosenImageId) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [chosenImageId, identifier])

  return (
    <GridItem
      opacity={active ? '1' : '0'}
      padding={size === 'large' ? '3rem' : '6rem'}
    >
      <Img fluid={fluid}></Img>
    </GridItem>
  )
}

export default Item
