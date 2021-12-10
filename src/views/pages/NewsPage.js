import React, { useState, useEffect } from 'react'
import LargeNewsLayout from '../components/LargeNewsLayout'
import MediumNewsLayout from '../components/MediumNewsLayout'
import SmallNewsLayout from '../components/SmallNewsLayout'
import { useSelector } from 'react-redux'

const NewsPage = () => {

    const [top_news, setTop_news] = useState([]);
    const [hot_news, setHot_news] = useState([]);

    let newslist = useSelector((state) => state.newslist)
    useEffect(() => {
        newslist = JSON.parse(newslist)
        setTop_news(newslist.slice(0, 5))
        setHot_news(newslist.slice(5))
    }, [newslist]);

    return (
        <>
            {top_news.length > 0 ? <LargeNewsLayout newslist={top_news} /> : ''}
            {hot_news.length > 0 ? <SmallNewsLayout newslist={hot_news} /> : ''}
            <MediumNewsLayout />
        </>
    )
}

export default NewsPage;