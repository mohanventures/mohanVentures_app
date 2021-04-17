import React from 'react';
import './header.css';

function Header() {
    return (
        // <nav className="navbar navbar-default probootstrap-navbar">
        //     <div className="container">
        //         <div className="navbar-header">
        //             <a className="navbar-brand" href="index.html" title="MohanVentures">Mohan Ventures</a>
        //         </div>

        //         <div id="navbar-collapse" className="navbar-collapse collapse">
        //             <ul className="nav navbar-nav navbar-right">
        //                 <a href="index.html" data-nav-section="home">Home</a>
        //                 <a href="index.html" data-nav-section="features">Features</a>
        //                 <a href="index.html" data-nav-section="pricing">Services</a>
        //                 <a href="index.html" data-nav-section="reviews">Products</a>
        //                 <a href="index.html" data-nav-section="contact">Contact</a>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <nav class="navbar navbar-expand-md name">
            <a href="index.html" class="navbar-brand container">Mohan Ventures</a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse fame" id="navbarCollapse" >
                <div class="navbar-nav ml-auto">
                    <a href="index.html" class="nav-item nav-link active">Home</a>
                    <a href="index.html" class="nav-item nav-link">About</a>
                    <a href="index.html" class="nav-item nav-link">Contact</a>
                </div>
            </div>
            <br/>
        </nav>
    );
}
export default Header;

// for right side of navbar{
//     justify-content-between
// }
// navbar-dark bg-dark sticky-top

{/* <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button> */}