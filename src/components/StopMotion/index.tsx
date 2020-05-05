import React from 'react'
import Sensor from "~/components/Sensor"
import { Grid } from "./styled"
import ImageComponent from "~/components/ImageComponent"
import { StopMotionComponentProps } from '~/types'

// this components creates a stopmotion thingy, you need to feed it images and a context
const StopMotion: React.FC<StopMotionComponentProps> = ({ stopMotionContext, images }) => {
  return (

    <React.Fragment>

      {/* this is the interaction sensor that controls the stopmotion */}
      <Sensor stopMotionContext={stopMotionContext} count={images.length}></Sensor>

      <Grid>
        {images.map((image, index) => (
          <ImageComponent key={index} identifier={index + 1} fluid={image.childImageSharp.fluid} stopMotionContext={stopMotionContext}></ImageComponent>
        ))}
      </Grid>

    </React.Fragment>

  )
}

export default StopMotion
