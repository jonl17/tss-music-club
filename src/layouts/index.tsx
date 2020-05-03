import React from 'react'

import { GlobalStyles } from "~/components/GlobalStyles"
import Header from "~/components/Header"

const Layout: React.FC<React.ReactChild> = ({ children }) => {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Header></Header>
      {children}
    </>
  )
}

export default Layout
