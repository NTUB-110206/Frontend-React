import React, { lazy, useState, useEffect } from 'react'
const TopNews = lazy(() => import('./TopNews.js'))
const HotNews = lazy(() => import('./HotNews.js'))
const RelatedNews = lazy(() => import('./RelatedNews.js'))
const WEBAPI = require('src/WebAPI');

const Main = () => {
  
  const [top_news, setTop_news] = useState([]);
  const [hot_news, setHot_news] = useState([]);
  useEffect(() => {
    async function fetch() {
      let newslist = await WEBAPI.getNews()
      if (newslist?.status != 200 || newslist?.data == "") {
      } else {
        newslist = newslist['data']['data']['news']
        console.log(newslist)
        setTop_news(newslist.slice(0,5))
        setHot_news(newslist.slice(5))
      }
    }
    fetch()
  }, []);

  return (
    <>
      {top_news.length>0?<TopNews newslist={top_news}/>:''}
      {hot_news.length>0?<HotNews newslist={hot_news}/>:''}
      <RelatedNews />
    </>
  )
}

export default Main
