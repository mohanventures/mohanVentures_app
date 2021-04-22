import React from 'react';
import './Section3.css';

function Section3() {
    return (

        <section className="probootstrap-section probootstrap-bg-light" data-section="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form action="mailto:mohanzworld@gmail.com" method="POST" encType="multipart/form-data" name="EmailForm" className="probootstrap-form">
                            <h2 className="text-center text-black mt0">Get In Touch</h2>
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
                                mohanzworld@gmail.com
                            </li>
                            <li>
                                <span className="text-uppercase">Phone</span>
                                +91 8800-7291-91
                            </li>
                            <li>
                                <span className="text-uppercase">Address</span>
                                Mohan Ventures, Suraj Kund Road <br />
                                    Sports Market, Meerut  <br />
                                        Uttarpradesh, India 250001
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Section3;