import React from 'react';
import { NavLink } from 'react-router-dom';
import './section1.css';

function Section1() {
  return (

    <section className="probootstrap-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="probootstrap-service-item probootstrap-animate" data-animate-effect="fadeIn">
              <span className="icon icon-phone3"></span>
              <h2><NavLink to='/business'>Business Development</NavLink></h2>
              <p>We have a portfolio of global as well as domestic products ranging from anti-corrosion coating solutions to sports and fitness goods.</p>
              <p><NavLink to='/business' className="probootstrap-link">Learn More <i className="icon-chevron-right"></i></NavLink></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="probootstrap-service-item probootstrap-animate" data-animate-effect="fadeIn">
              <span className="icon icon-wallet2"></span>
              <h2><NavLink to="/consulting">Consulting Services</NavLink></h2>
              <p>We have managed digital products ranging from Banking to Media OTT with more than 200 Million Monthly Active Users.</p>
              <p><NavLink to='/consulting' className="probootstrap-link">Learn More <i className="icon-chevron-right"></i></NavLink></p>
            </div>
          </div>
          <div className="col-md-4">
            <div class="probootstrap-service-item probootstrap-animate" data-animate-effect="fadeIn">
              <span className="icon icon-lightbulb"></span>
              <h2><NavLink to="/education">Educational Services</NavLink></h2>
              <p>Come on-board and sail with us! With phenomenal scores and personalized programs in test preparation, we offer training.</p>
              <p><NavLink to='/education' className="probootstrap-link">Learn More <i className="icon-chevron-right"></i></NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section1