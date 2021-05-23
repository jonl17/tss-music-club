import React from 'react'
import { Helmet } from 'react-helmet'
import { PageName } from '@src/types'

type Props = {
  pageName: PageName
}

const Seo: React.FC<Props> = ({ pageName }) => {
  return (
    <Helmet>
      <title>{`TSS ${pageName ? '| ' + pageName : ''}`}</title>
      <link rel='icon' href='favi-tss.png' type='image/png'></link>
      <meta charSet='utf-8' />
      <meta
        name='description'
        content='Musician, programmer and earth citizen from Iceland.'
      />
      <meta name='keywords' content='Icelandic music, Icelandic programming' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta property='og:image' content='./gymnist/2.png' />
      <meta
        property='og:description'
        content='Musician, programmer and earth citizen from Iceland.'
      />
      <meta
        name='twitter:description'
        content='Musician, programmer and earth citizen from Iceland.'
      />
      <meta name='twitter:image' content='./gymnist/2.png' />
      <meta name='twitter:card' content='summary_large_image' />
    </Helmet>
  )
}

export default Seo
