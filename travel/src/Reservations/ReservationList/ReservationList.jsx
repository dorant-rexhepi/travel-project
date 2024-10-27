import React, { useState, useEffect } from "react";
import ReservationService from '../../Services/ReservationService';
import './reservationlist.css';

const ReservationList = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        ReservationService.getAllReservations().then((response) => {
            setReservations(response.data);
        }).catch((error) => {
            console.error("There was an error fetching the reservations!", error);
        });
    }, []);

    const deleteReservation = (id) => {
        ReservationService.deleteReservation(id)
            .then(() => {
                setReservations(reservations.filter(reservation => reservation.id !== id));
                alert('Reservation deleted successfully!');
            })
            .catch((error) => {
                console.error("There was an error deleting the reservation!", error);
                alert('There was an error deleting the reservation. Please try again.');
            });
    };

    return (
        <div className="reservation-list">
            <h2>Reservation List</h2>
            <ul>
                {reservations.map((reservation) => (
                    <li key={reservation.id}>
                        {reservation.name} - {reservation.destination} on {reservation.date}
                        <button className="delete-button" onClick={() => deleteReservation(reservation.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );    
};

export default ReservationList;