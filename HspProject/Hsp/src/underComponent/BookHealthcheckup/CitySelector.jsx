// src/components/CitySelector.jsx
import React from 'react';

const cities = [
  { name: 'Hyderabad', units: ['Apollo Spectra', 'Apollo Clinic Hyderabad'] },
  { name: 'Delhi', units: ['Apollo Hospitals Karol Bagh', 'Apollo Clinic Delhi'] },
  { name: 'Mumbai', units: ['Apollo Spectra Mumbai', 'Apollo Clinic Mumbai'] },
  { name: 'Bangalore', units: ['Apollo Hospital Bangalore', 'Apollo Clinic Bangalore'] },
  { name: 'Chennai', units: ['Apollo Hospital Chennai', 'Apollo Clinic Chennai'] },
  { name: 'Kolkata', units: ['Apollo Hospital Kolkata', 'Apollo Clinic Kolkata'] },
  { name: 'Indore', units: ['Apollo Hospital Indore'] },
  { name: 'Lucknow', units: ['Apollo Hospital Lucknow'] },
  { name: 'Cochin', units: ['Apollo Hospital Cochin'] },
  { name: 'Ahmedabad', units: ['Apollo Hospital Ahmedabad'] },
  { name: 'Bhubaneswar', units: ['Apollo Hospital Bhubaneswar'] }
];

const CitySelector = ({ selectedCity, onCitySelect }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Select Your City</h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {cities.map(city => (
          <button
            key={city.name}
            className={`py-2 px-4 border rounded transition-colors ${selectedCity === city.name ? 'bg-blue-500 text-white' : 'bg-white text-gray-800 hover:bg-gray-200'}`}
            onClick={() => onCitySelect(city.name)}
          >
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CitySelector; 

