import React, { useEffect, useState } from 'react'

import Header from '@cmp/Header'
import SEO from '@cmp/SEO'

type Props = {
  children: React.ReactChild
  location: Location
}

const Layout: React.FC<Props> = ({ children, location }) => {
  const [pageName, setPageName] = useState<string | undefined>(undefined)
  useEffect(() => {
    if (location.pathname !== '/') {
      let result = location.pathname.replace('/', '')
      setPageName(result.charAt(0).toUpperCase() + result.slice(1))
    } else setPageName(undefined)
  }, [location])
  return (
    <>
      <SEO pageName={pageName}></SEO>
      <Header pathname={location.pathname}></Header>
      {children}
    </>
  )
}

export default Layout
