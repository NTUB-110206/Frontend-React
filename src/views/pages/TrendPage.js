import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import TrendLayout from '../components/TrendLayout'
import MediumNewsLayout from '../components/MediumNewsLayout'
const TrendPage = () => {

    const [trend_news, setTrend_news] = useState([]);
    const [Predict_trend, setPredict_trend] = useState('');
    const [Predict_price, setPredict_price] = useState('');

    let newslist = useSelector((state) => state.newslist)
    let predictTrend = useSelector((state) => state.predict_trend)
    let predictPrice = useSelector((state) => state.predict_price)
    useEffect(() => {
        setTrend_news(JSON.parse(newslist))
        setPredict_trend(predictTrend)
        setPredict_price(predictPrice)
    }, [newslist, predictTrend, predictPrice]);
    return (
        <>
            {Predict_price != '' ? <TrendLayout predict_trend={Predict_trend} predict_price={Predict_price} /> : ''}
            {trend_news.length > 0 ? <MediumNewsLayout newslist={trend_news} /> : ''}
        </>
    )
}
export default TrendPage