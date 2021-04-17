import React from 'react';
import './edutech1.css';


function Edutech1() {
    return (
        // Section Part
        <section>
            <div className="main container">
                {/* <div class="card text-white bg-secondary mb-3">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h2 className="card-title">Secondary card title</h2>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> */}
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="true" href="#">ACTIVE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">LIVE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">RESOURCES</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special Prepare Courses</h5>
                        <p className="card-text">For better content <em>Click below to Enroll !!</em></p>
                        <a href="#" className="btn btn-primary namibtn">ENROLL !!</a>
                    </div>
                </div>


                <div className="card border-light mb-3">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <h5 className="card-title">CLICK HERE TO ENROLL</h5>
                        <p className="card-text">Some quick course content.</p>
                    </div>
                </div>

                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">GMAT</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">IELTS</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">PTE</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">CAT</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">CAT</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">NAATI</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <hr/>
            </div>
                
        </section>
    )
}
export default Edutech1;