import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { Nav } from "./styled"

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
          <Img imgStyle={{ zIndex: "2" }} style={{ height: "100%", width: "300px" }} fluid={data.logo.fluid}></Img>
        </Link>
      </div>
      <div className="btn-wrap">

        <p>
          <Link activeStyle={{ color: "gray" }} to="/drawings">drawings</Link>
        </p>
        <p>
          <Link activeStyle={{ color: "gray" }} to="/interactive-animations">interactive animations</Link>
        </p>
        <p>
          <Link activeStyle={{ color: "gray" }} to="/music">music</Link>
        </p>

      </div>
    </Nav>
  )
}

export default Header
