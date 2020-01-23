import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const SharesensationNavbar = () => {
    
    let tokenAuth = localStorage.getItem('token');
    let firstname = localStorage.getItem('firstname');
    let lastname = localStorage.getItem('lastname');
    let avatar = localStorage.getItem('avatar');
   
    return (
        <>
        <nav className={["navbar fixed-top navbar-expand-lg navbar-light", styles.navBarShare].join(' ')}>
            <div className="container-fluid">
                <div className="dropdown">
                    <button className={["btn dropdown-toggle", styles.helpMenu].join(' ')} type="button" id="helpDropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        HELP
                    </button>
                    <div className="dropdown-menu" aria-labelledby="helpDropDown">
                        <Link to="/" className="dropdown-item">Home</Link>
                        <Link to="/how-it-works" className="dropdown-item">How It Works</Link>
                        <Link to="/contact-us" className="dropdown-item">Contact Us</Link>
                        <Link to="/aboutus" className="dropdown-item">About Us</Link>
                        <Link to="/" className="dropdown-item">Forum</Link>
                        <Link to="/" className="dropdown-item">Languages</Link>
                    </div>
                </div>

                <div className={["dropdown nav",styles.mobile].join(' ')}>
                    <button className="btn" type="button" id="categoies" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-th fa-2x"></i>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="categoies">
                        <Link to="/" className="dropdown-item">HOME</Link>
                        <Link to="/activities/motor" className="dropdown-item">MOTOR</Link>
                        <Link to="/activities/water" className="dropdown-item">WATER</Link>
                        <Link to="/activities/air" className="dropdown-item">AIR</Link>
                        <Link to="/activities/wheel" className="dropdown-item">WHEEL</Link>
                        <Link to="/activities/shooting" className="dropdown-item">SHOOTING</Link>
                        <Link to="/activities/animal" className="dropdown-item">ANIMAL</Link>
                        <Link to="/activities/mountain" className="dropdown-item">MOUNTAIN</Link>
                        <Link to="/activities/indoor" className="dropdown-item">INDOOR</Link>
                        <Link to="/activities/outdoor" className="dropdown-item">OUTDOOR</Link>
                        <Link to="/activities/ticket" className="dropdown-item">TICKET</Link>
                        <Link to="/activities/vip" className="dropdown-item">VIP</Link>
                    </div>
                </div>
                
                <ul className={["nav", styles.navbarCenter, styles.desktop].join(' ')}>
                    <li className={styles.homeLink}><Link to="/">HOME</Link></li>
                    <li><Link to="/activities/motor">MOTOR</Link></li>
                    <li><Link to="/activities/water">WATER</Link></li>
                    <li><Link to="/activities/air">AIR</Link></li>
                    <li><Link to="/activities/wheel">WHEEL</Link></li>
                    <li><Link to="/activities/shooting">SHOOTING</Link></li>
                    <li><Link to="/activities/animal">ANIMAL</Link></li>
                    <li><Link to="/activities/mountain">MOUNTAIN</Link></li>
                    <li><Link to="/activities/indoor">INDOOR</Link></li>
                    <li><Link to="/activities/outdoor">OUTDOOR</Link></li>
                    <li><Link to="/activities/ticket">TICKET</Link></li>
                    <li><Link to="/activities/vip">VIP</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    {!tokenAuth ?
                        <li>
                            <Link to="/login" className={styles.btn}> 
                                Login
                            </Link>
                            <Link to="/register" className={styles.btn}> 
                                Register
                            </Link>
                        </li>
                    : 
                        <li>
                            <div className="btn-group">
                                <button className={["dropdown-toggle", styles.dropBtn].join(' ')} id="userDrop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className={styles.imgCircle} src={process.env.PUBLIC_URL + '/img/avatar/' + avatar} alt="avatar" /> 
                                    <span className="mobileNone">&nbsp;{firstname} {lastname}</span> 
                                </button>
                                <div className="dropdown-menu" aria-labelledby="userDrop">
                                    <Link className="dropdown-item" to="/" >Home</Link>
                                    <Link className="dropdown-item" to="/list-your-activity" >List Your Activity</Link>
                                    <Link className="dropdown-item" to="/" >My Activities</Link>
                                    <Link className="dropdown-item" to="/profile" >Profile</Link>
                                    <button 
                                        className="dropdown-item" 
                                        onClick={async () => {
                                            localStorage.clear();
                                            window.location.href = "/";
                                        }}
                                    >
                                        LogOut
                                    </button>
                                </div>
                            </div>
                        </li>
                    }
                </ul>
            </div>
        </nav>
        </>
    );
};

export default SharesensationNavbar;