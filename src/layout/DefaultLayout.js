import React from 'react'
import { SideNav, PageHeader, PageFooter } from '../components/index'


const DefaultLayout = () => {
  return (
    <div class="main-content">
        <SideNav/>
        <PageHeader/>
        <PageFooter/>
    </div>
  )
}

export default DefaultLayout
