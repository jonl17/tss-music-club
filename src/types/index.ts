import { FluidObject } from "gatsby-image"

export interface StopMotionContextProps {
  chosenImageId: number;
  setChosenImageId: (id: number) => void
}

export interface ImageComponentProps {
  fluid: FluidObject;
  identifier: number;
  stopMotionContext: React.Context<StopMotionContextProps>
}

export interface Image {
  childImageSharp: {
    fluid: FluidObject;
  }
}

export interface StopMotionFrontmatter {
  frontmatter: {
    title: string;
    images: Image[]
  }
}

export interface StopMotionFullQuery {
  data: {
    markdownRemark: StopMotionFrontmatter
  }
}