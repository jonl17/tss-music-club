import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import cn from 'classnames'

type Props = {
  fluid: FluidObject
  visible: boolean
}

const Sprite = ({ fluid, visible }: Props) => {
  return (
    <div
      className={cn('image-component p-4', {
        'image-component--visible': visible,
      })}
    >
      <Img fluid={fluid}></Img>
    </div>
  )
}

export default Sprite
