import React from 'react';
import './conssection1.css';
import consult from './consult.png';

function Conssection1() {
    return (
        // Section Part
        <section>
            <div className="main container">
                <img src={consult} className="img-fluid" alt="consulting service"></img>
                <div class="card text-white bg-secondary mb-3">
                    <div className="cari card-body">
                        <h2 className="card-title">Consulting Services</h2>
                        <p className="card-text">With a well-established Sales & Distribution channel in North India, Mohan Ventures <br/>
                        optimizes partners’ or clients’ Time-to-Market and Revenue growth, building a strong brand <br/>
                        portfolio in the process. We have a portfolio of global as well as domestic products<br/>
                        ranging from anti-corrosion coating solutions to sports and fitness goods. </p>
                    </div>
                </div>
                <hr />
            </div>

        </section>
    )
}

export default Conssection1;