import React from 'react'
import { SideNav, PageHeader, PageContent, PageFooter } from '../components/index'


const DefaultLayout = () => {
  return (
    <div className="main-content">
      <SideNav />
      <PageHeader />
      <PageContent />
      <PageFooter />
    </div>
  )
}

export default DefaultLayout
