import React from 'react'
import Stika from "~/components/Stika"
import { Image, StopMotionContextProps } from "~/types"
import { Grid } from "./styled"
import Item from "~/components/MorphingMan/Item"

interface Props {
  stopMotionContext: React.Context<StopMotionContextProps>;
  images: Image[];
}

// this components creates a stopmotion thingy, you need to feed it images and a component
const StopMotion: React.FC<Props> = ({ stopMotionContext, images }) => {
  return (
    <React.Fragment>

      {/* this is the interaction sensor that controls the stopmotion */}
      <Stika count={images.length}></Stika>

      <Grid>
        {images.map((image, index) => (
          <Item key={index} identifier={index + 1} fluid={image.childImageSharp.fluid} stopMotionContext={stopMotionContext}></Item>
        ))}
      </Grid>

    </React.Fragment>
  )
}

export default StopMotion
