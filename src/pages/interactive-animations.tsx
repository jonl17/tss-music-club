import React from 'react'
import { graphql } from 'gatsby'

import { StopMotionFullQuery } from '@src/types'

import StopMotion from '@cmp/StopMotion'
import PageWrap from '@cmp/FrontpageWrap'

import MorphingManProvider, {
  MorphingManContext,
} from '@src/context/StopMotion/MorphingMan'

const InteractiveAnimations: React.FC<StopMotionFullQuery> = ({
  data: {
    markdownRemark: { frontmatter },
  },
}) => {
  return (
    <PageWrap>
      <MorphingManProvider>
        <StopMotion
          images={frontmatter.images}
          stopMotionContext={MorphingManContext}
          sensorType='x'
          imageSize='large'
        ></StopMotion>
      </MorphingManProvider>
    </PageWrap>
  )
}

export const query = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/morphing-man/" }) {
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
