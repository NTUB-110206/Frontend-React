import React from 'react'

const PageFooter = () => {
    return (
        <footer className="page-footer">
        <div className="footer-copyright">
            <div className="container">
            © 2019 Copyright
            <a className="grey-text text-lighten-4 right" href="#!">
                More Links
            </a>
            </div>
        </div>
        </footer>
    );
}

export default React.memo(PageFooter)
