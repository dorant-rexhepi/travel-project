import React, { useState } from "react";
import UserService from "../../Services/UserService";
import '../Signup/signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (signupData.password !== signupData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            await UserService.signup(signupData);
            alert('Signup successful!');
            navigate('/login');
        } catch (error) {
            console.error('There was an error signing up!', error);
            alert('Signup failed, please try again.');
        }
    };

    return (
        <div className="signup-form">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account?{" "}
                <a href="/login" className="login-link">Login</a>
            </p>
        </div>
    );
};

export default Signup;
