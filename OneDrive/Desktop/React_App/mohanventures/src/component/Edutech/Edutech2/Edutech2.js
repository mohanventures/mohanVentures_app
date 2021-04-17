import React from 'react';
import './edutech2.css';

function Edutech2() {
    return (
        <section>
            <div className="container conti">
                <div className="col-md-6">
                    <form action="mailto:mohanzworld@gmail.com" method="POST" encType="multipart/form-data" name="EmailForm" className="probootstrap-form">
                        <h2 className="text-black mt0 tex">Get In Touch</h2>
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
            <hr/>
        </section>
    )
}
export default Edutech2;