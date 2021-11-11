import React from 'react'

const PageHeader = () => {
    const SideNav_open = () => { document.getElementById("side-nav")?.classList.add('opened'); }
    
    return (
        <header class="page-header">
            <div class="header-top header-top__style-two bg-grey-dark-seven">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-md-4">
                            <ul class="header-top-nav list-inline justify-content-center justify-content-md-start">
                                <li><a href="#">Advertisement</a></li>
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>

                        <div class="brand-logo-container col-md-4 text-center">
                            <a href="index.html">
                                <img src="assets/images/white-logo.svg" alt="" class="brand-logo" />
                            </a>
                        </div>


                        <div class="col-md-4">
                            <ul class="ml-auto social-share header-top__social-share justify-content-end">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>


            <nav class="navbar bg-grey-dark-one navbar__style-four">
                <div class="container">
                    <div class="navbar-inner justify-content-between">

                        <div class="navbar-toggler-wrapper">
                            <a href="#" class="side-nav-toggler" id="side-nav-toggler" onClick={SideNav_open}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>

                        <div class="brand-logo-container text-center d-lg-none">
                            <a href="index.html">
                                <img src="assets/images/logo-symbol.svg" alt="" class="brand-logo" />
                            </a>
                        </div>

                        <div class="main-nav-wrapper">
                            <ul class="main-navigation list-inline" id="main-menu">
                                <li class="has-dropdown is-active">
                                    <a href="#">Home</a>
                                    <ul class="submenu">
                                        <li><a href="index.html">Home One</a></li>
                                        <li class="is-active"><a href="home-2.html">Home Two</a></li>
                                        <li><a href="home-3.html">Home Three</a></li>
                                        <li><a href="home-4.html">Home Four</a></li>
                                        <li><a href="home-5.html">Home Five</a></li>
                                    </ul>
                                </li>
                                <li class="has-dropdown">
                                    <a href="#">Posts</a>
                                    <ul class="submenu">
                                        <li class="has-dropdown">
                                            <a href="#">Post Layout</a>
                                            <ul class="submenu">
                                                <li><a href="post-layout-one.html">Post Layout 1</a></li>
                                                <li><a href="post-layout-two.html">Post Layout 2</a></li>
                                                <li><a href="post-layout-three.html">Post Layout 3</a></li>
                                                <li><a href="post-layout-four.html">Post Layout 4</a></li>
                                                <li><a href="post-layout-five.html">Post Layout 5</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-dropdown">
                                            <a href="#">Post Format</a>
                                            <ul class="submenu">
                                                <li><a href="post-format-standard.html">Post Format Standard</a></li>
                                                <li><a href="post-format-video.html">Post Format Video</a></li>
                                                <li><a href="post-format-audio.html">Post Format Audio</a></li>
                                                <li><a href="post-format-gallery.html">Post Format Gallery</a></li>
                                                <li><a href="post-format-quote.html">Post Format Quote</a></li>
                                                <li><a href="post-format-text-only.html">Post Format Text Only</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="business.html">Business</a></li>
                                <li><a href="lifestyle.html">Lifestyle</a></li>
                                <li><a href="technology.html">Technology</a></li>
                                <li><a href="sports.html">Sports</a></li>
                                <li class="has-dropdown">
                                    <a href="#">Pages</a>
                                    <ul class="submenu">
                                        <li><a href="author.html">Author</a></li>
                                        <li><a href="error-404.html">404 Error</a></li>
                                        <li><a href="under-construction.html">Coming Soon</a></li>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="team.html">Team</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>


                        <div class="main-nav-toggler d-block d-lg-none" id="main-nav-toggler">
                            <div class="toggler-inner">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <div class="navbar-extra-features">
                            <form action="#" class="navbar-search">
                                <div class="search-field">
                                    <input type="text" class="navbar-search-field" placeholder="Search Here..." />
                                    <button class="navbar-search-btn" type="button">
                                        <i class="fal fa-search"></i></button>
                                </div>

                                <a href="#" class="navbar-search-close"><i class="fal fa-times"></i></a>
                            </form>

                            <a href="#" class="nav-search-field-toggler mr-0" data-toggle="nav-search-feild">
                                <i class="far fa-search"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default React.memo(PageHeader)
