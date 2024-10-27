import axios from 'axios';

const API_URL = 'http://localhost:8080/api/destinations';

export const getAllDestinations = () => {
  return axios.get(API_URL);
};

export const createDestination = (destination) => {
  return axios.post(API_URL, destination);
};
