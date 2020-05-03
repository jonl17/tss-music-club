import React from 'react'
import { GlobalStyles } from "~/components/GlobalStyles"

const Layout: React.FC<React.ReactChild> = ({ children }) => {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      {children}
    </>
  )
}

export default Layout
