import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css';
import { MdOutlineTravelExplore, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'; // Import ikonat për modalitetet
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { RiAccountCircleFill } from "react-icons/ri";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
    const [active, setActive] = useState('navBar');
    const navigate = useNavigate();

    const showNav = () => {
        setActive('navBar activeNavbar');
    };

    const removeNavbar = () => {
        setActive('navBar');
    };

    const handleAccountClick = () => {
        navigate('/login');
    };

    return (
        <section className='navBarSection'>
            <header className="header flex">
                <div className="logoDiv">
                    <Link to="/" className="logo flex">
                        <h1><MdOutlineTravelExplore className="icon" /> Travel.</h1>
                    </Link>
                </div>

                <div className={`navBar ${active}`}>
                    <ul className="navLists grid">
                        <li className="navItem">
                            <Link to="/" className="navLink">Home</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/packages" className="navLink">Packages</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/shop" className="navLink">Shop</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/about" className="navLink">About</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/pages" className="navLink">Pages</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/news" className="navLink">News</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/contact" className="navLink">Contact</Link>
                        </li>
                    </ul>

                    <Link to="/reservation" className="btn"> BOOK NOW! </Link>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>

                <div className="auth-buttons">
                    <button className="btn auth-btn" onClick={handleAccountClick} title="Account">
                        <RiAccountCircleFill className="icon" />
                    </button>
                </div>

                {/* Butoni për Dark dhe Light Mode */}
                <div className="toggle-dark-mode">
                    <button onClick={toggleDarkMode} className="btn">
                        {isDarkMode ? <MdOutlineLightMode className="icon" /> : <MdOutlineDarkMode className="icon" />}
                    </button>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
};

export default Navbar;