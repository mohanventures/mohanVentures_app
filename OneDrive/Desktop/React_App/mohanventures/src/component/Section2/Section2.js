import React from 'react';
import './section2.css';
import akshat from './akshat.jpeg';

function Section2() {
    return (
        <section className="probootstrap-section probootstrap-bg-light" id="features" data-section="features">
            <div className="container">
                <div className="row text-center mb100">
                    <div className="col-md-8 col-md-offset-2 probootstrap-section-heading">
                        <h2 className="mb30 text-black probootstrap-heading">About</h2>
                    </div>
                </div>

                <div className="row mb100">
                    <div className="col-md-8 col-md-pull-2 probootstrap-animate">
                        <img src={akshat} className="img-fluid" alt="profile"></img>
                        </div>
                        <div className="col-md-4 col-md-pull-1 probootstrap-section-heading">
                            <h3 className="text-primary probootstrap-heading-2">Akshat Mohan Sharma</h3>
                            <p><p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p></p>
                            <ul className="probootstrap-list">
                                <li className="probootstrap-check">Pointing has no control</li>
                                <li className="probootstrap-check">A small river named Duden flows</li>
                                <li className="probootstrap-check">Roasted parts of sentences fly into your mouth</li>
                            </ul>
                        </div>
                </div>
           </div>
        </section>
    );
}
export default Section2;
