import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { Nav } from "./styled"
import { Bandcamp, Instagram, Spotify, Youtube } from "@styled-icons/fa-brands"

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
    }
  `)
  return (
    <Nav>
      <div className="logo-wrap">
        <Link to="/">
          <Img imgStyle={{ zIndex: "2" }} style={{ height: "100%", width: "250px" }} fluid={data.logo.fluid}></Img>
        </Link>
      </div>
      <div className="btn-wrap">

        <a target="_blank" href="https://tssforu.bandcamp.com/">
          <Bandcamp></Bandcamp>
        </a>
        <a target="_blank" href="https://www.instagram.com/tss_spaceman/">
          <Instagram></Instagram>
        </a>
        <a target="_blank" href="https://open.spotify.com/artist/75WR8OP1SdDikvZdDqkjse?si=crESKemsRne3bvQvnFL24A">
          <Spotify></Spotify>
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=hs-S342IIUU&t=39s">
          <Youtube></Youtube>
        </a>

      </div>
    </Nav>
  )
}

export default Header
