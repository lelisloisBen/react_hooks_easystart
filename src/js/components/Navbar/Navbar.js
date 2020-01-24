import React from 'react';
import { Link } from 'react-router-dom';

const MyNavBar = () => {
   
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">React Hooks Easy-Start by Samir</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/"> <button className="btn btn-primary m-1" >Home</button>  </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/demo"><button className="btn btn-primary m-1" >Demo</button></Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default MyNavBar;