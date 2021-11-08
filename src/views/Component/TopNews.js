import React from "react";

const TopNews = (props) => {
    const { newslist } = props
    return (
        <>
            <section className="axil-video-posts section-gap section-gap-top__with-text bg-grey-dark-one" style={{ paddingTop: "20px" }}>
                <div className="container">
                    <div className="section-title title-white m-b-xs-40">
                        <h2 className="axil-title">Top Stories</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="axil-img-container flex-height-container video-container__type-2 m-b-xs-30">
                                <a href={newslist[0]['news_link']} className="d-block h-100">
                                    <img src={newslist[0]['img_link']} alt="video post" className="w-100" />
                                    <div className="grad-overlay grad-overlay__transparent"></div>

                                </a>
                                <div className="media post-block grad-overlay__transparent position-absolute">
                                    <div className="media-body media-body__big" style={{ padding: "10px 20px" }}>
                                        <div className="axil-media-bottom mt-auto">
                                            <div className="post-cat-group m-b-xs-10">
                                                <a href={newslist[0]['news_link']} className="post-cat cat-btn btn-big bg-color-purple-two" style={{ margin: "0" }}>
                                                    {newslist[0]['news_website']}
                                                </a>
                                            </div>
                                            <h3 className="axil-post-title hover-line">
                                                <a href={newslist[0]['news_link']}>
                                                    {newslist[0]['news_title']}
                                                </a>
                                            </h3>
                                            <div className="post-metas">
                                                <ul className="list-inline">
                                                    <li>{newslist[0]['news_datetime']}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="axil-content">
                                {newslist.slice(1).map(news => {
                                    return (
                                        <div className="media post-block top-story-post-block post-block__on-dark-bg m-b-xs-30">
                                            <a href={news['news_link']} className="align-self-center">
                                                <img className=" m-r-xs-30" src={news['img_link']} style={{ objectFit: "cover", height: "15rem" }} />
                                            </a>
                                            <div className="media-body">
                                                <div className="post-cat-group m-b-xs-10" style={{ marginBottom: "5px" }}>
                                                    <a href={news['news_link']} className="post-cat cat-btn bg-color-green-three" style={{ marginBottom: "0" }}>
                                                        {news['news_website']}
                                                    </a>
                                                </div>
                                                <h3 className="axil-post-title hover-line" style={{ marginBottom: "5px" }}>
                                                    <a href={news['news_link']}>
                                                        {news['news_title']}
                                                    </a>
                                                </h3>
                                                <div className="post-metas">
                                                    <ul className="list-inline">
                                                        <li>{news['news_datetime']}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TopNews;
