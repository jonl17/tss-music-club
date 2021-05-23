import React from 'react'
import Sensor from '@cmp/Sensor'
import { Grid } from './styled'
import ImageComponent from '@cmp/ImageComponent'
import { StopMotionComponentProps } from '@src/types'

// this components creates a stopmotion thingy, you need to feed it images and a context
const StopMotion: React.FC<StopMotionComponentProps> = ({
  images,
  sensorType,
  imageSize,
}) => {
  return (
    <>
      {/* this is the interaction sensor that controls the stopmotion */}
      <Sensor count={images.length} type={sensorType}></Sensor>

      <Grid>
        <div className='center-the-images'>
          {images.map((image, index) => (
            <ImageComponent
              key={index}
              identifier={index + 1}
              fluid={image.childImageSharp.fluid}
              size={imageSize}
            ></ImageComponent>
          ))}
        </div>
      </Grid>
    </>
  )
}

export default StopMotion
