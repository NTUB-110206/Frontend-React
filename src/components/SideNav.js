import React from 'react'

const SideNav = () => {
    const SideNav_close = () => { document.getElementById("side-nav")?.classList.remove("opened"); }

    return (
        <div class="side-nav side-nav__left" id="side-nav">
            <div class="side-nav-inner nicescroll-container">
                <form action="#" class="side-nav-search-form">
                    <div class="form-group search-field">
                        <input type="text" class="search-field" name="search-field" placeholder="Search..."/>
                        <button class="side-nav-search-btn"><i class="fas fa-search"></i></button>
                    </div>
                </form>
                <div class="side-nav-content">
                    <div class="row ">
                        <div class="col-lg-6">
                            <ul class="main-navigation side-navigation list-inline flex-column">
                                <li><a href="business.html">Business</a></li>
                                <li><a href="lifestyle.html">Lifestyle</a></li>
                                <li><a href="technology.html">Technology</a></li>
                                <li><a href="sports.html">Sports</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <div class="axil-contact-info-inner">
                                <h5 class="h5 m-b-xs-10">
                                    Contact Information
                                </h5>
                                <div class="axil-contact-info">
                                    <address class="address">
                                        <p class="m-b-xs-30  mid grey-dark-three ">
                                            Theodore Lowe, Ap#867-859<br/>Sit Rd, Azusa New York</p>
                                        <div class="h5 m-b-xs-5">We're Available 24/ 7. Call Now.</div>
                                        <div>
                                            <a class="tel" href="tel:8884562790"><i class="fas fa-phone"></i>(888)
                                                456-2790</a>
                                        </div>
                                        <div>
                                            <a class="tel" href="tel:12125553333"><i class="fas fa-fax"></i>(121)
                                                255-53333</a>
                                        </div>
                                    </address>
                                    <div class="contact-social-share m-t-xs-30">
                                        <div class="axil-social-title h5">Follow Us</div>
                                        <ul class="social-share social-share__with-bg">
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="close-sidenav" id="close-sidenav" onClick={SideNav_close}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default React.memo(SideNav)
