import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users'; // Pika bazë për API

// Funksioni për login
export const login = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, loginData);
        return response.data;
    } catch (error) {
        throw new Error('Login failed. Please check your credentials.');
    }
};

// Funksioni për signup
export const signup = async (signupData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, {
            fullname: signupData.fullname,
            username: signupData.username,
            password: signupData.password
        });
        return response.data;
    } catch (error) {
        throw new Error('Signup failed. Please try again.');
    }
};
