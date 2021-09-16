import React, { lazy, useState } from "react";

const TrendingStories = () => {
    return (
        <><div className="random-posts section-gap">
        <div className="container">
            <div className="section-title m-b-xs-40">
                <h2 className="axil-title">Categories Top News</h2>
                <!-- <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="btn-link">ALL TRENDING STORIES</a> -->
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <main className="axil-content">
                        {% include "bcd/categories_top_news.html" %}
                        {% include "bcd/categories_top_news.html" %}
                        {% include "bcd/categories_top_news.html" %}
                        {% include "bcd/categories_top_news.html" %}
                        {% include "bcd/categories_top_news.html" %}
                        {% include "bcd/categories_top_news.html" %}
                        {% include "bcd/categories_top_news.html" %}
                    </main>
                    <!-- End of .axil-content -->
                </div>
                <!-- End of .col-lg-8 -->
                <div className="col-lg-4">
                    <aside className="post-sidebar">
                        {% include "bcd/categories.html" %}
                        <div className="newsletter-widget weekly-newsletter bg-grey-light-three m-b-xs-40">
                            <div className="newsletter-content">
                                <div className="newsletter-icon">
                                    <i className="feather icon-send"></i>
                                </div>
                                <div className="section-title">
                                    <h3 className="axil-title">Subscribe To Our Weekly
                                        Newsletter</h3>
                                    <p className="mid m-t-xs-10 m-b-xs-20">No spam, notifications only about new
                                        products,
                                        updates.</p>
                                </div>
                                <!-- End of .section-title -->
                                <div className="subscription-form-wrapper">
                                    <form action="http://axilthemes.com/demo/template/papr/home-2.html#" className="subscription-form">
                                        <div className="form-group form-group-small m-b-xs-20">
                                            <label for="subscription-email">Enter Email Address</label>
                                            <input type="text" name="subscription-email" id="subscription-email">
                                        </div>
                                        <div className="m-b-xs-0">
                                            <button className="btn btn-primary btn-small">SUBSCRIBE</button>
                                        </div>
                                    </form>
                                    <!-- End of .subscription-form -->
                                </div>
                                <!-- End of .subscription-form-wrapper -->
                            </div>
                            <!-- End of .newsletter-content -->
                        </div>
                        <!-- End of  .newsletter-widget -->
                        <div className="sidebar-social-share-widget m-b-xs-40">
                            <ul className="social-share-list-wrapper">
                                <li className="social-share-list text-center perfect-square" style="height: 82.4896px;">
                                    <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="list-inner bg-color-facebook">
                                        <i className="fab fa-facebook-f"></i>
                                        <div className="counts">2000+</div>
                                        <div className="title">Fans</div>
                                    </a>
                                </li>
                                <!-- End of .social-share-list -->
                                <li className="social-share-list text-center perfect-square" style="height: 82.4896px;">
                                    <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="list-inner bg-color-twitter">
                                        <i className="fab fa-twitter"></i>
                                        <div className="counts">4000+</div>
                                        <div className="title">Followers</div>
                                    </a>
                                </li>
                                <!-- End of .social-share-list -->
                                <li className="social-share-list text-center perfect-square" style="height: 82.4896px;">
                                    <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="list-inner bg-color-youtube">
                                        <i className="fab fa-youtube"></i>
                                        <div className="counts">1M+</div>
                                        <div className="title">Subscribers</div>
                                    </a>
                                </li>
                                <!-- End of .social-share-list -->
                                <li className="social-share-list text-center perfect-square" style="height: 82.4896px;">
                                    <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="list-inner bg-color-linkedin">
                                        <i className="fab fa-linkedin-in"></i>
                                        <div className="counts">600+</div>
                                        <div className="title">Connections</div>
                                    </a>
                                </li>
                                <!-- End of .social-share-list -->
                                <li className="social-share-list text-center perfect-square" style="height: 82.4896px;">
                                    <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="list-inner bg-color-vimeo">
                                        <i className="fab fa-vimeo"></i>
                                        <div className="counts">500+</div>
                                        <div className="title">Connections</div>
                                    </a>
                                </li>
                                <!-- End of .social-share-list -->
                                <li className="social-share-list text-center perfect-square" style="height: 82.4896px;">
                                    <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="list-inner bg-color-pinterest">
                                        <i className="fab fa-pinterest"></i>
                                        <div className="counts">600+</div>
                                        <div className="title">Followers</div>
                                    </a>
                                </li>
                                <!-- End of .social-share-list -->
                                <li className="social-share-list text-center perfect-square" style="height: 82.4896px;">
                                    <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="list-inner bg-color-twitch">
                                        <i className="fab fa-twitch"></i>
                                        <div className="counts">1K+</div>
                                        <div className="title">Followers</div>
                                    </a>
                                </li>
                                <!-- End of .social-share-list -->
                                <li className="social-share-list text-center perfect-square" style="height: 82.4896px;">
                                    <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="list-inner bg-color-instagram">
                                        <i className="fab fa-instagram"></i>
                                        <div className="counts">1K+</div>
                                        <div className="title">Followers</div>
                                    </a>
                                </li>
                                <!-- End of .social-share-list -->
                            </ul>
                            <!-- End of .social-share-list-wrapper -->
                        </div>
                        <!-- End of .sidebar-social-share -->
                        <div className="post-widget sidebar-post-widget m-b-xs-40">
                            <ul className="nav nav-pills row no-gutters">
                                <li className="nav-item col">
                                    <a className="nav-link active" data-toggle="pill" href="http://axilthemes.com/demo/template/papr/home-2.html#recent-post">Recent</a>
                                </li>
                                <li className="nav-item col">
                                    <a className="nav-link" data-toggle="pill" href="http://axilthemes.com/demo/template/papr/home-2.html#popular-post">Popular</a>
                                </li>
                                <li className="nav-item col">
                                    <a className="nav-link" data-toggle="pill" href="http://axilthemes.com/demo/template/papr/home-2.html#comments">Comments</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="recent-post">
                                    <div className="axil-content">
                                        <div className="media post-block post-block__small">
                                            <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center"><img className=" m-r-xs-30" src="/static/temp/css/small-media-1.jpg" alt="media image"></a>
                                            <div className="media-body">
                                                <div className="post-cat-group">
                                                    <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="post-cat color-blue-three">BEAUTY,</a>
                                                    <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="post-cat color-yellow-one">TRADE,</a>
                                                    <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="post-cat color-red-one">MUSIC</a>
                                                </div>
                                                <h4 className="axil-post-title hover-line hover-line"><a href="http://axilthemes.com/demo/template/papr/post-format-standard.html">Stocking Your Restaurant
                                                        Kitchen Finding Reliable
                                                        Sellers</a></h4>
                                                <div className="post-metas">
                                                    <ul className="list-inline">
                                                        <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Amachea Jajah</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End of .post-block -->
                                        <div className="media post-block post-block__small">
                                            <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center"><img className=" m-r-xs-30" src="/static/temp/css/small-media-2.jpg" alt="media image"></a>
                                            <div className="media-body">
                                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="post-cat color-green-three">TRAVEL</a>
                                                <h4 className="axil-post-title hover-line hover-line"><a href="http://axilthemes.com/demo/template/papr/post-format-standard.html">Trip
                                                        To Iqaluit In Nunavut A
                                                        Canadian Arctic
                                                        City</a>
                                                </h4>
                                                <div className="post-metas">
                                                    <ul className="list-inline">
                                                        <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Xu Jianhong</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End of .post-block -->
                                        <div className="media post-block post-block__small">
                                            <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center"><img className=" m-r-xs-30" src="/static/temp/css/small-media-3.jpg" alt="media image"></a>
                                            <div className="media-body">
                                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="post-cat color-red-two">SPORTS</a>
                                                <h4 className="axil-post-title hover-line hover-line"><a href="http://axilthemes.com/demo/template/papr/post-format-standard.html">Thousands Now Adware
                                                        Removal Who Never Thought They Could</a></h4>
                                                <div className="post-metas">
                                                    <ul className="list-inline">
                                                        <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Ahmad Nazeri</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End of .post-block -->
                                        <div className="media post-block post-block__small">
                                            <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center"><img className=" m-r-xs-30" src="/static/temp/css/small-media-4.jpg" alt="media image"></a>
                                            <div className="media-body">
                                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="post-cat color-blue-one">FASHION</a>
                                                <h4 className="axil-post-title hover-line hover-line"><a href="http://axilthemes.com/demo/template/papr/post-format-standard.html">To
                                                        Keep Makeup Looking Fresh
                                                        Take A Powder</a></h4>
                                                <div className="post-metas">
                                                    <ul className="list-inline">
                                                        <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Sergio Pliego</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End of .post-block -->
                                    </div>
                                    <!-- End of .content -->
                                </div>
                                <!-- End of .tab-pane -->
                                <div className="tab-pane fade" id="popular-post">
                                    <div className="axil-content">
                                        <div className="media post-block post-block__small">
                                            <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center"><img className=" m-r-xs-30" src="/static/temp/css/small-media-3.jpg" alt="media image"></a>
                                            <div className="media-body">
                                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="post-cat color-blue-one">FASHION</a>
                                                <h4 className="axil-post-title hover-line hover-line"><a href="http://axilthemes.com/demo/template/papr/post-format-standard.html">To
                                                        Keep Makeup Looking Fresh
                                                        Take A Powder</a></h4>
                                                <div className="post-metas">
                                                    <ul className="list-inline">
                                                        <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Sergio Pliego</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End of .post-block -->
                                        <div className="media post-block post-block__small">
                                            <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center"><img className=" m-r-xs-30" src="/static/temp/css/small-media-2.jpg" alt="media image"></a>
                                            <div className="media-body">
                                                <a href="http://axilthemes.com/demo/template/papr/home-2.html#post-format-standard.html" className="post-cat color-blue-three">BEAUTY</a>
                                                <h4 className="axil-post-title hover-line hover-line"><a href="http://axilthemes.com/demo/template/papr/post-format-standard.html">Stocking Your Restaurant
                                                        Kitchen Finding Reliable
                                                        Sellers</a></h4>
                                                <div className="post-metas">
                                                    <ul className="list-inline">
                                                        <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Amachea Jajah</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End of .post-block -->
                                        <div className="media post-block post-block__small">
                                            <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center"><img className=" m-r-xs-30" src="/static/temp/css/small-media-1.jpg" alt="media image"></a>
                                            <div className="media-body">
                                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="post-cat color-green-three">TRAVEL</a>
                                                <h4 className="axil-post-title hover-line hover-line"><a href="http://axilthemes.com/demo/template/papr/post-format-standard.html">Trip
                                                        To Iqaluit In Nunavut A
                                                        Canadian Arctic
                                                        City</a>
                                                </h4>
                                                <div className="post-metas">
                                                    <ul className="list-inline">
                                                        <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Xu Jianhong</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End of .post-block -->
                                        <div className="media post-block post-block__small">
                                            <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center"><img className=" m-r-xs-30" src="/static/temp/css/small-media-4.jpg" alt="media image"></a>
                                            <div className="media-body">
                                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="post-cat color-red-two">SPORTS</a>
                                                <h4 className="axil-post-title hover-line hover-line"><a href="http://axilthemes.com/demo/template/papr/post-format-standard.html">RCB
                                                        vs RR, IPL 2019:
                                                        Bangalore, Rajasthan desperate
                                                        for
                                                        win</a></h4>
                                                <div className="post-metas">
                                                    <ul className="list-inline">
                                                        <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Ahmad Nazeri</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End of .post-block -->
                                    </div>
                                    <!-- End of .content -->
                                </div>
                                <!-- End of .tab-pane -->
                                <div className="tab-pane fade" id="comments">
                                    <div className="axil-content">
                                        <div className="media post-block post-block__small">
                                            <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center"><img className=" m-r-xs-30" src="/static/temp/css/small-media-2.jpg" alt="media image"></a>
                                            <div className="media-body">
                                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="post-cat color-red-two">SPORTS</a>
                                                <h4 className="axil-post-title hover-line hover-line"><a href="http://axilthemes.com/demo/template/papr/post-format-standard.html">RCB
                                                        vs RR, IPL 2019:
                                                        Bangalore, Rajasthan desperate
                                                        for
                                                        win</a></h4>
                                                <div className="post-metas">
                                                    <ul className="list-inline">
                                                        <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Ahmad Nazeri</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End of .post-block -->
                                        <div className="media post-block post-block__small">
                                            <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center"><img className=" m-r-xs-30" src="/static/temp/css/small-media-1.jpg" alt="media image"></a>
                                            <div className="media-body">
                                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="post-cat color-blue-three">BEAUTY</a>
                                                <h4 className="axil-post-title hover-line hover-line"><a href="http://axilthemes.com/demo/template/papr/post-format-standard.html">Stocking Your Restaurant
                                                        Kitchen Finding Reliable
                                                        Sellers</a></h4>
                                                <div className="post-metas">
                                                    <ul className="list-inline">
                                                        <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Amachea Jajah</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End of .post-block -->
                                        <div className="media post-block post-block__small">
                                            <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center"><img className=" m-r-xs-30" src="/static/temp/css/small-media-3.jpg" alt="media image"></a>
                                            <div className="media-body">
                                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="post-cat color-green-three">TRAVEL</a>
                                                <h4 className="axil-post-title hover-line hover-line"><a href="http://axilthemes.com/demo/template/papr/post-format-standard.html">Trip
                                                        To Iqaluit In Nunavut A
                                                        Canadian Arctic
                                                        City</a>
                                                </h4>
                                                <div className="post-metas">
                                                    <ul className="list-inline">
                                                        <li>By <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html">Xu Jianhong</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End of .post-block -->
                                        <div className="media post-block post-block__small">
                                            <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="align-self-center"><img className=" m-r-xs-30" src="/static/temp/css/small-media-4.jpg" alt="media image"></a>
                                            <div className="media-body">
                                                <a href="http://axilthemes.com/demo/template/papr/post-format-standard.html" className="post-cat color-blue-one">FASHION</a>
                                                <h4 className="axil-post-title hover-line hover-line"><a href="http://axilthemes.com/demo/template/papr/post-format-standard.html">To
                                                        Keep Makeup Looking Fresh
                                                        Take A Powder</a></h4>
                                                <div className="post-metas">
                                                    <ul className="list-inline">
                                                        <li>By <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Sergio Pliego</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End of .post-block -->
                                    </div>
                                    <!-- End of .content -->
                                </div>
                                <!-- End of .tab-pane -->
                            </div>
                            <!-- End of .tab-content -->
                        </div>
                        <!-- End of .sidebar-post-widget -->
                        <div className="instagram-widget m-b-xs-40">
                            <div className="widget-title">
                                <h3>Instagram</h3>
                            </div>
                            <div className="axil-content">
                                <ul className="instagram-post-list-wrapper">
                                    <li className="instagram-post-list perfect-square" style="height: 109.99px;">
                                        <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="list-inner" style="background-image: url(assets/images/instagram-post/instagram-post-1.jpg)">
                                            <div className="post-info-wrapper overlay">
                                                <div className="post-info">
                                                    <i className="feather icon-heart"></i>
                                                    20K+
                                                </div>
                                                <!-- End of .post-info -->
                                                <div className="post-info">
                                                    <i className="feather icon-message-square"></i>
                                                    200+
                                                </div>
                                                <!-- End of .post-info -->
                                            </div>
                                            <!-- End of .post-info-wrapper overlay -->
                                        </a>
                                    </li>
                                    <!-- End of .instagram-post-list -->
                                    <li className="instagram-post-list perfect-square" style="height: 109.99px;">
                                        <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="list-inner" style="background-image: url(assets/images/instagram-post/instagram-post-2.jpg)">
                                            <div className="post-info-wrapper overlay">
                                                <div className="post-info">
                                                    <i className="feather icon-heart"></i>
                                                    20K+
                                                </div>
                                                <!-- End of .post-info -->
                                                <div className="post-info">
                                                    <i className="feather icon-message-square"></i>
                                                    200+
                                                </div>
                                                <!-- End of .post-info -->
                                            </div>
                                            <!-- End of .post-info-wrapper overlay -->
                                        </a>
                                    </li>
                                    <!-- End of .instagram-post-list -->
                                    <li className="instagram-post-list perfect-square" style="height: 109.99px;">
                                        <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="list-inner" style="background-image: url(assets/images/instagram-post/instagram-post-3.jpg)">
                                            <div className="post-info-wrapper overlay">
                                                <div className="post-info">
                                                    <i className="feather icon-heart"></i>
                                                    20K+
                                                </div>
                                                <!-- End of .post-info -->
                                                <div className="post-info">
                                                    <i className="feather icon-message-square"></i>
                                                    200+
                                                </div>
                                                <!-- End of .post-info -->
                                            </div>
                                            <!-- End of .post-info-wrapper overlay -->
                                        </a>
                                    </li>
                                    <!-- End of .instagram-post-list -->
                                    <li className="instagram-post-list perfect-square" style="height: 109.99px;">
                                        <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="list-inner" style="background-image: url(assets/images/instagram-post/instagram-post-4.jpg)">
                                            <div className="post-info-wrapper overlay">
                                                <div className="post-info">
                                                    <i className="feather icon-heart"></i>
                                                    20K+
                                                </div>
                                                <!-- End of .post-info -->
                                                <div className="post-info">
                                                    <i className="feather icon-message-square"></i>
                                                    200+
                                                </div>
                                                <!-- End of .post-info -->
                                            </div>
                                            <!-- End of .post-info-wrapper overlay -->
                                        </a>
                                    </li>
                                    <!-- End of .instagram-post-list -->
                                    <li className="instagram-post-list perfect-square" style="height: 109.99px;">
                                        <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="list-inner" style="background-image: url(assets/images/instagram-post/instagram-post-5.jpg)">
                                            <div className="post-info-wrapper overlay">
                                                <div className="post-info">
                                                    <i className="feather icon-heart"></i>
                                                    20K+
                                                </div>
                                                <!-- End of .post-info -->
                                                <div className="post-info">
                                                    <i className="feather icon-message-square"></i>
                                                    200+
                                                </div>
                                                <!-- End of .post-info -->
                                            </div>
                                            <!-- End of .post-info-wrapper overlay -->
                                        </a>
                                    </li>
                                    <!-- End of .instagram-post-list -->
                                    <li className="instagram-post-list perfect-square" style="height: 109.99px;">
                                        <a href="http://axilthemes.com/demo/template/papr/home-2.html#" className="list-inner" style="background-image: url(assets/images/instagram-post/instagram-post-6.jpg)">
                                            <div className="post-info-wrapper overlay">
                                                <div className="post-info">
                                                    <i className="feather icon-heart"></i>
                                                    20K+
                                                </div>
                                                <!-- End of .post-info -->
                                                <div className="post-info">
                                                    <i className="feather icon-message-square"></i>
                                                    200+
                                                </div>
                                                <!-- End of .post-info -->
                                            </div>
                                            <!-- End of .post-info-wrapper overlay -->
                                        </a>
                                    </li>
                                    <!-- End of .instagram-post-list -->
                                </ul>
                                <!-- End of .instagram-post-list-wrapper -->
                                <div className="m-t-xs-20">
                                    <button className="btn btn-primary btn-small">FOLLOW US</button>
                                </div>
                            </div>
                            <!-- End of .content -->
                        </div>
                        <!-- End of .instagram-widget -->
                    </aside>
                    <!-- End of .post-sidebar -->
                </div>
                <!-- End of .col-lg-4 -->
            </div>
            <!-- End of .row -->
        </div>
        <!-- End of .container -->
    </div>
    <!-- End of .random-posts -->
        </>
    );
};

export default TrendingStories;
