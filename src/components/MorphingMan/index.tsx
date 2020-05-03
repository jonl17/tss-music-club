import React from 'react'
import { MorphingManFrontmatter } from '~/types'
import { Grid } from "./styled"
import Item from "./Item"

const MorphingMan: React.FC<MorphingManFrontmatter> = ({ frontmatter: { images, title } }) => {
  return (
    <Grid>
      {images.map((image, index) => (
        <Item key={index} fluid={image.childImageSharp.fluid} identifier={index + 1}></Item>
      ))}
    </Grid>
  )
}

export default MorphingMan
