import React from 'react'
import SmallNewsItem from './SmallNewsItem';

const SmallNewsLayout = (props) => {
    const { newslist } = props
    return (

        <section className="section-gap section-gap-top__with-text trending-stories">
            <div className="container">
                <div className="section-title m-b-xs-40">
                    <h2 className="axil-title">Trending Stories</h2>
                    <a href="#" className="btn-link">ALL TRENDING STORIES</a>
                </div>

                <div className="row">
                    {
                        newslist.map((item, index) => {
                            return (
                                <div className="col-lg-6">
                                    <SmallNewsItem key={index} news={item}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default SmallNewsLayout;
