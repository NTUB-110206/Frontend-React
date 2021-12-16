import React from 'react'
const TrendLayout = (props) => {
    let { predict_trend, predict_price, realtime_price } = props
    predict_price = predict_price?.substring(0, 8)
    predict_trend = predict_trend?.replace(/\"/g,"")
    let current_price = parseInt(realtime_price[1]?.close)
    let yesterday_close = parseInt(realtime_price[0]?.close)
    let spread_price = Math.round(((current_price - yesterday_close)/yesterday_close*100)*100)/100
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
                                        $ {current_price?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                                    </span>
                                    <span style={{color:spread_price>=0?"red":"green", fontSize: 2.5+"rem", marginLeft:20+"px"}}>
                                        {spread_price?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}%
                                    </span>
                                </h2>
                                <h2 class="axil-post-title hover-line">
                                    Predict ${predict_price?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                                </h2>
                                <div class="add-block-widget m-b-xs-40">
                                    <a href="/news">
                                        <img src="assets/images/clientbanner/clientbanner2.jpg" alt="sidebar add" class="img-fluid" style={{padding:"0 3rem 3rem 0"}}/>
                                    </a>
                                </div>

                                
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <img src={predict_trend} alt="" class="img-fluid" width="1400" height="1000" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TrendLayout