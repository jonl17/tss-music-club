import { FluidObject } from "gatsby-image"

export type PageName = string | undefined

export interface StopMotionContextProps {
  chosenImageId: number;
  setChosenImageId: (id: number) => void
}

export interface StopMotionComponentProps {
  stopMotionContext: React.Context<StopMotionContextProps>;
  images: Image[];
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