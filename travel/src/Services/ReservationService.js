import axios from 'axios';

const RESERVATION_API_BASE_URL = "http://localhost:8080/api/reservations";

class ReservationService {
    createReservation(reservation) {
        return axios.post(RESERVATION_API_BASE_URL, reservation);
    }

    getAllReservations() {
        return axios.get(RESERVATION_API_BASE_URL);
    }

    deleteReservation(id) {
        return axios.delete(`${RESERVATION_API_BASE_URL}/${id}`);
    }
}

export default new ReservationService();
