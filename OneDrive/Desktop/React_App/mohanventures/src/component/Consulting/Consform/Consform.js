import React from 'react';
import './consform.css';

function Consform() {
    return (

        <section className="probootstrap-section probootstrap-bg-light" data-section="contact">
            <div className="nami container">
                <div className="row">
                    <div className="col-md-6">
                        <form action="mailto:mohanzworld@gmail.com" method="POST" encType="multipart/form-data" name="EmailForm" className="probootstrap-form">
                            <h2 className="tex text-black mt0">For Consulting Purpose</h2>
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
                                <input type="submit" classNameName="btn btn-primary" value="Send Message"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Consform;