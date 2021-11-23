import React from 'react'
import LargeNewsItem from './LargeNewsItem';

const LargeNewsLayout = (props) => {
    const { newslist } = props
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
                            <a href={newslist[0]['news_link']} className="d-block h-100">
                                <img src={newslist[0]['img_link']} alt="video post" className="w-100" />
                                <div class="grad-overlay grad-overlay__transparent"></div>
                            </a>
                            <div className="media post-block grad-overlay__transparent position-absolute">
                                <div className="media-body media-body__big">
                                    <div className="axil-media-bottom mt-auto">
                                        <div className="post-cat-group m-b-xs-10">
                                            <a href={newslist[0]['news_link']} className="post-cat cat-btn btn-big bg-color-green-two">{newslist[0]['news_website']}</a>
                                            { newslist[0]?.trend?.trend_label.length>0 ? <a href={newslist[0]['news_link']} className={newslist[0]?.trend?.trend_label=='正面'?'post-cat cat-btn btn-big bg-color-green-one':'post-cat cat-btn btn-big bg-color-red-one'}>{newslist[0]['trend']['trend_label']}</a>: ''}
                                            { newslist[0]?.category?.category_label.length>0 ? <a href={newslist[0]['news_link']} className="post-cat cat-btn btn-big bg-color-linkedin">{newslist[0]['category']['category_label']}</a>: ''}
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
                            {
                                newslist.slice(1).map((item, index) => {
                                    return <LargeNewsItem key={index} news={item}/>
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
