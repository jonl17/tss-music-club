import { IGatsbyImageData } from 'gatsby-plugin-image'

export type ImageSize = 'large' | 'small'

export type SensorType = 'x' | 'xy'

export type PageName = string | undefined

export interface StopMotionContextProps {
  chosenImageId: number
  setChosenImageId: (id: number) => void
}

export interface StopMotionComponentProps {
  images: IGatsbyImageData[]
  sensorType: 'xy' | 'x'
}

export interface ImageComponentProps {
  image: IGatsbyImageData
  identifier: number
  size: ImageSize
}

export interface StopMotionFrontmatter {
  frontmatter: {
    title: string
    images: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }[]
  }
}

export interface StopMotionFullQuery {
  data: {
    markdownRemark: StopMotionFrontmatter
  }
}
