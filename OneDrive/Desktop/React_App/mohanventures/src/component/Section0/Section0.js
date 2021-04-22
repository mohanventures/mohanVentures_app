import React from 'react';
import './section0.css';
import bussi from './bussi.jpg';
import consu from './consu.png';
import edu from './edu.jpg';

function Section0() {
  return (

    <section>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-60" src={bussi} alt="First slide"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-20" src={consu} alt="Second slide"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-50" src={edu} alt="Third slide"></img>
          </div>
        </div>
        <a className="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}
export default Section0;


{/* <img src={bussi} classNameName="d-block w-100" alt="Business Development"></img> */ }
{/* <img src={consu} clasNameclassNameName="d-block w-100" alt="Consulting Service"></img> */ }
{/* <img src={edu} classNameName="d-block w-100" alt="Eductaional Services"></img> */ }