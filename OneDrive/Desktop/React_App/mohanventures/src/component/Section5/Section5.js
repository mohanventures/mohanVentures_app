import React from 'react';
import './section5.css';
import team from './team.jpeg';
import colt from './colt.jpeg';
import edut from './edut.jpg';

function Edutech1() {
    return (
        <section>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={team} alt="First slide"></img>
    </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={colt} alt="Second slide"></img>
    </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={edut} alt="Third slide"></img>
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
    )
}
export default Edutech1;