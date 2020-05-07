import React from "react"
import { graphql } from "gatsby"

import { StopMotionFullQuery } from "~/types"

import StopMotion from "~/components/StopMotion"
import PageWrap from "~/components/FrontpageWrap"
import FeaturedImageBanner from "~/components/FeaturedImageBanner"

import GymnistProvider, { GymnistContext } from "~/context/StopMotion/Gymnist"

const index: React.FC<StopMotionFullQuery> = ({
  data: { markdownRemark: { frontmatter } }
}) => {
  return (
    <PageWrap>

      <GymnistProvider>
        <StopMotion images={frontmatter.images} stopMotionContext={GymnistContext} sensorType="xy" imageSize="small"></StopMotion>
      </GymnistProvider>

      <FeaturedImageBanner></FeaturedImageBanner>
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