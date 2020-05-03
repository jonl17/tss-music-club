import { FluidObject } from "gatsby-image"

export interface MorphingManFrontmatter {
  frontmatter: {
    title: string;
    images: {
      childImageSharp: {
        fluid: FluidObject;
      }
    }[]
  }
}

export interface MorphingManFullQueryProps {
  data: {
    markdownRemark: MorphingManFrontmatter
  }
}