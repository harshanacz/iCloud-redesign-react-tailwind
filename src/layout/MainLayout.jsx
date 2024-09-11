import React from 'react'
import GlobalNavbar from '../components/GlobalNavbar'

const MainLayout = ({children}) => {
  return (
    <div>
      <GlobalNavbar />
      <div>{children}</div>
    </div>
  )
}

export default MainLayout
