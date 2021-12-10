import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SideNav, PageHeader, PageContent, PageFooter } from '../components/index'
const WEBAPI = require('../WebAPI');

const DefaultLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetch() {
      let result = await WEBAPI.getNews()
      if (result?.status != 200 || result?.data == "") {
      } else {
        result = result['data']['data']['news']
        dispatch({ type: 'set', newslist: JSON.stringify(result) })
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
