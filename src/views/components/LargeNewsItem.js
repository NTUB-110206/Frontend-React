import React from 'react'

const LargeNewsItem = () => {
    return (
        <div className="media post-block top-story-post-block post-block__on-dark-bg m-b-xs-30">
            <a href="post-format-standard.html" className="align-self-center">
                <img className=" m-r-xs-30" src="assets/images/trending-stories/trending-stories-1.jpg" alt=""/>
            </a>
            <div className="media-body">
                <div className="post-cat-group m-b-xs-10">
                    <a href="business.html" className="post-cat cat-btn bg-color-green-three">LIFESTYLE</a>
                </div>
                <h3 className="axil-post-title hover-line">
                    <a href="post-format-standard.html">
                        Unmatched Toner Cartridge Quality 20 Less Than Oem Price
                    </a>
                </h3>
                <div className="post-metas">
                    <ul className="list-inline">
                        <li>By <a href="#">Amachea Jajah</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LargeNewsItem;