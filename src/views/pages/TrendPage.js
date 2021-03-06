import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import TrendLayout from '../components/TrendLayout'
import MediumNewsLayout from '../components/MediumNewsLayout'
const TrendPage = () => {

    const [trend_news, setTrend_news] = useState([]);
    const [Predict_trend, setPredict_trend] = useState('');
    const [Predict_price, setPredict_price] = useState('');
    const [Realtime_Price, setRealtime_Price] = useState('');

    let newslist = useSelector((state) => state.newslist)
    let predictTrend = useSelector((state) => state.predict_trend)
    let predictPrice = useSelector((state) => state.predict_price)
    let realtimePrice = useSelector((state) => state.realtime_price)
    useEffect(() => {
        setTrend_news(JSON.parse(newslist))
        setPredict_trend(predictTrend)
        setPredict_price(predictPrice)
        setRealtime_Price(JSON.parse(realtimePrice))
    }, [newslist, predictTrend, predictPrice, realtimePrice]);
    return (
        <>
            {Predict_price != '' ? <TrendLayout predict_trend={Predict_trend} predict_price={Predict_price} realtime_price={Realtime_Price} /> : ''}
            {trend_news.length > 0 ? <MediumNewsLayout newslist={trend_news} /> : ''}
        </>
    )
}
export default TrendPage