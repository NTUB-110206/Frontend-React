import React from 'react'

const LargeNewsItem = (props) => {
    const { news } = props
    return (
        <div className="media post-block top-story-post-block post-block__on-dark-bg m-b-xs-30">
            <a href={news['news_link']} className="align-self-center">
                <img className=" m-r-xs-30" src={news['img_link']} alt="" style={{ objectFit: "cover", height: "15rem" }} />
            </a>
            <div className="media-body">
                <div className="post-cat-group m-b-xs-10">
                    <a href={news['news_link']} className="post-cat cat-btn btn-big bg-color-green-two">{news['news_website']}</a>
                    { news?.trend?.trend_label.length>0 ? <a href={news['news_link']} className={news?.trend?.trend_label=='正面'?'post-cat cat-btn btn-big bg-color-green-one':'post-cat cat-btn btn-big bg-color-red-one'}>{news['trend']['trend_label']}</a>: ''}
                    { news?.category?.category_label.length>0 ? <a href={news['news_link']} className="post-cat cat-btn btn-big bg-color-linkedin">{news['category']['category_label']}</a>: ''}
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
    )
}

export default LargeNewsItem;