import React, {useEffect} from "react";
import './footer.css'
import video2 from '../../Assets/video (2).mp4'
import { FiChevronRight } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";


import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div data-aos="fade-up" className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
                        <button data-aos="fade-up" className='btn flex' type='submit'>
                            <FiSend className='icon'/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                                <MdOutlineTravelExplore className="icon"/>Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">

                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <a href="https://x.com/?lang=en"><FaXTwitter className="icon"/></a>
                            <a href="https://www.youtube.com/"><FaYoutube className="icon"/></a>
                            <a href="https://www.instagram.com/"><FaInstagram className="icon"/></a>
                            <a href="https://www.facebook.com/"><FaFacebook className="icon"/></a>
                            
                        </div>
                    </div>

                    <div className="footerLinks flex">
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">OUR AGENCY</span>
                            <ul>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Services
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Insurance
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Agency
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Tourism
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Payment
                                </li>
                            </ul>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">PARTNERS</span>
                            <ul>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Bookings
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Rentcars
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    HostelWorld
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Trivago
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    TripAd
                                </li>
                            </ul>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">LAST MINUTE</span>
                            <ul>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    London
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    California
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Indonesia
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Europe
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Oceania
                                </li>
                            </ul>
                        </div>
                    </div>

                    
                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED - DORANT 2024</small>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer