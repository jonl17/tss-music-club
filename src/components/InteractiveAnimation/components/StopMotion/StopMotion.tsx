import { Image } from '@src/types'
import React from 'react'
import { Sensor, Sprite, useGymnist } from '../..'

export interface StopMotionProps {
  images: Image[]
  sensorType: 'xy' | 'x'
}

// this components creates a stopmotion thingy, you need to feed it images and a context
const StopMotion = ({ images, sensorType }: StopMotionProps) => {
  const { chosenImageId } = useGymnist()

  return (
    <>
      {/* this is the interaction sensor that controls the stopmotion */}
      <Sensor count={images.length} type={sensorType} />

      <div className='stop-motion-reel'>
        <div className='stop-motion-reel__image-stack'>
          {images.map((image, i) => (
            <Sprite
              key={i}
              fluid={image.childImageSharp.fluid}
              visible={chosenImageId === i + 1}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default StopMotion
