import React from 'react'
const TheSideNav = () => {
  return (
    <>
      <div className="side-nav side-nav__left">
        <div className="side-nav-inner nicescroll-container" style={{ overflow: "hidden", outline: "none" }} tabIndex="1">
          <form action="http://axilthemes.com/demo/template/papr/home-2.html#" className="side-nav-search-form">
            <div className="form-group search-field">
              <input type="text" className="search-field" name="search-field" placeholder="Search..." />
              <button className="side-nav-search-btn"><i className="fas fa-search"></i></button>
            </div>
            {/* End of .side-nav-search-form */}
          </form>
          {/* End of .side-nav-search-form */}
          <div className="side-nav-content">
            <div className="row ">
              <div className="col-lg-6">
                <ul className="main-navigation side-navigation list-inline flex-column">
                  <li><a href="http://axilthemes.com/demo/template/papr/business.html">Business</a></li>
                  <li><a href="http://axilthemes.com/demo/template/papr/lifestyle.html">Lifestyle</a></li>
                  <li><a href="http://axilthemes.com/demo/template/papr/technology.html">Technology</a></li>
                  <li><a href="http://axilthemes.com/demo/template/papr/sports.html">Sports</a></li>
                </ul>
                {/* End of .main-navigation */}
              </div>
              {/* End of  .col-md-6 */}
              <div className="col-lg-6">
                <div className="axil-contact-info-inner">
                  <h5 className="h5 m-b-xs-10">
                    Contact Information
                  </h5>
                  <div className="axil-contact-info">
                    <address className="address">
                      <p className="m-b-xs-30  mid grey-dark-three ">Theodore Lowe, Ap
                        #867-859<br />Sit Rd, Azusa New York</p>
                      <div className="h5 m-b-xs-5">We're Available 24/ 7. Call Now.</div>
                      <div>
                        <a className="tel" href="tel:8884562790"><i className="fas fa-phone"></i>(888)
                          456-2790</a>
                      </div>
                      <div>
                        <a className="tel" href="tel:12125553333"><i className="fas fa-fax"></i>(121)
                          255-53333</a>
                      </div>
                    </address>
                    {/* End of address */}
                    <div className="contact-social-share m-t-xs-30">
                      <div className="axil-social-title h5">Follow Us</div>
                      <ul className="social-share social-share__with-bg">
                        <li><a href="http://axilthemes.com/demo/template/papr/home-2.html#"><i
                          className="fab fa-facebook-f"></i></a></li>
                        <li><a href="http://axilthemes.com/demo/template/papr/home-2.html#"><i
                          className="fab fa-twitter"></i></a></li>
                        <li><a href="http://axilthemes.com/demo/template/papr/home-2.html#"><i
                          className="fab fa-behance"></i></a></li>
                        <li><a href="http://axilthemes.com/demo/template/papr/home-2.html#"><i
                          className="fab fa-linkedin-in"></i></a></li>
                      </ul>
                    </div>
                    {/* End of .contact-shsdf */}
                  </div>
                  {/* End of .axil-contact-info */}
                </div>
                {/* End of .axil-contact-info-inner */}
              </div>
            </div>
            {/* End of .row */}
          </div>
        </div>
        {/* End of .side-nav-inner */}
        <div className="close-sidenav" id="close-sidenav">
          <div></div>
          <div></div>
        </div>
        <div id="ascrail2000" className="nicescroll-rails nicescroll-rails-vr"
          style={{ width: "8px", zIndex: "9999", cursor: "default", position: "absolute", top: "105px", left: "655px", height: "367px", display: "block", opacity: "0" }}>
          <div className="nicescroll-cursors"
            style={{ position: "relative", top: "10px", float: "right", width: "6px", height: "213px", backgroundColor: "rgb(211, 215, 218)", border: "1px solid rgb(255, 255, 255)", backgroundClip: "padding-box", borderRadius: "0px" }}>
          </div>
        </div>
        <div id="ascrail2000-hr" className="nicescroll-rails nicescroll-rails-hr"
          style={{ height: "8px", zIndex: "9999", top: "464.104px", left: "105px", position: "absolute", cursor: "default", display: "none", width: "550px", opacity: "0" }}>
          <div className="nicescroll-cursors"
            style={{ position: "absolute", top: "0px", height: "6px", width: "558px", backgroundColor: "rgb(211, 215, 218)", border: "1px solid rgb(255, 255, 255)", backgroundClip: "padding-box", borderRadius: "0px", left: "0px" }}>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(TheSideNav)
