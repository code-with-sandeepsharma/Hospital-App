// src/components/FindDoctors.jsx
import React, { useState, useEffect } from 'react';

const cities = ['New Delhi', 'Hyderabad', 'Chennai', 'Kolkata', 'Mumbai', 'Bangalore', 'All Cities'];

const FindDoctors = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (selectedCity) {
      fetch(`http://localhost:4001/doctors/${selectedCity}`)
        .then(response => response.json())
        .then(data => setDoctors(data))
        .catch(error => console.error('Error fetching doctors:', error));
    }
  }, [selectedCity]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Find Doctors</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            {cities.map(city => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`py-2 px-4 rounded ${selectedCity === city ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {city}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search doctors"
            className="py-2 px-4 border border-gray-300 rounded"
          />
          <div className="bg-yellow-100 p-4 rounded-lg flex items-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">1</div>
            <span>Book an Appointment in 3 Simple Steps</span>
          </div>
          <button className="py-2 px-4 bg-blue-500 text-white rounded-lg mt-4">Submit</button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Doctors in {selectedCity}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {doctors.map((doctor, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-bold">{doctor.name}</h3>
              <p className="text-sm">{doctor.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindDoctors;
