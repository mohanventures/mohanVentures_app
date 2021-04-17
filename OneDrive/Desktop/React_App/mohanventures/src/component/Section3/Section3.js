import React from 'react';
import './Section3.css';

function Section3() {
    return (

        <section className="probootstrap-section probootstrap-bg-light" data-section="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form action="mailto:mohanzworld@gmail.com" method="POST" encType="multipart/form-data" name="EmailForm" className="probootstrap-form">
                            <h2 className="text-black mt0">Get In Touch</h2>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name"></input>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Email"></input>
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control" placeholder="Your Phone"></input>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" cols="30" rows="10" placeholder="Write a Message"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" classNameName="btn btn-primary" value="Submit your request"></input>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3 col-md-push-1">
                        <ul className="probootstrap-contact-details">
                            <li>
                                <span className="text-uppercase">Email</span>
                                info@mohanventures.com
                            </li>
                            <li>
                                <span className="text-uppercase">Phone</span>
                                +91 976 1382 9921
                            </li>
                            <li>
                                <span className="text-uppercase">Fax</span>
                                +91 976 1456 9862
                            </li>
                            <li>
                                <span className="text-uppercase">Address</span>
                                Suraj Kund Road, Sports Market <br />
                                    Ram Rubber Industries, Meerut  <br />
                                        Uttarpradesh, India 250003
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Section3;