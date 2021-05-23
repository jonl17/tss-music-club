import { FluidObject } from 'gatsby-image'

export type ImageSize = 'large' | 'small'

export type SensorType = 'x' | 'xy'

export type PageName = string | undefined

export interface StopMotionContextProps {
  chosenImageId: number
  setChosenImageId: (id: number) => void
}

export interface StopMotionComponentProps {
  images: Image[]
  sensorType: SensorType
  imageSize: ImageSize
}

export interface ImageComponentProps {
  fluid: FluidObject
  identifier: number
  size: ImageSize
}

export interface Image {
  childImageSharp: {
    fluid: FluidObject
  }
}

export interface StopMotionFrontmatter {
  frontmatter: {
    title: string
    images: Image[]
  }
}

export interface StopMotionFullQuery {
  data: {
    markdownRemark: StopMotionFrontmatter
  }
}
