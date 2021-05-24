import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { Nav } from './styled'
import { Bandcamp, Instagram, Spotify, Youtube } from '@styled-icons/fa-brands'

type Props = {
  pathname: string
}

const Header: React.FC<Props> = () => {
  const data: { logo: { gatsbyImageData: IGatsbyImageData } } =
    useStaticQuery(graphql`
      {
        logo: imageSharp(fluid: { originalName: { eq: "logo.png" } }) {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    `)

  return (
    <Nav>
      <Link to='/'>
        <div className='logo'>
          <GatsbyImage
            imgStyle={{ width: '100%', height: '100%', objectFit: 'contain' }}
            alt='logo'
            image={data.logo.gatsbyImageData}
          />
        </div>
      </Link>

      <div className='btn-wrap'>
        <a target='_blank' href='https://tssforu.bandcamp.com/'>
          <Bandcamp></Bandcamp>
        </a>
        <a target='_blank' href='https://www.instagram.com/tss_spaceman/'>
          <Instagram></Instagram>
        </a>
        <a
          target='_blank'
          href='https://open.spotify.com/artist/75WR8OP1SdDikvZdDqkjse?si=crESKemsRne3bvQvnFL24A'
        >
          <Spotify></Spotify>
        </a>
        <a
          target='_blank'
          href='https://www.youtube.com/watch?v=hs-S342IIUU&t=39s'
        >
          <Youtube></Youtube>
        </a>
      </div>
    </Nav>
  )
}

export default Header
