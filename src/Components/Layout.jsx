import React from 'react'
import { Footer, NavBar } from '../Pages'

const Layout = ({children}) => {
  return (
    <>
    <NavBar/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout