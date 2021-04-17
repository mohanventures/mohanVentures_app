import React from 'react';

function Carousel() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="./bridge.jpg" alt="First slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="./Pillar.jpg" alt="Second slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="./secondBridge.jpg" alt="Third slide"></img>
                </div>
            </div>
        </div>

    )
}
export default Carousel;