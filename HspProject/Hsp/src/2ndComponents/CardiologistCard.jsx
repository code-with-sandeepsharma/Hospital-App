import React from 'react';
import { FaMapMarkerAlt, FaBriefcaseMedical, FaCalendarAlt, FaRupeeSign } from 'react-icons/fa';
import Navbar from '../component/navbar/Navbar';

const doctors = [
  {
    name: 'Dr. K.K.Sethi',
    specialization: 'Heart_Care',
    experience: '30 years',
    location: 'Sarita Vihar, Delhi',
    fee: '₹1500',
    image: 'https://assets.lybrate.com/f_auto,c_limit,w_1920,q_auto/img/documents/doctor/dp/d3c9c03e51c6de784476cb6aeac48536/Cardiology-KKSethi-Delhi-d812f7'
  },
  {
    name: 'Dr. Vinay Sanghi',
    specialization: 'Heart_Care',
    experience: '35 years',
    location: 'Pusa Road, Delhi',
    fee: '₹2000',
    image: 'https://assets.lybrate.com/f_auto,c_limit,w_1920,q_auto/img/documents/doctor/dp/acd91ea7456f9c8962319ffba8639de5/Cardiology-VinaySanghi-Pitampura-cf0211.jpg'
  },
  {
    name: 'Dr. Devendra Kumar Agrawal',
    specialization: 'Heart_Care',
    experience: '20 years',
    location: 'Rohini, Delhi',
    fee: '₹1800',
    image: 'https://assets.lybrate.com/f_auto,c_limit,w_1920,q_auto/img/documents/doctor/dp/84e3ab76f8f4193786fb7a86ff1e6a40/Cardiology-DevendraKumarAgrawal-Delhi-b92d5b'
  },
  {
    name: 'Dr. Vishal Rastogi',
    specialization: 'Heart_Care',
    experience: '25 years',
    location: 'Dwarka, Delhi',
    fee: '₹1700',
    image: 'https://assets.lybrate.com/f_auto,c_limit,w_1920,q_auto/img/documents/doctor/dp/6460fd00f0740df40ff8106f16d381f1/Cardiology-VishalRastogi-Delhi-62150c.jpg'
  },
  {
    name: 'Dr. Rajiv Bajaj',
    specialization: 'Heart_Care',
    experience: '22 years',
    location: 'Vasant Kunj, Delhi',
    fee: '₹1600',
    image: 'https://assets.lybrate.com/f_auto,c_limit,w_1920,q_auto/img/documents/doctor/dp/00fb61ee1a6dfcb6e7d6977c13af3e40/Cardiology-RajivBajaj-Delhi-3e669a'
  },
  // Add more doctor objects here
];

const DoctorCard = ({ doctor }) => (
  <div className="max-w-xs rounded-lg overflow-hidden shadow-lg m-4 border border-gray-200 bg-white transform transition duration-500 hover:scale-105 hover:shadow-xl">
    <img className="w-full h-32 object-cover rounded-t-lg" src={doctor.image} alt={doctor.name} />
    <div className="p-4">
      <div className="font-bold text-xl text-blue-600 mb-2">{doctor.name}</div>
      <div className="text-gray-800 text-sm mb-2 flex items-center">
        <FaBriefcaseMedical className="mr-2 text-blue-500" />
        <span className="font-semibold">Specialization:</span> {doctor.specialization}
      </div>
      <div className="text-gray-800 text-sm mb-2 flex items-center">
        <FaCalendarAlt className="mr-2 text-blue-500" />
        <span className="font-semibold">Experience:</span> {doctor.experience}
      </div>
      <div className="text-gray-800 text-sm mb-2 flex items-center">
        <FaMapMarkerAlt className="mr-2 text-blue-500" />
        <span className="font-semibold">Location:</span> {doctor.location}
      </div>
      <div className="text-gray-800 text-sm mb-4 flex items-center">
        <FaRupeeSign className="mr-2 text-blue-500" />
        <span className="font-semibold">Fee:</span> {doctor.fee}
      </div>
      <button onClick="/appointmentmessage" className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition duration-300 ">
        Book an Appointment
      </button>
    </div>
  </div>
);

const FAQSection = () => (
  <div className="bg-white p-4 rounded-lg shadow-md my-8">
    <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
    <div className="mb-4">
      <h3 className="text-xl font-semibold">What types of conditions do Heart_Care treat?</h3>
      <p>Heart_Care treat conditions such as fractures, joint dislocations, arthritis, ligament injuries, and more.</p>
    </div>
    <div className="mb-4">
      <h3 className="text-xl font-semibold">When should I see an Heart_Care?</h3>
      <p>You should see an Heart_Care if you experience severe pain in your bones or joints, have sustained an injury, or have chronic Heart_Care conditions.</p>
    </div>
    {/* Add more FAQs here */}
  </div>
);

const CardiologistCard= () => (
  <div className="bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen p-4">
    <Navbar/>
    <header className="text-center my-6">
      <h1 className="text-4xl font-bold text-blue-900">Best Heart Care in Delhi</h1>
    </header>
    <div className="flex flex-wrap justify-center">
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
    </div>
    <FAQSection />
  </div>
);

export default CardiologistCard;