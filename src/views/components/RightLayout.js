import React from 'react'

const RightLayout = () => {
    return (
        <div className="col-lg-4">
            <aside className="post-sidebar">
                <div className="newsletter-widget weekly-newsletter bg-grey-light-three m-b-xs-40">
                    <div className="newsletter-content">
                        <div className="newsletter-icon">
                            <i className="feather icon-send"></i>
                        </div>
                        <div className="section-title">
                            <h3 className="axil-title">
                                Subscribe To Our Weekly Newsletter
                            </h3>
                            <p className="mid m-t-xs-10 m-b-xs-20">No spam, notifications only about new products, updates.</p>
                        </div>
                        <div className="subscription-form-wrapper">
                            <form action="#" className="subscription-form">
                                <div className="form-group form-group-small m-b-xs-20">
                                    {/* <label for="subscription-email">Enter Email Address</label> */}
                                    <input type="text" name="subscription-email" id="subscription-email" />
                                </div>
                                <div className="m-b-xs-0">
                                    <button className="btn btn-primary btn-small">SUBSCRIBE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="category-widget m-b-xs-40">
                    <div className="widget-title">
                        <h3>Categories</h3>
                        <div className="owl-nav">
                            <button className="custom-owl-prev"><i
                                className="feather icon-chevron-left"></i></button>
                            <button className="custom-owl-next"><i
                                className="feather icon-chevron-right"></i></button>
                        </div>
                    </div>
                    <div className="category-carousel">
                        <div className="owl-carousel owl-theme" data-owl-items="1" data-owl-loop="true"
                            data-owl-autoplay="true" data-owl-dots="false" data-owl-nav="false"
                            data-owl-margin="10">
                            <div className="cat-carousel-inner">
                                <ul className="category-list-wrapper">
                                    <li className="category-list perfect-square">
                                        <a href="post-format-standard.html" className="list-inner"
                                            style={{ backgroundImage: "url(assets/images/category-bg/category-bg-1.png)" }}>
                                            <div className="post-info-wrapper overlay">
                                                <div className="counter-inner"><span className="counter">20</span>+
                                                </div>
                                                <h4 className="cat-title">Top Stories</h4>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="category-list perfect-square">
                                        <a href="post-format-standard.html" className="list-inner"
                                            style={{ backgroundImage: "url(assets/images/category-bg/category-bg-2.png)" }}>
                                            <div className="post-info-wrapper overlay">
                                                <div className="counter-inner"><span className="counter">100</span>+
                                                </div>
                                                <h4 className="cat-title">Business</h4>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="category-list perfect-square">
                                        <a href="post-format-standard.html" className="list-inner"
                                            style={{ backgroundImage: "url(assets/images/category-bg/category-bg-3.png)" }}>
                                            <div className="post-info-wrapper overlay">
                                                <div className="counter-inner"><span className="counter">10</span>+
                                                </div>
                                                <h4 className="cat-title">Travel</h4>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="category-list perfect-square">
                                        <a href="post-format-standard.html" className="list-inner"
                                            style={{ backgroundImage: "url(assets/images/category-bg/category-bg-4.png)" }}>
                                            <div className="post-info-wrapper overlay">
                                                <div className="counter-inner"><span className="counter">10</span>+
                                                </div>
                                                <h4 className="cat-title">Food</h4>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="cat-carousel-inner">
                                <ul className="category-list-wrapper">
                                    <li className="category-list perfect-square">
                                        <a href="post-format-standard.html" className="list-inner"
                                            style={{ backgroundImage: "url(assets/images/category-bg/category-bg-5.jpg)" }}>
                                            <div className="post-info-wrapper overlay">
                                                <div className="counter-inner"><span className="counter">20</span>+
                                                </div>
                                                <h4 className="cat-title">Top Stories</h4>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="category-list perfect-square">
                                        <a href="post-format-standard.html" className="list-inner"
                                            style={{ backgroundImage: "url(assets/images/category-bg/category-bg-6.jpg)" }}>
                                            <div className="post-info-wrapper overlay">
                                                <div className="counter-inner"><span className="counter">100</span>+
                                                </div>
                                                <h4 className="cat-title">Business</h4>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="category-list perfect-square">
                                        <a href="post-format-standard.html" className="list-inner"
                                            style={{ backgroundImage: "url(assets/images/category-bg/category-bg-7.jpg)" }}>
                                            <div className="post-info-wrapper overlay">
                                                <div className="counter-inner"><span className="counter">10</span>+
                                                </div>
                                                <h4 className="cat-title">Travel</h4>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="category-list perfect-square">
                                        <a href="post-format-standard.html" className="list-inner"
                                            style={{ backgroundImage: "url(assets/images/category-bg/category-bg-8.jpg)" }}>
                                            <div className="post-info-wrapper overlay">
                                                <div className="counter-inner"><span className="counter">10</span>+
                                                </div>
                                                <h4 className="cat-title">Food</h4>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-social-share-widget m-b-xs-40">
                    <ul className="social-share-list-wrapper">
                        <li className="social-share-list text-center perfect-square">
                            <a href="#" className="list-inner bg-color-facebook">
                                <i className="fab fa-facebook-f"></i>
                                <div className="counts">2000+</div>
                                <div className="title">Fans</div>
                            </a>
                        </li>
                        <li className="social-share-list text-center perfect-square">
                            <a href="#" className="list-inner bg-color-twitter">
                                <i className="fab fa-twitter"></i>
                                <div className="counts">4000+</div>
                                <div className="title">Followers</div>
                            </a>
                        </li>
                        <li className="social-share-list text-center perfect-square">
                            <a href="#" className="list-inner bg-color-youtube">
                                <i className="fab fa-youtube"></i>
                                <div className="counts">1M+</div>
                                <div className="title">Subscribers</div>
                            </a>
                        </li>
                        <li className="social-share-list text-center perfect-square">
                            <a href="#" className="list-inner bg-color-linkedin">
                                <i className="fab fa-linkedin-in"></i>
                                <div className="counts">600+</div>
                                <div className="title">Connections</div>
                            </a>
                        </li>
                        <li className="social-share-list text-center perfect-square">
                            <a href="#" className="list-inner bg-color-vimeo">
                                <i className="fab fa-vimeo"></i>
                                <div className="counts">500+</div>
                                <div className="title">Connections</div>
                            </a>
                        </li>
                        <li className="social-share-list text-center perfect-square">
                            <a href="#" className="list-inner bg-color-pinterest">
                                <i className="fab fa-pinterest"></i>
                                <div className="counts">600+</div>
                                <div className="title">Followers</div>
                            </a>
                        </li>
                        <li className="social-share-list text-center perfect-square">
                            <a href="#" className="list-inner bg-color-twitch">
                                <i className="fab fa-twitch"></i>
                                <div className="counts">1K+</div>
                                <div className="title">Followers</div>
                            </a>
                        </li>
                        <li className="social-share-list text-center perfect-square">
                            <a href="#" className="list-inner bg-color-instagram">
                                <i className="fab fa-instagram"></i>
                                <div className="counts">1K+</div>
                                <div className="title">Followers</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="post-widget sidebar-post-widget m-b-xs-40">
                    <ul className="nav nav-pills row no-gutters">
                        <li className="nav-item col">
                            <a className="nav-link active" data-toggle="pill" href="#recent-post">Recent</a>
                        </li>
                        <li className="nav-item col">
                            <a className="nav-link" data-toggle="pill" href="#popular-post">Popular</a>
                        </li>
                        <li className="nav-item col">
                            <a className="nav-link" data-toggle="pill" href="#comments">Comments</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="recent-post">
                            <div className="axil-content">
                                <div className="media post-block post-block__small">
                                    <a href="post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30" src="assets/images/media/small-media-1.jpg" alt="media image" />
                                    </a>
                                    <div className="media-body">
                                        <div className="post-cat-group">
                                            <a href="post-format-standard.html"
                                                className="post-cat color-blue-three">BEAUTY,</a>
                                            <a href="post-format-standard.html"
                                                className="post-cat color-yellow-one">TRADE,</a>
                                            <a href="post-format-standard.html"
                                                className="post-cat color-red-one">MUSIC</a>
                                        </div>
                                        <h4 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">Stocking Your Restaurant
                                            Kitchen Finding Reliable
                                            Sellers</a></h4>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>By <a href="#">Amachea Jajah</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="media post-block post-block__small">
                                    <a href="post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30" src="assets/images/media/small-media-2.jpg" alt="media image" />
                                    </a>
                                    <div className="media-body">
                                        <a href="post-format-standard.html"
                                            className="post-cat color-green-three">TRAVEL</a>
                                        <h4 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">Trip
                                            To Iqaluit In Nunavut A
                                            Canadian Arctic
                                            City</a>
                                        </h4>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>By <a href="#">Xu Jianhong</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="media post-block post-block__small">
                                    <a href="post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30" src="assets/images/media/small-media-3.jpg" alt="media image" />
                                    </a>
                                    <div className="media-body">
                                        <a href="post-format-standard.html"
                                            className="post-cat color-red-two">SPORTS</a>
                                        <h4 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">Thousands Now Adware
                                            Removal Who Never Thought They Could</a></h4>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>By <a href="#">Ahmad Nazeri</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="media post-block post-block__small">
                                    <a href="post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30" src="assets/images/media/small-media-4.jpg" alt="media image" />
                                    </a>
                                    <div className="media-body">
                                        <a href="post-format-standard.html"
                                            className="post-cat color-blue-one">FASHION</a>
                                        <h4 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">To
                                            Keep Makeup Looking Fresh
                                            Take A Powder</a></h4>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>By <a href="#">Sergio Pliego</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="popular-post">
                            <div className="axil-content">
                                <div className="media post-block post-block__small">
                                    <a href="post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30" src="assets/images/media/small-media-3.jpg" alt="media image" />
                                    </a>
                                    <div className="media-body">
                                        <a href="post-format-standard.html"
                                            className="post-cat color-blue-one">FASHION</a>
                                        <h4 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">To
                                            Keep Makeup Looking Fresh
                                            Take A Powder</a></h4>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>By <a href="#">Sergio Pliego</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="media post-block post-block__small">
                                    <a href="post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30" src="assets/images/media/small-media-2.jpg" alt="media image" />
                                    </a>
                                    <div className="media-body">
                                        <a href="#post-format-standard.html"
                                            className="post-cat color-blue-three">BEAUTY</a>
                                        <h4 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">Stocking Your Restaurant
                                            Kitchen Finding Reliable
                                            Sellers</a></h4>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>By <a href="#">Amachea Jajah</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="media post-block post-block__small">
                                    <a href="post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30" src="assets/images/media/small-media-1.jpg" alt="media image" />
                                    </a>
                                    <div className="media-body">
                                        <a href="post-format-standard.html"
                                            className="post-cat color-green-three">TRAVEL</a>
                                        <h4 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">Trip
                                            To Iqaluit In Nunavut A
                                            Canadian Arctic
                                            City</a>
                                        </h4>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>By <a href="#">Xu Jianhong</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="media post-block post-block__small">
                                    <a href="post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30" src="assets/images/media/small-media-4.jpg" alt="media image" />
                                    </a>
                                    <div className="media-body">
                                        <a href="post-format-standard.html"
                                            className="post-cat color-red-two">SPORTS</a>
                                        <h4 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">RCB
                                            vs RR, IPL 2019:
                                            Bangalore, Rajasthan desperate
                                            for
                                            win</a></h4>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>By <a href="#">Ahmad Nazeri</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="comments">
                            <div className="axil-content">
                                <div className="media post-block post-block__small">
                                    <a href="post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30" src="assets/images/media/small-media-2.jpg" alt="media image" />
                                    </a>
                                    <div className="media-body">
                                        <a href="post-format-standard.html"
                                            className="post-cat color-red-two">SPORTS</a>
                                        <h4 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">RCB
                                            vs RR, IPL 2019:
                                            Bangalore, Rajasthan desperate
                                            for
                                            win</a></h4>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>By <a href="#">Ahmad Nazeri</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="media post-block post-block__small">
                                    <a href="post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30" src="assets/images/media/small-media-1.jpg" alt="media image" />
                                    </a>
                                    <div className="media-body">
                                        <a href="post-format-standard.html"
                                            className="post-cat color-blue-three">BEAUTY</a>
                                        <h4 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">Stocking Your Restaurant
                                            Kitchen Finding Reliable
                                            Sellers</a></h4>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>By <a href="#">Amachea Jajah</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="media post-block post-block__small">
                                    <a href="post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30" src="assets/images/media/small-media-3.jpg" alt="media image" />
                                    </a>
                                    <div className="media-body">
                                        <a href="post-format-standard.html"
                                            className="post-cat color-green-three">TRAVEL</a>
                                        <h4 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">Trip
                                            To Iqaluit In Nunavut A
                                            Canadian Arctic
                                            City</a>
                                        </h4>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>By <a href="post-format-standard.html">Xu Jianhong</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="media post-block post-block__small">
                                    <a href="post-format-standard.html" className="align-self-center">
                                        <img className=" m-r-xs-30" src="assets/images/media/small-media-4.jpg" alt="media image" />
                                    </a>
                                    <div className="media-body">
                                        <a href="post-format-standard.html"
                                            className="post-cat color-blue-one">FASHION</a>
                                        <h4 className="axil-post-title hover-line hover-line"><a
                                            href="post-format-standard.html">To
                                            Keep Makeup Looking Fresh
                                            Take A Powder</a></h4>
                                        <div className="post-metas">
                                            <ul className="list-inline">
                                                <li>By <a href="#">Sergio Pliego</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="instagram-widget m-b-xs-40">
                    <div className="widget-title">
                        <h3>Instagram</h3>
                    </div>
                    <div className="axil-content">
                        <ul className="instagram-post-list-wrapper">
                            <li className="instagram-post-list perfect-square">
                                <a href="#" className="list-inner"
                                    style={{ backgroundImage: "url(assets/images/instagram-post/instagram-post-1.jpg)" }}>
                                    <div className="post-info-wrapper overlay">
                                        <div className="post-info">
                                            <i className="feather icon-heart"></i>
                                            20K+
                                        </div>
                                        <div className="post-info">
                                            <i className="feather icon-message-square"></i>
                                            200+
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="instagram-post-list perfect-square">
                                <a href="#" className="list-inner"
                                    style={{ backgroundImage: "url(assets/images/instagram-post/instagram-post-2.jpg)" }}>
                                    <div className="post-info-wrapper overlay">
                                        <div className="post-info">
                                            <i className="feather icon-heart"></i>
                                            20K+
                                        </div>
                                        <div className="post-info">
                                            <i className="feather icon-message-square"></i>
                                            200+
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="instagram-post-list perfect-square">
                                <a href="#" className="list-inner"
                                    style={{ backgroundImage: "url(assets/images/instagram-post/instagram-post-3.jpg)" }}>
                                    <div className="post-info-wrapper overlay">
                                        <div className="post-info">
                                            <i className="feather icon-heart"></i>
                                            20K+
                                        </div>
                                        <div className="post-info">
                                            <i className="feather icon-message-square"></i>
                                            200+
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="instagram-post-list perfect-square">
                                <a href="#" className="list-inner"
                                    style={{ backgroundImage: "url(assets/images/instagram-post/instagram-post-4.jpg)" }}>
                                    <div className="post-info-wrapper overlay">
                                        <div className="post-info">
                                            <i className="feather icon-heart"></i>
                                            20K+
                                        </div>
                                        <div className="post-info">
                                            <i className="feather icon-message-square"></i>
                                            200+
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="instagram-post-list perfect-square">
                                <a href="#" className="list-inner"
                                    style={{ backgroundImage: "url(assets/images/instagram-post/instagram-post-5.jpg)" }}>
                                    <div className="post-info-wrapper overlay">
                                        <div className="post-info">
                                            <i className="feather icon-heart"></i>
                                            20K+
                                        </div>
                                        <div className="post-info">
                                            <i className="feather icon-message-square"></i>
                                            200+
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="instagram-post-list perfect-square">
                                <a href="#" className="list-inner"
                                    style={{ backgroundImage: "url(assets/images/instagram-post/instagram-post-6.jpg)" }}>
                                    <div className="post-info-wrapper overlay">
                                        <div className="post-info">
                                            <i className="feather icon-heart"></i>
                                            20K+
                                        </div>
                                        <div className="post-info">
                                            <i className="feather icon-message-square"></i>
                                            200+
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="m-t-xs-20">
                            <button className="btn btn-primary btn-small">FOLLOW US</button>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default RightLayout;
