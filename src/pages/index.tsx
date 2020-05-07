import React from "react"
import { graphql } from "gatsby"

import { StopMotionFullQuery } from "~/types"

import StopMotion from "~/components/StopMotion"
import PageWrap from "~/components/FrontpageWrap"

import GymnistProvider, { GymnistContext } from "~/context/StopMotion/Gymnist"

const index: React.FC<StopMotionFullQuery> = ({
  data: { markdownRemark: { frontmatter } }
}) => {
  return (
    <PageWrap>

      <GymnistProvider>
        <StopMotion images={frontmatter.images} stopMotionContext={GymnistContext} sensorType="xy"></StopMotion>
      </GymnistProvider>

    </PageWrap >
  )
}

export const query = graphql`
{
  markdownRemark (fileAbsolutePath: {regex: "/gymnist/"}) {
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