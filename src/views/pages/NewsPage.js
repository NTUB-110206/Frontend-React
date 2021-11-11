import React from 'react'
import LargeNewsLayout from '../components/LargeNewsLayout'
import MediumNewsLayout from '../components/MediumNewsLayout'
import SmallNewsLayout from '../components/SmallNewsLayout'

const NewsPage = () => {
    return (
        <>
            <LargeNewsLayout />
            <SmallNewsLayout />
            <MediumNewsLayout /> 
        </>
    )
}

export default NewsPage;