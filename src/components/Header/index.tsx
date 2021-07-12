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
      <Link to='/'>
        <div className='logo p-4'>
          <h1>TSS</h1>
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
