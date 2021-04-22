import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="probootstrap-footer">
            <div className="container text-center">
                {/* <div className="row">
                    <div className="col-md-12">
                        <p className="probootstrap-social">
                            <a to="https://twitter.com"><i className="icon-twitter"></i></a>
                            <a to="https://facebook.com"><i className="icon-facebook2"></i></a>
                            <a to="https://instagram.com"><i className="icon-instagram2"></i></a>
                            <a to="https://linkedin.com"><i className="icon-linkedin"></i></a></p>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-md-12">
                        &copy; 2021 <a href="/">Mohan Ventures</a>. All Rights Reserved.<br />
                        Designed &amp; Developed by <a href="/about">Team</a> <br />
                        Reference Images by <a href="https://www.zinga.eu/">Zinga</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;