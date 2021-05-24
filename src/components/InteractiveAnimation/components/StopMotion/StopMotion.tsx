import React from 'react'
import { Sensor, Sprite, useStopMotion } from '../..'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface StopMotionProps {
  images: {
    gatsbyImageData: IGatsbyImageData
  }[]
  sensorType: 'xy' | 'x'
}

// this components creates a stopmotion thingy, you need to feed it images and a context
const StopMotion = ({ images, sensorType }: StopMotionProps) => {
  const { chosenImageId } = useStopMotion()

  return (
    <>
      {/* this is the interaction sensor that controls the stopmotion */}
      <Sensor count={images.length} type={sensorType} />

      <div className='stop-motion-reel'>
        <div className='stop-motion-reel__image-stack'>
          {images.map((image, i) => (
            <Sprite
              key={i}
              image={image.gatsbyImageData}
              visible={chosenImageId === i + 1}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default StopMotion
