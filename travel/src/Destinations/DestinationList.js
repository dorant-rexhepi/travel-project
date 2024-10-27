import React, { useEffect, useState } from 'react';
import { getAllDestinations } from '../Services/DestinationService';

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getAllDestinations().then(response => {
      setDestinations(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Destinacionet</h2>
      <ul>
        {destinations.map(dest => (
          <li key={dest.id}>{dest.name} - {dest.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationList;
