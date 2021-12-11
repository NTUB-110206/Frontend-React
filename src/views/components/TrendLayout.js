import React from 'react'
const TrendLayout = () => {
    return (
        <>
            <section class="section-gap-top__with-text">
                <div class="container">
                    <div className="section-title title-black m-b-xs-10">
                        <h2 className="axil-title">Trend Predict</h2>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-8">
                            <img src="https://i.imgur.com/In3aD1W.jpeg" alt="" class="img-fluid" width="1400" height="1000" />
                        </div>
                        <div class="col-lg-4">
                            <div class="post-title-wrapper">
                                <div class="btn-group">
                                    <a href="#" class="cat-btn bg-color-blue-one">TECHNOLOGY</a>
                                </div>
                                <h2 class="m-t-xs-20 m-b-xs-0 axil-post-title hover-line">VR Is the Use of Computer
                                    Technology to Create a Simulated Environment.
                                </h2>
                                <div class="post-metas banner-post-metas m-t-xs-20">
                                    <ul class="list-inline">
                                        <li>
                                            <a href="#" class="post-author post-author-with-img">
                                                <img src="assets/images/author/01.png" alt="author" />
                                                Ashley Graham
                                            </a>
                                        </li>
                                        <li><a href="#"><i class="feather icon-activity"></i>5k Views</a></li>
                                        <li><a href="#"><i class="feather icon-share-2"></i>230 Shares</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TrendLayout