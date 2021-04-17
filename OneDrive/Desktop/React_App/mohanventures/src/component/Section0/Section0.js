import React from 'react';
import './section0.css';
import bussi from './bussi.jpg';
import consu from './consu.png';
import edu from './edu.jpg';

function Section0() {
  return (

    <section>
      <br/>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div clasNameclassNames="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={bussi} className="img-fluid" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Business Development</h5>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={consu} className="img-fluid" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Consulting Services</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={edu} className="img-fluid" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Educational Services</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <br />
    </section>
  );
}
export default Section0;


{/* <img src={bussi} className="d-block w-100" alt="Business Development"></img> */ }
{/* <img src={consu} clasNameclassName="d-block w-100" alt="Consulting Service"></img> */ }
{/* <img src={edu} className="d-block w-100" alt="Eductaional Services"></img> */ }