import React, { useState, useEffect } from 'react'
import { SideNav, PageHeader, PageContent, PageFooter } from '../components/index'
const WEBAPI = require('../WebAPI');
const utils = require('../utils');

const DefaultLayout = () => {
  useEffect(() => {
      async function fetch() {
          let newslist = await WEBAPI.getNews()
          if (newslist?.status != 200 || newslist?.data == "") {
          } else {
            newslist = newslist['data']['data']['news']
            utils.setNews(JSON.stringify(newslist))
          }
      }
      fetch()
  }, []);
  
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
