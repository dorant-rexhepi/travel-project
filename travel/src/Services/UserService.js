import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const UserService = {
    signup: (userData) => {
        return axios.post(`${API_URL}/signup`, userData);
    },
    login: (loginData) => {
        return axios.post(`${API_URL}/login`, loginData);
    },
    getUsers: () => {
        return axios.get(`${API_URL}/users`);
    },
    deleteUser: (id) => {
        return axios.delete(`${API_URL}/users/${id}`);
    }
};

export default UserService;

