import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SideNav, PageHeader, PageContent, PageFooter } from '../components/index'
const WEBAPI = require('../WebAPI');
const utils = require('../utils');

const DefaultLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetch_news() {
      let result = await WEBAPI.getNews()
      if (result?.status != 200 || result?.data == "") {
      } else {
        result = utils.arrUnique(result['data']['data']['news'], 'news_title')
        dispatch({ type: 'set', newslist: JSON.stringify(result) })
      }
    }
    fetch_news()
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
