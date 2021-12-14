import React from 'react'
const TrendLayout = () => {
    return (
        <>
            <section class="section-gap-top__with-text">
                <div class="container">
                    <div className="section-title title-black m-b-xs-10">
                        <h2 className="axil-title">Trend Predict</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="post-title-wrapper m-t-xs-60">
                                <h1 class="axil-post-title hover-line" style={{marginBottom:0}}>
                                    <img src="https://markets.bitcoin.com/images/coins/1.png" alt="bitcoin" class="img-fluid" /> Bitcoin <span style={{color:"#ccc", fontSize: 2.5+"rem"}}>BTC</span>
                                </h1>
                                
                                <h2 class="axil-post-title hover-line">
                                    <span style={{color:"#333", fontSize: 2.5+"rem"}}>
                                        $47,404.34 
                                    </span>
                                    <span style={{color:"red", fontSize: 2.5+"rem", marginLeft:20+"px"}}>
                                        -3.23%
                                    </span>
                                </h2>
                                <h2 class="axil-post-title hover-line">
                                    Predict $89387
                                </h2>
                                <div class="add-block-widget m-b-xs-40">
                                    <a href="/news">
                                        <img src="assets/images/clientbanner/clientbanner2.jpg" alt="sidebar add" class="img-fluid" style={{padding:"0 3rem 3rem 0"}}/>
                                    </a>
                                </div>

                                
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <img src="https://i.imgur.com/In3aD1W.jpeg" alt="" class="img-fluid" width="1400" height="1000" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TrendLayout