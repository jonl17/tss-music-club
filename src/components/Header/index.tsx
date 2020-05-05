import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { Nav } from "./styled"
import Btn from "./btn"

type Props = {
  pathname: string;
}

const Header: React.FC<Props> = ({ pathname }) => {
  const data = useStaticQuery(graphql`
    {
      logo: imageSharp(fluid: {originalName: {eq: "logo.png"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      drawingsBtn: imageSharp(fluid: {originalName: {eq: "drawings.png"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      musicBtn: imageSharp(fluid: {originalName: {eq: "music.png"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      musicBtnUnderlined: imageSharp(fluid: {originalName: {eq: "music-underlined.png"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      drawingsBtnUnderlined: imageSharp(fluid: {originalName: {eq: "drawings-underlined.png"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  return (
    <Nav>
      <div className="logo-wrap">
        <Link to="/">
          <Img style={{ height: "100%", width: "300px" }} fluid={data.logo.fluid}></Img>
        </Link>
      </div>
      <div className="btn-wrap">
        <Btn regular={data.drawingsBtn.fluid} underlined={data.drawingsBtnUnderlined.fluid} to="/drawings" currentPathname={pathname}></Btn>
        <Btn regular={data.musicBtn.fluid} underlined={data.musicBtnUnderlined.fluid} to="/music" currentPathname={pathname}></Btn>
      </div>
    </Nav>
  )
}

export default Header
