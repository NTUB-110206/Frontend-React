import React, { lazy } from 'react'
const TopNews = lazy(() => import('./TopNews.js'))
const HotNews = lazy(() => import('./HotNews.js'))

const Main = () => {
  return (
    <>
      <TopNews />
      {/* <HotNews /> */}
    </>
  )
}

export default Main
