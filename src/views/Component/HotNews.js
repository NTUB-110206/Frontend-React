import React, { lazy, useState } from "react";

const HotNews = () => {
    return (
        <>
            <section className="section-gap section-gap-top__with-text trending-stories" style={{ paddingTop: "25px" }}>
                <div className="container">
                    <div className="section-title m-b-xs-40">
                        <h2 className="axil-title">Trending Stories</h2>
                        <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="btn-link">ALL TRENDING STORIES</a>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="media post-block m-b-xs-30">
                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center">
                                    <img className=" m-r-xs-30" src="%PUBLIC_URL%/css/trending-stories-1.jpg" alt="" />
                                </a>
                                <div className="media-body">
                                    <div className="post-cat-group m-b-xs-10">
                                        <a href="http://axilthemes.com/demo/template/papr/business.html"
                                            className="post-cat cat-btn bg-color-blue-grey-one">WORLD</a>
                                    </div>
                                    <h3 className="axil-post-title hover-line"><a
                                        href="http://axilthemes.com/demo/template/papr/post-format-standard.html">Live Poker
                                        How To Win
                                        Tournament Games</a></h3>
                                    <div className="post-metas">
                                        <ul className="list-inline">
                                            <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Amachea Jajah</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End of .post-block */}
                        </div>
                        {/* End of .col-lg-6 */}

                        <div className="col-lg-6">
                            <div className="media post-block m-b-xs-30">
                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html"
                                    className="align-self-center"><img className=" m-r-xs-30" src="%PUBLIC_URL%/css/trending-stories-2.jpg"
                                        alt="" /></a>
                                <div className="media-body">
                                    <div className="post-cat-group m-b-xs-10">
                                        <a href="http://axilthemes.com/demo/template/papr/business.html"
                                            className="post-cat cat-btn bg-color-red-two">FOOD</a>
                                    </div>
                                    <h3 className="axil-post-title hover-line"><a
                                        href="http://axilthemes.com/demo/template/papr/post-format-standard.html">Crispy Air
                                        Fryer
                                        Parmesan And Thyme Roasted
                                        Wedge Fries</a>
                                    </h3>
                                    <div className="post-metas">
                                        <ul className="list-inline">
                                            <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Xu Jianhong</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End of .post-block */}
                        </div>
                        {/* End of .col-lg-6 */}

                        <div className="col-lg-6">
                            <div className="media post-block m-b-xs-30">
                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html"
                                    className="align-self-center"><img className=" m-r-xs-30" src="%PUBLIC_URL%/css/trending-stories-3.jpg"
                                        alt="" /></a>
                                <div className="media-body">
                                    <div className="post-cat-group m-b-xs-10">
                                        <a href="http://axilthemes.com/demo/template/papr/business.html"
                                            className="post-cat cat-btn bg-color-purple-one">LIFE STYLE</a>
                                    </div>
                                    <h3 className="axil-post-title hover-line"><a
                                        href="http://axilthemes.com/demo/template/papr/post-format-standard.html">Boxed Water
                                        Partners
                                        With Rag &amp; Bone To Tap
                                        Consumer Creativity</a></h3>
                                    <div className="post-metas">
                                        <ul className="list-inline">
                                            <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Ahmad Nazeri</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End of .post-block */}
                        </div>
                        {/* End of .col-lg-6 */}

                        <div className="col-lg-6">
                            <div className="media post-block m-b-xs-30">
                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html"
                                    className="align-self-center"><img className=" m-r-xs-30" src="%PUBLIC_URL%/css/trending-stories-4.jpg"
                                        alt="" /></a>
                                <div className="media-body">
                                    <div className="post-cat-group m-b-xs-10">
                                        <a href="http://axilthemes.com/demo/template/papr/business.html"
                                            className="post-cat cat-btn bg-color-blue-three">RACING</a>
                                    </div>
                                    <h3 className="axil-post-title hover-line"><a
                                        href="http://axilthemes.com/demo/template/papr/post-format-standard.html">Kipchoge
                                        Proves He Has
                                        No Equal: Runs 2nd
                                        Fastest Marathon Time In History</a></h3>
                                    <div className="post-metas">
                                        <ul className="list-inline">
                                            <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Sergio Pliego</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End of .post-block */}
                        </div>
                        {/* End of .col-lg-6 */}

                        <div className="col-lg-6">
                            <div className="media post-block m-b-xs-30">
                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html"
                                    className="align-self-center"><img className=" m-r-xs-30" src="%PUBLIC_URL%/css/trending-stories-5.jpg"
                                        alt="" /></a>
                                <div className="media-body">
                                    <div className="post-cat-group m-b-xs-10">
                                        <a href="http://axilthemes.com/demo/template/papr/business.html"
                                            className="post-cat cat-btn bg-color-green-two">SWIMMING</a>
                                    </div>
                                    <h3 className="axil-post-title hover-line"><a
                                        href="http://axilthemes.com/demo/template/papr/post-format-standard.html">Maintain Your
                                        PC Performance With PC Programs</a></h3>
                                    <div className="post-metas">
                                        <ul className="list-inline">
                                            <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Amachea Jajah</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End of .post-block */}
                        </div>
                        {/* End of .col-lg-6 */}

                        <div className="col-lg-6">
                            <div className="media post-block m-b-xs-30">
                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html"
                                    className="align-self-center"><img className=" m-r-xs-30" src="%PUBLIC_URL%/css/trending-stories-6.jpg"
                                        alt="" /></a>
                                <div className="media-body">
                                    <div className="post-cat-group m-b-xs-10">
                                        <a href="http://axilthemes.com/demo/template/papr/business.html"
                                            className="post-cat cat-btn bg-color-blue-two">SPORTS</a>
                                    </div>
                                    <h3 className="axil-post-title hover-line"><a
                                        href="http://axilthemes.com/demo/template/papr/post-format-standard.html">Thousands Now
                                        Adware Removal Who Never Thought They Could</a>
                                    </h3>
                                    <div className="post-metas">
                                        <ul className="list-inline">
                                            <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Xu Jianhong</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End of .post-block */}
                        </div>
                        {/* End of .col-lg-6 */}

                        <div className="col-lg-6">
                            <div className="media post-block m-b-xs-30">
                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html"
                                    className="align-self-center"><img className=" m-r-xs-30" src="%PUBLIC_URL%/css/trending-stories-7.jpg"
                                        alt="" /></a>
                                <div className="media-body">
                                    <div className="post-cat-group m-b-xs-10">
                                        <a href="http://axilthemes.com/demo/template/papr/business.html"
                                            className="post-cat cat-btn bg-color-yellow-one">ADVERTISING</a>
                                    </div>
                                    <h3 className="axil-post-title hover-line"><a
                                        href="http://axilthemes.com/demo/template/papr/post-format-standard.html">An Ugly
                                        Myspace Profile Will Sure Ruin Your Reputation</a></h3>
                                    <div className="post-metas">
                                        <ul className="list-inline">
                                            <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Amachea Jajah</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End of .post-block */}
                        </div>
                        {/* End of .col-lg-6 */}

                        <div className="col-lg-6">
                            <div className="media post-block m-b-xs-30">
                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html"
                                    className="align-self-center"><img className=" m-r-xs-30" src="%PUBLIC_URL%/css/trending-stories-8.jpg"
                                        alt="" /></a>
                                <div className="media-body">
                                    <div className="post-cat-group m-b-xs-10">
                                        <a href="http://axilthemes.com/demo/template/papr/business.html"
                                            className="post-cat cat-btn bg-color-green-three">MOTIVATION</a>
                                    </div>
                                    <h3 className="axil-post-title hover-line"><a
                                        href="http://axilthemes.com/demo/template/papr/post-format-standard.html">Not All Blank
                                        Cassettes Are Created Equal</a>
                                    </h3>
                                    <div className="post-metas">
                                        <ul className="list-inline">
                                            <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Xu Jianhong</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End of .post-block */}
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

export default HotNews;