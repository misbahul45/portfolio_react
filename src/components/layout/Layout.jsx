import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
const Layout = () => {
  return (
    <main className={` grid grid-rows-[auto,1fr,auto] h-screen min-h-screen`}>
     <Header />
     <Outlet />
     <Footer /> 
    </main>
  )
}

export default Layout
