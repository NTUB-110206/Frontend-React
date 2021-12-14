import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import TrendLayout from '../components/TrendLayout'
import MediumNewsLayout from '../components/MediumNewsLayout'
const TrendPage = () => {

    const [trend_news, setTrend_news] = useState([]);

    let newslist = useSelector((state) => state.newslist)
    useEffect(() => {
        newslist = JSON.parse(newslist)
        setTrend_news(newslist)
    }, [newslist]);
    return (
        <>
            <TrendLayout />
            {trend_news.length > 0 ? <MediumNewsLayout newslist={trend_news} /> : ''}
        </>
    )
}
export default TrendPage