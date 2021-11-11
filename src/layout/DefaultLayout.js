import React from 'react'
import { SideNav, PageHeader, PageContent, PageFooter } from '../components/index'


const DefaultLayout = () => {
  return (
    <div class="main-content">
      <SideNav />
      <PageHeader />
      <PageContent />
      <PageFooter />
    </div>
  )
}

export default DefaultLayout
