import React from 'react';
import './section5.css';
// import lapy from './lapy.jpeg';
import team from './team.jpeg';

function Edutech1() {
    return (
        // Section Part
        <section>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={team} class="d-block w-100" alt="lapy"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>For Bussiness Development</h5>
                            <p>Some representative development ideas</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Edutech1;