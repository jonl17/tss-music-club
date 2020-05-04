import React, { useEffect, useState } from 'react'

import { GlobalStyles } from "~/components/GlobalStyles"
import Header from "~/components/Header"
import SEO from "~/components/SEO"

type Props = {
  children: React.ReactChild;
  location: Location;
}

const Layout: React.FC<Props> = ({ children, location }) => {
  const [pageName, setPageName] = useState<string | undefined>(undefined)
  useEffect(() => {
    if (location.pathname !== "/") {
      let result = location.pathname.replace("/", "")
      setPageName(result.charAt(0).toUpperCase() + result.slice(1))
    }
    else setPageName(undefined)
  }, [location])
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <SEO pageName={pageName}></SEO>
      <Header></Header>
      {children}
    </>
  )
}

export default Layout
