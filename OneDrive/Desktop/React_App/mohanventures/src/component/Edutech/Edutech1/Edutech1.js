import React from 'react';
import './edutech1.css';
import edtech from './edtech.png';

function Edutech1() {
    return (
        // Section Part
        <section>
            <div className="main container">
            <img src={edtech} className="img-fluid" alt="consulting service"></img>
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="true" to="#">ACTIVE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="#">LIVE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">RESOURCES</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special Prepare Courses</h5>
                        <p className="card-text">For better content <em>Click below to Enroll !!</em></p>
                        <a to="#" className="btn btn-primary namibtn">ENROLL !!</a>
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