import React from 'react'
import MediumNewsItem from './MediumNewsItem';

const MediumNewsLayout = (props) => {
    const { newslist } = props
    
    return (
        <div className="random-posts section-gap p-t-xs-0">
            <div className="container">
                <div className="section-title title-black m-b-xs-10">
                    <h2 className="axil-title">Trend News</h2>
                </div>
                <div className="row">
                    <div className="col-lg-10">
                        <main className="axil-content">
                            {
                                newslist.map((item, index) => {
                                    return <MediumNewsItem key={index} news={item}/>
                                })
                            }
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediumNewsLayout;
