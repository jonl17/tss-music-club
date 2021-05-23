import React from 'react'
import { graphql } from 'gatsby'

import { StopMotionFullQuery } from '@src/types'

import StopMotion from '@cmp/StopMotion'
import PageWrap from '@cmp/FrontpageWrap'
import FeaturedImageBanner from '@cmp/FeaturedImageBanner'
import { GymnistProvider } from '@src/context/StopMotion/Gymnist'

const index: React.FC<StopMotionFullQuery> = ({
  data: {
    markdownRemark: { frontmatter },
  },
}) => {
  return (
    <PageWrap>
      <GymnistProvider>
        <StopMotion
          images={frontmatter.images}
          sensorType='xy'
          imageSize='small'
        ></StopMotion>
      </GymnistProvider>

      <FeaturedImageBanner />
    </PageWrap>
  )
}

export const query = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/gymnist/" }) {
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
