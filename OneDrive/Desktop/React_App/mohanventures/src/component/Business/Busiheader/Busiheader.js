import React from 'react';
import './busiheader.css';

function Busiheader() {
    return (
        <nav class="navbar navbar-expand-md name">
            <a href="index.html" class="navbar-brand container">BusinNetwork</a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse fame" id="navbarCollapse" >
                <div class="navbar-nav ml-auto">
                    <a href="index.html" class="nav-item nav-link">Products</a>
                    <a href="index.html" class="nav-item nav-link">Service</a>
                    <a href="index.html" class="nav-item nav-link">Information</a>
                    <a href="index.html" class="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Busiheader;