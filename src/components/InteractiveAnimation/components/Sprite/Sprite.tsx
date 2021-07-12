import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import cn from 'classnames'

type Props = {
  image: any
  visible: boolean
}

const Sprite = ({ image, visible }: Props) => {
  return (
    <div
      className={cn('image-component p-4', {
        'image-component--visible': visible,
      })}
    >
      <GatsbyImage image={image} alt='sprite' />
    </div>
  )
}

export default Sprite
