import React from 'react';
import './header.css';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <nav class="navbar navbar-expand-md name">
            <NavLink to="/" class="navbar-brand container">Mohan Ventures</NavLink>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse fame" id="navbarCollapse" >
                <div class="navbar-nav ml-auto">
                    <NavLink to="/" class="nav-item nav-link active">Home</NavLink>
                    <NavLink to="/about" class="nav-item nav-link">About</NavLink>
                    <NavLink to="/contact" class="nav-item nav-link">Contact</NavLink>
                </div>
            </div>
            <br/>
        </nav>
    );
}
export default Header;
