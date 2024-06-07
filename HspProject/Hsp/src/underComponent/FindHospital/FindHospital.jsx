import React from 'react';

const hospitals = [
  {
    name: "Hospital in Ahmedabad",
    location: "Address in Ahmedabad",
    phone: "1234567890",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Hospital in Bangalore",
    location: "Address in Bangalore",
    phone: "0987654321",
    image: "https://via.placeholder.com/150"
  },
  // Add more hospital objects here
];

const FindDoctor = () => {
  return (
    <div>
      <header className="bg-blue-600 p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl">Hospital Directory</h1>
        </div>
      </header>
      <div className="container mx-auto py-4">
        <h2 className="text-2xl font-bold my-4">Hospitals in India</h2>
        <div className="flex flex-wrap">
          {hospitals.map((hospital, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img className="w-full" src={hospital.image} alt={hospital.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{hospital.name}</div>
                <p className="text-gray-700 text-base">{hospital.location}</p>
                <p className="text-gray-700 text-base">Phone: {hospital.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
