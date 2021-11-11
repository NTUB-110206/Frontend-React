import React from 'react'
import LargeNewsItem from './LargeNewsItem';

const LargeNewsLayout = () => {
    return (

        <section className="axil-video-posts section-gap section-gap-top__with-text bg-grey-dark-one">
            <div className="container">
                <div className="section-title title-white m-b-xs-40">
                    <h2 className="axil-title">Top Stories</h2>
                    <a href="#" className="btn-link ml-auto">All TOP STORIES</a>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="axil-img-container flex-height-container video-container__type-2 m-b-xs-30">
                            <a href="post-format-video.html" className="d-block h-100">
                                <img src="assets/images/video-post/video-post-top.jpg" alt="video post" className="w-100" />
                                <div class="grad-overlay grad-overlay__transparent"></div>

                                <div class="video-popup video-play-btn"></div>
                            </a>
                            <div className="media post-block grad-overlay__transparent position-absolute">
                                <div className="media-body media-body__big">
                                    <div className="axil-media-bottom mt-auto">
                                        <div className="post-cat-group m-b-xs-10">
                                            <a href="business.html"
                                                className="post-cat cat-btn btn-big bg-color-purple-two">FASHION</a>
                                        </div>
                                        <h3 className="axil-post-title hover-line"><a href="post-format-video.html">Facts
                                            Why Inkjet
                                            Printing Is Very
                                            Appealing Compared</a></h3>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>By <a href="#" className="post-author">Ashley Graham</a></li>
                                                <li><i className="dot">.</i>April 17, 2019</li>
                                                <li><a href="#"><i className="feather icon-activity"></i>5k Views</a></li>
                                                <li><a href="#"><i className="feather icon-share-2"></i>230 Shares</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="axil-content">
                            {
                                [0, 1, 2, 3].map((item, index) => {
                                    return <LargeNewsItem key={index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LargeNewsLayout;
