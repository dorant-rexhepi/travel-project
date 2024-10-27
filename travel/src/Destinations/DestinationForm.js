import React, { useState } from 'react';
import { createDestination } from '../Services/DestinationService';
const DestinationForm = () => {
  const [destination, setDestination] = useState({
    name: '',
    description: '',
    location: '',
    price: 0
  });

  const handleChange = (e) => {
    setDestination({ ...destination, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createDestination(destination).then(() => {
      alert('Destinacioni u shtua me sukses!');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Emri" onChange={handleChange} />
      <input type="text" name="description" placeholder="Përshkrimi" onChange={handleChange} />
      <input type="text" name="location" placeholder="Lokacioni" onChange={handleChange} />
      <input type="number" name="price" placeholder="Çmimi" onChange={handleChange} />
      <button type="submit">Shto Destinacion</button>
    </form>
  );
};

export default DestinationForm;
