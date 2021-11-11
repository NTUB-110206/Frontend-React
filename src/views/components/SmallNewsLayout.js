import React from 'react'
import SmallNewsItem from './SmallNewsItem';

const SmallNewsLayout = () => {
    return (

        <section className="section-gap section-gap-top__with-text trending-stories">
            <div className="container">
                <div className="section-title m-b-xs-40">
                    <h2 className="axil-title">Trending Stories</h2>
                    <a href="#" className="btn-link">ALL TRENDING STORIES</a>
                </div>

                <div className="row">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                            return (
                                <div className="col-lg-6">
                                    <SmallNewsItem key={index} />
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
