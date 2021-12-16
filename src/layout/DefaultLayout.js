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

    async function fetch_trend() {
      const tasks = [WEBAPI.getClosedPrice_Predict(), WEBAPI.getClosedPricePic_Predict()]
      const res_list = await Promise.allSettled(tasks);
      let results = res_list?.map(res => res?.value?.data?.result)
      console.log(results)
      dispatch({ type: 'set', predict_price: JSON.stringify(results[0]) })
      dispatch({ type: 'set', predict_trend: JSON.stringify(results[1]) })
    }

    async function fetch_realtimePrice() {
      let result = await WEBAPI.get_crypto_data()
      if (result?.status != 200 || result?.data == "") {
      } else {
        result = result['data']['Data']['Data']
        dispatch({ type: 'set', realtime_price: JSON.stringify(result) })
      }
    }
    fetch_news()
    fetch_trend()
    fetch_realtimePrice()
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
