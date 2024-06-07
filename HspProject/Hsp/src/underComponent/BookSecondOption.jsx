// src/components/App.jsx
import React, { useState } from 'react';
import CitySelector from './BookHealthcheckup/CitySelector';
import UnitSelector from './BookHealthcheckup/unitSelector';

const cities = [
  { name: 'Hyderabad', units: ['JhaJee Spectra', 'Apollo Clinic Hyderabad'] },
  { name: 'Delhi', units: ['JhaJee Hospitals Karol Bagh', 'Apollo Clinic Delhi'] },
  { name: 'Mumbai', units: ['JhaJee Spectra Mumbai', 'Apollo Clinic Mumbai'] },
  { name: 'Bangalore', units: ['JhaJee Hospital Bangalore', 'Apollo Clinic Bangalore'] },
  { name: 'Chennai', units: ['JhaJee Hospital Chennai', 'Apollo Clinic Chennai'] },
  { name: 'Kolkata', units: ['JhaJee Hospital Kolkata', 'Apollo Clinic Kolkata'] },
  { name: 'Indore', units: ['JhaJee Hospital Indore'] },
  { name: 'Lucknow', units: ['JhaJee Hospital Lucknow'] },
  { name: 'Cochin', units: ['JhaJee Hospital Cochin'] },
  { name: 'Ahmedabad', units: ['JhaJee Hospital Ahmedabad'] },
  { name: 'Bhubaneswar', units: ['JhaJee Hospital Bhubaneswar'] }
];

const App = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');

  const handleCitySelect = (cityName) => {
    setSelectedCity(cityName);
    setSelectedUnit(''); // Reset unit selection when city changes
  };

  const selectedCityData = cities.find(city => city.name === selectedCity);

  return (
    <div className="flex min-h-screen">
      <div className="w-1/3 bg-blue-100 p-8">
        <h1 className="text-4xl font-bold mb-4">Hi!,</h1>
        <p className="text-lg mb-8">Select your city and the hospital to see the ProHealth programs.</p>
        <div className="space-y-8">
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-white font-bold mr-2">1</div>
            <span>Select Location</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-white font-bold mr-2">2</div>
            <span>Select Unit</span>
          </div>
        </div>
      </div>
      <div className="flex-1 p-8">
        <CitySelector selectedCity={selectedCity} onCitySelect={handleCitySelect} />
        {selectedCity && selectedCityData && (
          <UnitSelector
            units={selectedCityData.units}
            selectedUnit={selectedUnit}
            onUnitSelect={setSelectedUnit}
          />
        )}
      </div>
    </div>
  );
};

export default App;
