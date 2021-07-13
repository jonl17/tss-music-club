import React from 'react'
import { Link } from 'gatsby'
import { Nav } from './styled'
import { Bandcamp, Instagram, Spotify, Youtube } from '@styled-icons/fa-brands'

type Props = {
  pathname: string
}

const Header: React.FC<Props> = () => {
  return (
    <Nav>
      <div className='p-4 d-flex'>
        <Link activeClassName='link--active' to='/'>
          <h1>tss </h1>
        </Link>

        <Link activeClassName='link--active' to='/the-portal'>
          <h1 className='ms-4'>the portal </h1>
        </Link>
      </div>

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
