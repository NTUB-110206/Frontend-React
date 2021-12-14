import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = () => {
    const SideNav_open = () => { document.getElementById("side-nav")?.classList.add('opened'); }
    
    return (
        <header className="page-header">
            <div className="header-top header-top__style-two bg-grey-dark-seven">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-4">
                        </div>

                        <div className="brand-logo-container col-md-4 text-center">
                            <a href="index.html">
                                <img src="components/BitCoin_logo2.png" alt="" className="brand-logo" />
                            </a>
                        </div>


                        <div className="col-md-4">
                        </div>
                    </div>

                </div>

            </div>


            <nav className="navbar bg-grey-dark-one navbar__style-four">
                <div className="container">
                    <div className="navbar-inner justify-content-between">

                        <div className="navbar-toggler-wrapper">
                            <a className="side-nav-toggler" id="side-nav-toggler" onClick={SideNav_open}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>

                        <div className="brand-logo-container text-center d-lg-none">
                            <a href="index.html">
                                <img src="components/BitCoin_logo2.png" alt="" className="brand-logo" />
                            </a>
                        </div>

                        <div className="main-nav-wrapper">
                            <ul className="main-navigation list-inline" id="main-menu">
                                <li><Link to={"/news"}>News</Link></li>
                                <li><Link to={"/trend"}>Trend</Link></li>
                                <li><Link to={"/tutorial"}>Tutorial</Link></li>
                            </ul>
                        </div>


                        <div className="main-nav-toggler d-block d-lg-none" id="main-nav-toggler">
                            <div className="toggler-inner">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <div className="navbar-extra-features">
                            <form action="#" className="navbar-search">
                                <div className="search-field">
                                    <input type="text" className="navbar-search-field" placeholder="Search Here..." />
                                    <button className="navbar-search-btn" type="button">
                                        <i className="fal fa-search"></i></button>
                                </div>

                                <a href="#" className="navbar-search-close"><i className="fal fa-times"></i></a>
                            </form>

                            <a href="#" className="nav-search-field-toggler mr-0" data-toggle="nav-search-feild">
                                <i className="far fa-search"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default React.memo(PageHeader)
