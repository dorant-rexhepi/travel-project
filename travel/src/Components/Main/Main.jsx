import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Importo Link për ridrejtim
import './main.css'

import { HiOutlineClipboardCheck } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'
import img10 from '../../Assets/img (10).jpg'
import img11 from '../../Assets/img (11).jpg'
import img12 from '../../Assets/img (12).jpg'
import img13 from '../../Assets/img (13).jpg'
import img14 from '../../Assets/img (14).jpg'

import Aos from 'aos';
import 'aos/dist/aos.css'

export const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Eifel Tower',
        location: 'Paris',
        grade: 'Cultural Icon',
        fees: '$45',
        description: 'A symbol of France and one of the most famous landmarks in the world, offering stunning views of Paris.'
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Louvre Museum',
        location: 'Paris',
        grade: 'Cultural Masterpiece',
        fees: '$12',
        description: 'The world’s largest art museum and a historic monument, home to the famous Mona Lisa and many other masterpieces.'
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Arc de Triomphe',
        location: 'Paris',
        grade: 'Historical Landmark',
        fees: '$13',
        description: 'A monumental arch honoring those who fought and died for France, offering panoramic views from the top.'
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Old Port of Marseille',
        location: 'Marseille',
        grade: 'Scenic Harbor',
        fees: 'FREE',
        description: 'A historic port that has been the heart of Marseille for centuries, now a vibrant area filled with cafes and seafood restaurants.'
    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Palais Longchamp',
        location: 'Marseille',
        grade: 'Architectural Wonder',
        fees: '$6',
        description: 'A grand palace in Marseille, home to a museum of fine arts and surrounded by lush gardens.'
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Brandenburg Gate',
        location: 'Berlin',
        grade: 'Cultural Icon',
        fees: 'FREE',
        description: 'An iconic symbol of Berlin and German unity, a must-visit historical site with deep significance.'
    },

    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Reichstag Building',
        location: 'Berlin',
        grade: 'Political Landmark',
        fees: 'FREE',
        description: 'The seat of the German parliament, renowned for its striking glass dome that offers views of the city.'
    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Speicherstadt',
        location: 'Hamburg',
        grade: 'UNESCO World Heritage',
        fees: 'FREE',
        description: 'The largest warehouse district in the world, filled with beautiful red-brick buildings and canals, a UNESCO World Heritage Site.'
    },

    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Elbphilharmonie Hamburg',
        location: 'Hamburg',
        grade: 'Modern Icon',
        fees: 'FREE',
        description: 'A modern architectural masterpiece and one of the largest concert halls in the world, offering stunning views of Hamburg.'
    },

    {
        id: 10,
        imgSrc: img10,
        destTitle: 'Venice Bridge of Sighs',
        location: 'Venice',
        grade: 'Romantic Landmark',
        fees: 'FREE',
        description: 'A famous bridge in Venice, known for its romantic views, connecting the Doge’s Palace to the prison.'
    },

    {
        id: 11,
        imgSrc: img11,
        destTitle: 'Colosseum',
        location: 'Rome',
        grade: 'Ancient Wonder',
        fees: '$20',
        description: 'An ancient amphitheater, the largest ever built, where gladiators once fought. A testament to Roman engineering.'
    },

    {
        id: 12,
        imgSrc: img12,
        destTitle: 'Leaning Tower of Pisa',
        location: 'Pisa',
        grade: 'Architectural Marvel',
        fees: '$20',
        description: 'The famous leaning bell tower of Pisa, known worldwide for its unintended tilt and architectural uniqueness.'
    },

    {
        id: 13,
        imgSrc: img13,
        destTitle: 'Lake Como',
        location: 'Como',
        grade: 'Natural Beauty',
        fees: 'FREE',
        description: 'A stunning lake in Northern Italy surrounded by beautiful mountains and charming villages, a favorite among celebrities.'
    },

    {
        id: 14,
        imgSrc: img14,
        destTitle: 'Trevi Fountain',
        location: 'Rome',
        grade: 'Cultural Icon',
        fees: 'FREE',
        description: 'One of the most famous fountains in the world, known for its beauty and the tradition of throwing coins for good luck.'
    },
];

const Main = ({ searchQuery = "" }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    // Filtrimi i destinacioneve në bazë të kërkimit
    const filteredDestinations = Data.filter(({ destTitle, location }) => {
        return (
            destTitle.toLowerCase().includes(searchQuery.toLowerCase()) || 
            location.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    {searchQuery ? "Filtered Destinations" : "Most visited destinations"}
                </h3>
            </div>

            {/* Nëse ka rezultate nga kërkimi */}
            {filteredDestinations.length > 0 ? (
                <div className="secContent grid">
                    {filteredDestinations.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => (
                        <div key={id} data-aos="fade-up" className="singleDestination">
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                            </div>
                            <div className="cardInfo">
                                <h4 className="destTitle">{destTitle}</h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className="icon" />
                                    <span className="name">{location}</span>
                                </span>

                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                {/* Shto butonin "Details" që ridrejton te faqja e detajeve për destinacionin përkatës */}
                                <Link to={`/details/${id}`} className="btn flex">
                                    DETAILS <HiOutlineClipboardCheck className="icon" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // Nëse nuk ka rezultate, vetëm mesazhi për "No destinations found"
                <h2>No destinations found.</h2>
            )}
        </section>
    );
};

export default Main;