import React, { useState, useEffect } from "react";
import './app.css';
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import DestinationForm from "./Destinations/DestinationForm";
import DestinationList from "./Destinations/DestinationList";
import ReservationForm from './Reservations/ReservationForm/ReservationForm';
import ReservationList from './Reservations/ReservationList/ReservationList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Auth/Login/Login";
import Signup from "./Auth/Signup/Signup";
import UserList from "./Auth/UserList/UserList";
import Details from "./Components/Details/Details";

// Këtu do të shtosh komponentët e rinj për faqe të ndryshme
import Packages from './Components/Packages/Packages';
import Shop from './Components/Shop/Shop';
import About from './Components/About/About';
import Pages from './Components/Pages/Pages';
import News from './Components/News/News';
import Contact from './Components/Contact/Contact';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <Router>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<>
          <Home />
          <Footer />
        </>} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<ReservationForm />} />
        <Route path="/reservationlist" element={<ReservationList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;