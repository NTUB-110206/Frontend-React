import React from 'react'
const TheHeader = () => {

  return (
    <>
      <header className="page-header">
        <div className="header-top header-top__style-two bg-grey-dark-seven">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-4">
                {/* <ul className="header-top-nav list-inline justify-content-center justify-content-md-start">
                                <li className="current-date">Friday, July 12, 2019</li>
                                <li><a href="http://axilthemes.com/demo/template/papr/home-2.html#">Advertisement</a></li>
                                <li><a href="http://axilthemes.com/demo/template/papr/about-us.html">About Us</a></li>
                                <li><a href="http://axilthemes.com/demo/template/papr/contact.html">Contact Us</a></li>
                            </ul> */}
                {/* End of .header-top-nav */}
              </div>

              <div className="brand-logo-container col-md-4 text-center">
                <a href="http://axilthemes.com/demo/template/papr/index.html">

                </a>
              </div>
              {/* End of .brand-logo-container */}

              <div className="col-md-4">
                {/* <ul className="ml-auto social-share header-top__social-share justify-content-end">
                                <li><a href="http://axilthemes.com/demo/template/papr/home-2.html#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="http://axilthemes.com/demo/template/papr/home-2.html#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="http://axilthemes.com/demo/template/papr/home-2.html#"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="http://axilthemes.com/demo/template/papr/home-2.html#"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul> */}
              </div>
            </div>
            {/* End of .row */}
          </div>
          {/* End of .container */}
        </div>
        {/* End of .header-top */}

        <nav className="navbar bg-grey-dark-one navbar__style-four">
          <div className="container">
            <div className="navbar-inner justify-content-between">

              <div className="navbar-toggler-wrapper">
                <a className="side-nav-toggler" id="side-nav-toggler">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              {/* End of .navbar-toggler-wrapper */}

              <div className="brand-logo-container text-center d-lg-none">
                <a href="http://axilthemes.com/demo/template/papr/index.html">


                </a>
              </div>
              {/* End of .brand-logo-container */}

              <div className="main-nav-wrapper">
                <ul className="main-navigation list-inline" id="main-menu">
                  <li><a href="http://axilthemes.com/demo/template/papr/home-2.html#">Home</a></li>
                  <li><a href="http://axilthemes.com/demo/template/papr/home-2.html#">Posts</a></li>
                  <li><a href="http://axilthemes.com/demo/template/papr/business.html">Business</a></li>
                  <li><a href="http://axilthemes.com/demo/template/papr/lifestyle.html">Lifestyle</a></li>
                  <li><a href="http://axilthemes.com/demo/template/papr/technology.html">Technology</a></li>
                  <li><a href="http://axilthemes.com/demo/template/papr/sports.html">Sports</a></li>
                  {/* <li className="has-dropdown">
                                    <a href="http://axilthemes.com/demo/template/papr/home-2.html#">Pages</a>
                                    <ul className="submenu">
                                        <li><a href="http://axilthemes.com/demo/template/papr/author.html">Author</a></li>
                                        <li><a href="http://axilthemes.com/demo/template/papr/error-404.html">404 Error</a></li>
                                        <li><a href="http://axilthemes.com/demo/template/papr/under-construction.html">Coming Soon</a></li>
                                        <li><a href="http://axilthemes.com/demo/template/papr/about-us.html">About Us</a></li>
                                        <li><a href="http://axilthemes.com/demo/template/papr/team.html">Team</a></li>
                                        <li><a href="http://axilthemes.com/demo/template/papr/contact.html">Contact Us</a></li>
                                    </ul>
                                </li> */}
                </ul>
                {/* End of .main-navigation */}
              </div>
              {/* End of .main-nav-wrapper */}

              <div className="main-nav-toggler d-block d-lg-none" id="main-nav-toggler">
                <div className="toggler-inner">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              {/* End of .main-nav-toggler */}

              <div className="navbar-extra-features">
                {/* 會跑版 不能砍 */}
              </div>
              {/* End of .navbar-extra-features */}
            </div>
            {/* End of .navbar-inner */}
          </div>
          {/* End of .container */}
        </nav>
        {/* End of .navbar */}
      </header>
    </>
  )
}

export default TheHeader
