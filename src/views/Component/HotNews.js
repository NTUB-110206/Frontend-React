import React from "react"

const HotNews = (props) => {
    const { newslist } = props
    return (
        <>
            <section className="section-gap section-gap-top__with-text trending-stories" style={{ paddingTop: "25px" }}>
                <div className="container">
                    <div className="section-title m-b-xs-40">
                        <h2 className="axil-title">HOT NEWS</h2>
                    </div>

                    <div className="row">
                        {
                            newslist.map(news => {
                                return (
                                    <div className="col-lg-6">
                                        <div className="media post-block m-b-xs-30">
                                            <a href={news['news_link']} className="align-self-center">
                                                <img className=" m-r-xs-30" src={news['img_link']} style={{ objectFit: "cover", height: "15rem" }} />
                                            </a>
                                            <div className="media-body">
                                                <div className="post-cat-group m-b-xs-10">
                                                    <a href={news['news_link']} className="post-cat cat-btn bg-color-blue-grey-one">
                                                        {news['news_website']}
                                                    </a>
                                                </div>
                                                <h3 className="axil-post-title hover-line">
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
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default HotNews;
