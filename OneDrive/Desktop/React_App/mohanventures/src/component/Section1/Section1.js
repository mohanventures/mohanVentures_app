import React from 'react';
import './section1.css';

function Section1() {
  return (

    <section className="probootstrap-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="probootstrap-service-item probootstrap-animate" data-animate-effect="fadeIn">
              <span className="icon icon-phone3"></span>
              <h2><a href='index.html'>Business Development</a></h2>
              <p>We generally provide the better business development ideas for the logistics and distributions</p>
              <p><a href="index.html" className="probootstrap-link">Learn More <i className="icon-chevron-right"></i></a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="probootstrap-service-item probootstrap-animate" data-animate-effect="fadeIn">
              <span className="icon icon-wallet2"></span>
              <h2><a href="index.html">Consulting Services</a></h2>
              <p>This describe how to be know about consulting service agreement</p>
              <p><a href="index.html" className="probootstrap-link">Learn More <i className="icon-chevron-right"></i></a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div class="probootstrap-service-item probootstrap-animate" data-animate-effect="fadeIn">
              <span className="icon icon-lightbulb"></span>
              <h2><a href="index.html">Educational Services</a></h2>
              <p>Even all the powerful educated course related with globally set exam and crack easily by using all principles</p>
              <p><a href="index.html" className="probootstrap-link">Learn More <i className="icon-chevron-right"></i></a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section1