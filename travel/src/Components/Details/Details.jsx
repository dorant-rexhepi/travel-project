import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './details.css';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Data } from '../Main/Main';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Details = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const { id } = useParams();
    const destination = Data.find(dest => dest.id === parseInt(id));

    if (!destination) {
        return <h2>Destination not found!</h2>;
    }

    const { imgSrc, destTitle, location, grade, fees, description } = destination;

    const detailedDescriptions = {
        1: "The Eiffel Tower, standing tall at 324 meters, is not only the symbol of Paris but also one of the most visited monuments in the world. Built in 1889 for the World's Fair, the tower offers breathtaking views of Paris from its three levels. Whether you are dining at the Michelin-starred restaurant on the second floor or simply taking in the views from the top, the Eiffel Tower is an experience you will never forget. The tower sparkles every evening, adding a magical ambiance to the city of lights.",
        2: "The Louvre Museum, home to over 380,000 works of art, is the largest and most visited museum in the world. From the iconic glass pyramid entrance to the Mona Lisa's enigmatic smile, the Louvre offers a journey through thousands of years of art history. Whether you're interested in Egyptian antiquities, Renaissance masterpieces, or modern art, the Louvre is an unmissable stop for any art lover visiting Paris.",
        3: "The Arc de Triomphe is one of the most iconic monuments in Paris, standing at the western end of the Champs-Élysées. Commissioned by Napoleon after his victory at Austerlitz, the arch honors those who fought for France, particularly during the Napoleonic Wars. Visitors can climb to the top for a panoramic view of Paris and watch the eternal flame at the Tomb of the Unknown Soldier, lit every evening to commemorate fallen soldiers.",
        4: "The pristine sands of Bondi Beach are renowned worldwide for their beauty and surf culture. Located just a short distance from Sydney's city center, Bondi is perfect for sunbathing, surfing, and enjoying the laid-back Australian beach lifestyle. The beach is also home to the famous Bondi to Coogee coastal walk, offering breathtaking views of the coastline.",
        5: "The Great Wall of China, stretching over 13,000 miles, is one of the most impressive architectural feats in human history. Built over several centuries to protect Chinese states from invasions, the wall offers not only a glimpse into the past but also spectacular views of the surrounding landscapes. Whether you're walking the steep steps at Mutianyu or visiting the more rugged sections at Jinshanling, the Great Wall is a must-see for anyone visiting China.",
        6: "Santorini, with its iconic white-washed buildings and blue domes, is one of the most famous islands in Greece. Located in the Aegean Sea, this volcanic island is known for its breathtaking sunsets, crystal-clear waters, and luxury resorts. Visitors can explore ancient ruins, swim in the warm waters of the caldera, or simply relax while enjoying some of the best cuisine Greece has to offer.",
        7: "Machu Picchu, the 'Lost City of the Incas', is nestled high in the Andes Mountains of Peru. This UNESCO World Heritage site is one of the most well-preserved Inca ruins, and its history remains shrouded in mystery. Whether you arrive by the Inca Trail or take the scenic train route, Machu Picchu's stunning terraces, temples, and panoramic views make it a once-in-a-lifetime experience.",
        8: "The Colosseum in Rome, Italy, is an ancient amphitheater that once held over 50,000 spectators for gladiatorial contests, public spectacles, and dramas. As one of the greatest works of Roman engineering and architecture, the Colosseum stands as a testament to the grandeur of Ancient Rome. Visitors can explore the underground tunnels, the arena floor, and climb to the upper levels for views of the surrounding city.",
        9: "The Pyramids of Giza, including the Great Pyramid, are the last surviving wonders of the ancient world. Built over 4,500 years ago as tombs for the Pharaohs, these massive structures continue to captivate visitors with their grandeur and mystery. Whether you're visiting the Sphinx, exploring inside the pyramids, or learning about ancient Egyptian history at the nearby museums, the Giza Pyramids are a truly awe-inspiring experience.",
        10: "The Grand Canyon, carved over millions of years by the Colorado River, is one of the most spectacular natural wonders in the world. Located in Arizona, USA, the canyon is over a mile deep and offers breathtaking views, challenging hiking trails, and exhilarating river rafting experiences. Whether you're watching the sunset from the South Rim or hiking down to the Colorado River, the Grand Canyon offers something for everyone.",
        11: "Mount Fuji, the highest mountain in Japan, is an iconic symbol of the country. This active stratovolcano is a popular destination for hikers and nature lovers, offering stunning views from the summit and surrounding areas. Whether you're climbing the mountain, enjoying the peaceful lakes around its base, or viewing it from afar, Mount Fuji is an unforgettable experience for anyone visiting Japan.",
        12: "The Taj Mahal, located in Agra, India, is one of the most beautiful and recognizable buildings in the world. Built in the 17th century by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, this white marble mausoleum is a symbol of love and architectural brilliance. Visitors can explore the beautifully manicured gardens, the intricate marble work, and the reflecting pools that mirror the beauty of this UNESCO World Heritage site.",
        13: "The Maldives, an archipelago of over 1,000 coral islands, is renowned for its luxury resorts, crystal-clear waters, and stunning marine life. Whether you're diving among vibrant coral reefs, relaxing in an overwater bungalow, or enjoying a sunset cruise, the Maldives offers the ultimate tropical paradise experience. It's the perfect destination for honeymooners, adventurers, or anyone looking to escape to a world of tranquility and natural beauty.",
        14: "The Great Barrier Reef, the largest coral reef system in the world, stretches over 2,300 kilometers along the northeast coast of Australia. Home to an incredible diversity of marine life, the reef is a paradise for snorkeling, diving, and underwater exploration. Whether you're swimming with tropical fish, spotting sea turtles, or taking a scenic flight over the coral formations, the Great Barrier Reef is a breathtaking natural wonder."
    };

    return (
        <section className="details container" data-aos="fade-up">
            <div className="detailsHeader" data-aos="fade-right">
                <h1>{destTitle}</h1>
                <span className="location flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span>{location}</span>
                </span>
                <span className="fees flex">
                    <h5>Price: {fees}</h5>
                </span>
                <div className="grade">
                    <h4>Grade: {grade}</h4>
                </div>
            </div>
            
            <div className="detailsImage" data-aos="zoom-in">
                <img src={imgSrc} alt={destTitle} />
            </div>
            
            <div className="detailsDescription" data-aos="fade-left">
                <p>{description}</p>
                <p>{detailedDescriptions[destination.id] || "No additional details available."}</p>
            </div>
        </section>
    );
};

export default Details;
