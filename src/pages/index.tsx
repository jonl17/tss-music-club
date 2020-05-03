import React from "react"
import { graphql } from "gatsby"

import { MorphingManFullQueryProps } from "~/types"
import MorphingMan from "~/components/MorphingMan"
import Stika from "~/components/Stika"
import PageWrap from "~/components/FrontpageWrap"

const index: React.FC<MorphingManFullQueryProps> = ({
  data: { markdownRemark: { frontmatter } }
}) => {
  return (
    <PageWrap>
      <Stika count={frontmatter.images.length}></Stika>
      <MorphingMan frontmatter={frontmatter}></MorphingMan>
    </PageWrap>
  )
}

export const query = graphql`
{
  markdownRemark (fileAbsolutePath: {regex: "/morphing-man/"}) {
    frontmatter {
      title
      images {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

export default index