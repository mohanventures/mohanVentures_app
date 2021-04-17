import React from 'react';
import './eduheader.css';

function Eduserve() {
    return (
        <nav class="navbar navbar-expand-md name">
            <a href="index.html" class="navbar-brand container">EduServe</a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse fame" id="navbarCollapse" >
                <div class="navbar-nav ml-auto">
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">GMAT</a></li>
                        <li><a class="dropdown-item" href="#">PTE</a></li>
                        <li><a class="dropdown-item" href="#">IELTS</a></li>
                        <li><a class="dropdown-item" href="#">CAT</a></li>
                        <li><a class="dropdown-item" href="#">NAATI</a></li>
                    </ul>
                    <a href="index.html" class="nav-item nav-link">About</a>
                    <a href="index.html" class="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    )
}
export default Eduserve;