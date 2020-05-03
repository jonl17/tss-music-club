import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Nav } from "./styled"
import Btn from "./btn"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      logo: imageSharp(fluid: {originalName: {eq: "logo.png"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      drawingsBtn: imageSharp(fluid: {originalName: {eq: "drawings-btn.png"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      musicBtn: imageSharp(fluid: {originalName: {eq: "music-btn.png"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  console.log(data)
  return (
    <Nav>
      <div className="logo-wrap">
        <Img style={{ height: "100%", width: "300px" }} fluid={data.logo.fluid}></Img>
      </div>
      <div className="btn-wrap">
        <Btn fluid={data.drawingsBtn.fluid}></Btn>
        <Btn fluid={data.musicBtn.fluid}></Btn>
      </div>
    </Nav>
  )
}

export default Header
