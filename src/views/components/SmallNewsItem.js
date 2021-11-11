import React from 'react'

const SmallNewsItem = () => {
    return (
        <div className="media post-block m-b-xs-30">
            <a href="post-format-standard.html" className="align-self-center">
                <img className=" m-r-xs-30" src="assets/images/trending-stories/trending-stories-4.jpg" alt="" />
            </a>
            <div className="media-body">
                <div className="post-cat-group m-b-xs-10">
                    <a href="business.html" className="post-cat cat-btn bg-color-blue-three">RACING</a>
                </div>
                <h3 className="axil-post-title hover-line">
                    <a href="post-format-standard.html">
                        Kipchoge Proves He Has No Equal: Runs 2nd Fastest Marathon Time In History
                    </a>
                </h3>
                <div className="post-metas">
                    <ul className="list-inline">
                        <li>By <a href="#">Sergio Pliego</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SmallNewsItem;