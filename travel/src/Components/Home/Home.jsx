import React, { useState, useEffect } from "react";
import './home.css';
import video from '../../Assets/video.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import Main component to pass the search query
import Main from '../Main/Main';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [price, setPrice] = useState(20); // Default price for range

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    return (
        <>
            <section className="home">
                <div className="overlay"></div>
                <video src={video} muted autoPlay loop type="video/mp4" />

                <div className="homeContent container">
                    <div className="textDiv">
                        <span data-aos="fade-up" className="smallText">
                            Our Packages
                        </span>

                        <h1 data-aos="fade-up" className="homeTitle">
                            Search your Holiday
                        </h1>
                    </div>

                    <div data-aos="fade-up" className="cardDiv">
                        <div className="destinationInput">
                            <label htmlFor="city">Search your Destination:</label>
                            <div className="input flex">
                                <input
                                    type="text"
                                    id="city"
                                    placeholder='Enter name here...'
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                                <GrLocation className="icon" aria-label="Location Icon" />
                            </div>
                        </div>

                        <div className="dateInput">
                            <label htmlFor="date">Select your date:</label>
                            <div className="input flex">
                                <input type="date" id="date" />
                            </div>
                        </div>

                        <div className="priceInput">
                            <div className="label_total_flex">
                                <label htmlFor="price">Max price:</label>
                                <h3 className="total" style={{ color: 'black' }}>${price}</h3>
                            </div>
                            <div className="input flex">
                                <input 
                                    type="range" 
                                    id="price" 
                                    max="1000" 
                                    min="20" 
                                    value={price} 
                                    onChange={handlePriceChange} 
                                />
                            </div>
                        </div>

                        <div className="searchOptions flex">
                            <HiFilter className="icon" aria-label="Filter Icon" />
                            <span>MORE FILTERS</span>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="homeFooterIcons flex">
                        <div className="rightIcons">
                            <FiFacebook className="icon" aria-label="Facebook Icon" />
                            <AiOutlineInstagram className="icon" aria-label="Instagram Icon" />
                            <SiTripadvisor className="icon" aria-label="Tripadvisor Icon" />
                        </div>

                        <div className="leftIcons">
                            <BsListTask className="icon" aria-label="Tasks Icon" />
                            <TbApps className="icon" aria-label="Apps Icon" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pass searchQuery to Main component */}
            <Main searchQuery={searchQuery} />
        </>
    );
};

export default Home;