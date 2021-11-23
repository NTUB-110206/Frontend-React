import React, { useState, useEffect } from 'react'
import LargeNewsLayout from '../components/LargeNewsLayout'
import MediumNewsLayout from '../components/MediumNewsLayout'
import SmallNewsLayout from '../components/SmallNewsLayout'
const WEBAPI = require('../../WebAPI');

const NewsPage = () => {
    const [top_news, setTop_news] = useState([]);
    const [hot_news, setHot_news] = useState([]);
    useEffect(() => {
        async function fetch() {
            let newslist = await WEBAPI.getNews()
            if (newslist?.status != 200 || newslist?.data == "") {
            } else {
                newslist = newslist['data']['data']['news']
                console.log(newslist)
                setTop_news(newslist.slice(0, 5))
                setHot_news(newslist.slice(5))
            }
        }
        fetch()
    }, []);
    return (
        <>
            {top_news.length>0?<LargeNewsLayout newslist={top_news}/>:''}
            {hot_news.length>0?<SmallNewsLayout newslist={hot_news}/>:''}
            <MediumNewsLayout />
        </>
    )
}

export default NewsPage;