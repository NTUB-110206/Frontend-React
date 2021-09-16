import React from 'react'
import { TheContent, TheSideNav, TheFooter, TheHeader } from './index'

const TheLayout = () => {

  return (
    <div className="main-content">
      <TheSideNav />
      <TheHeader />
      <TheContent/>
      <TheFooter />
    </div>
  )
}

export default TheLayout
