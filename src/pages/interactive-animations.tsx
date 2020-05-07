import React from "react"
import { graphql } from "gatsby"

import { StopMotionFullQuery } from "~/types"

import StopMotion from "~/components/StopMotion"
import PageWrap from "~/components/FrontpageWrap"

import MorphingManProvider, { MorphingManContext } from "~/context/StopMotion/MorphingMan"

const InteractiveAnimations: React.FC<StopMotionFullQuery> = ({
  data: { markdownRemark: { frontmatter } }
}) => {
  return (
    <PageWrap>

      <MorphingManProvider>
        <StopMotion images={frontmatter.images} stopMotionContext={MorphingManContext} sensorType="x" imageSize="large"></StopMotion>
      </MorphingManProvider>

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

export default InteractiveAnimations