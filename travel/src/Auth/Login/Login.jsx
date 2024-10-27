import React, { useState } from "react";
import UserService from "../../Services/UserService";
import "./login.css";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await UserService.login(loginData);
            alert(response.data);
            navigate('/userlist');
        } catch (error) {
            console.error('There was an error logging in!', error);
            setErrorMessage(error.response?.data || 'Login failed, please try again.');
        }
    };

    return (
        <div className="login-form">
            <h2>Login to Your Account</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account?{" "}
                <Link to="/signup" className="signup-link">Sign Up</Link>
            </p>
        </div>
    );
};

export default Login;