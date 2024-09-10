import React from 'react'
import Navbar from '../components/Navbar'

const MainLayout = ({childern}) => {
  return (
    <div>
      <Navbar />
        <div>{childern}</div>
    </div>
  )
}

export default MainLayout
