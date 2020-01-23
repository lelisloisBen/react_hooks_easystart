import React from 'react';
import { Link } from 'react-router-dom';

const MyNavBar = () => {
   
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/">Home </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/">Features </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/">Pricing </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default MyNavBar;