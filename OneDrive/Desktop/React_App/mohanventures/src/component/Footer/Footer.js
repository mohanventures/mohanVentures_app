import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="probootstrap-footer">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12">
                        <p className="probootstrap-social">
                            <a href="https://twitter.com"><i className="icon-twitter"></i></a>
                            <a href="https://facebook.com"><i className="icon-facebook2"></i></a>
                            <a href="https://instagram.com"><i className="icon-instagram2"></i></a>
                            <a href="https://linkedin.com"><i className="icon-linkedin"></i></a></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        &copy; 2021 <a href="">Mohan Ventures</a>. All Rights Reserved.<br />
                        Designed &amp; Developed by <a href="">Team</a> <br />
                        Demo Images by <a href="https://unsplash.com">Unsplash</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;