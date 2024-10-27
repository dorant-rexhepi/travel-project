import React, { useState } from "react";
import axios from 'axios';
import './reservationform.css';
import { useNavigate } from 'react-router-dom';

const ReservationForm = () => {
    const [reservation, setReservation] = useState({
        name: '',
        email: '',
        destination: '',
        date: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setReservation({ ...reservation, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/reservations', reservation);
            alert('Reservation successful!');
            navigate('/reservationlist');
        } catch (error) {
            console.error('There was an error making the reservation!', error);
            alert('There was an error with the reservation. Please try again.');
        }
    };

    return (
        <div className="reservationForm">
            <h2>Reserve Your Trip</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
                <input type="text" name="destination" placeholder="Destination" onChange={handleChange} required />
                <input type="date" name="date" onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReservationForm;
