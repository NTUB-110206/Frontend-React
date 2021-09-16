import React, { lazy, useState } from "react";

const TopNews = () => {
    return (
        <>
            <section className="axil-video-posts section-gap section-gap-top__with-text bg-grey-dark-one" style={{ paddingTop: "20px" }}>
                <div className="container">
                    <div className="section-title title-white m-b-xs-40">
                        <h2 className="axil-title">Top Stories</h2>
                        <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="btn-link ml-auto">All TOP STORIES</a>
                    </div>
                    {/* End of .section-title */}

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="axil-img-container flex-height-container video-container__type-2 m-b-xs-30">
                                <a href="http://axilthemes.com/demo/template/papr/post-format-video.html" className="d-block h-100">
                                    <img src="%PUBLIC_URL%/pic/coinbase.jpg" alt="video post" className="w-100" />
                                    <div className="grad-overlay grad-overlay__transparent"></div>

                                </a>
                                <div className="media post-block grad-overlay__transparent position-absolute">
                                    <div className="media-body media-body__big" style={{ padding: "10px 20px" }}>
                                        <div className="axil-media-bottom mt-auto">
                                            <div className="post-cat-group m-b-xs-10">
                                                <a href="http://axilthemes.com/demo/template/papr/business.html"
                                                    className="post-cat cat-btn btn-big bg-color-purple-two" style={{ margin: "0" }}>news.bitcoin</a>
                                            </div>
                                            <h3 className="axil-post-title hover-line">
                                                <a href="http://axilthemes.com/demo/template/papr/post-format-video.html">
                                                    Coinbase Buys Data Firm Skew, Company's First Acquisition Since the Nasdaq Direct Listing
                                                </a>
                                            </h3>
                                            <div className="post-metas">
                                                <ul className="list-inline">
                                                    <li>April 27, 2021</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End of .media-body */}
                                </div>
                                {/* End of .post-block */}
                            </div>
                            {/* End of .axil-img-container */}
                        </div>
                        {/* End of .col-lg-6 */}

                        <div className="col-lg-6">
                            <div className="axil-content">
                                <div className="media post-block top-story-post-block post-block__on-dark-bg m-b-xs-30">
                                    <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30" src="%PUBLIC_URL%/pic/visa.jpg" style={{ objectFit: "cover", height: "15rem" }} />
                                    </a>
                                    <div className="media-body">
                                        <div className="post-cat-group m-b-xs-10" style={{ marginBottom: "5px" }}>
                                            <a href="http://axilthemes.com/demo/template/papr/business.html"
                                                className="post-cat cat-btn bg-color-green-three" style={{ marginBottom: "0" }}>
                                                news.bitcoin
                                            </a>
                                        </div>
                                        <h3 className="axil-post-title hover-line" style={{ marginBottom: "5px" }}>
                                            <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html">
                                                Visa Diving Into Cryptocurrency 'in a Very, Very Big Way' — CEO Outlines 5 Crypto Priorities
                                            </a>
                                        </h3>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>April 27, 2021</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End of .post-block */}

                                <div className="media post-block top-story-post-block post-block__on-dark-bg m-b-xs-30">
                                    <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30"
                                            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/0069/production/_112050100_index_cult2.png"
                                            style={{ objectFit: "cover", height: "15rem" }} />
                                    </a>
                                    <div className="media-body">
                                        <div className="post-cat-group m-b-xs-10">
                                            <a href="http://axilthemes.com/demo/template/papr/business.html"
                                                className="post-cat cat-btn bg-color-red-one">反面</a>
                                            {/* <a href="http://axilthemes.com/demo/template/papr/business.html" className="post-cat cat-btn bg-color-green-three">XX類別</a>
                                        <a href="http://axilthemes.com/demo/template/papr/business.html" className="post-cat cat-btn bg-color-blue-grey-one">bbc.com</a> */}

                                        </div>
                                        <h3 className="axil-post-title hover-line">
                                            <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html">
                                                Italian police arrest suspected Nigerian gang
                                            </a>
                                        </h3>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>April 27, 2021</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End of .post-block */}

                                <div className="media post-block top-story-post-block post-block__on-dark-bg m-b-xs-30">
                                    <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30"
                                            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/5697/production/_118176122_80eda5f2-c682-4709-93c8-55163daa7841.jpg"
                                            style={{ objectFit: "cover", height: "15rem" }} />
                                    </a>
                                    <div className="media-body">
                                        <div className="post-cat-group m-b-xs-10">
                                            <a href="http://axilthemes.com/demo/template/papr/business.html"
                                                className="post-cat cat-btn bg-color-red-two">bbc.com</a>
                                        </div>
                                        <h3 className="axil-post-title hover-line"><a
                                            href="http://axilthemes.com/demo/template/papr/post-format-standard.html">

                                            Turkey launches international hunt for crypto boss</a></h3>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>April 24, 2021</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End of .post-block */}

                                <div className="media post-block top-story-post-block post-block__on-dark-bg m-b-xs-30">
                                    <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30"
                                            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/144E7/production/_118157138_bitcoingreen.jpg"
                                            style={{ objectFit: "cover", height: "15rem" }} />
                                    </a>
                                    <div className="media-body">
                                        <div className="post-cat-group m-b-xs-10">
                                            <a href="http://axilthemes.com/demo/template/papr/business.html"
                                                className="post-cat cat-btn bg-color-purple-one">bbc.com</a>
                                        </div>
                                        <h3 className="axil-post-title hover-line"><a
                                            href="http://axilthemes.com/demo/template/papr/post-format-standard.html">
                                            Dorsey and Musk agree on bitcoin's green potential</a></h3>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>April 22, 2021</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End of .post-block */}
                            </div>
                            {/* End of .axil-content */}
                        </div>
                        {/* End of .col-lg-6 */}
                    </div>
                    {/* End of .row */}
                </div>
                {/* End of .container */}
            </section>
        </>
    );
};

export default TopNews;
