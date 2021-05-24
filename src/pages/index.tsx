import React from 'react'
import { graphql } from 'gatsby'

import { StopMotionFullQuery } from '@src/types'

import { StopMotion, StopMotionProvider } from '@cmp/InteractiveAnimation'
import PageWrap from '@cmp/FrontpageWrap'
import FeaturedImageBanner from '@cmp/FeaturedImageBanner'

const index: React.FC<StopMotionFullQuery> = ({
  data: {
    markdownRemark: { frontmatter },
  },
}) => {
  return (
    <PageWrap>
      <StopMotionProvider>
        <StopMotion
          images={frontmatter.images.map(image => image.childImageSharp)}
          sensorType='xy'
        />
      </StopMotionProvider>

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
            gatsbyImageData(layout: FULL_WIDTH, backgroundColor: "#ffffff")
          }
        }
      }
    }
  }
`

export default index
