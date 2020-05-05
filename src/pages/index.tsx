import React from "react"
import { graphql } from "gatsby"

import { StopMotionFullQuery } from "~/types"

import StopMotion from "~/components/StopMotion"
import PageWrap from "~/components/FrontpageWrap"
import { MorphingManContext } from "~/context/MorphingMan"

const index: React.FC<StopMotionFullQuery> = ({
  data: { markdownRemark: { frontmatter } }
}) => {
  return (
    <PageWrap>
      <StopMotion images={frontmatter.images} stopMotionContext={MorphingManContext}></StopMotion>
    </PageWrap >
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