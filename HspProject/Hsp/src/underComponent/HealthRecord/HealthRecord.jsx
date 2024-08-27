// import React, { useState, useEffect } from 'react';

// const HealthRecordList = () => {
//   const [userData, setUserData] = useState(null);
//   const [healthRecords, setHealthRecords] = useState([]);
//   const [additionalValue, setAdditionalValue] = useState('');
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setUser(parsedUser.user);
//       setIsAuthenticated(true);
//     }
//   }, []);

//   useEffect(() => {

//     fetch('http://localhost:4001/api/v1/user/admin/me', {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer `
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           setUserData(data.user);
//           setHealthRecords(data.healthRecords);
//           setAdditionalValue(data.additionalValue);
//         } else {
//           console.log('Failed to fetch health records:', data.message);
//         }
//       })
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container mx-auto">
//       {userData && (
//         <div>
//           <h2 className="text-xl font-bold mb-4">User Information</h2>
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email ? user.email : 'N/A'}</p>
//         </div>
//       )}
//       <h2 className="text-xl font-bold mb-4">Health Records</h2>
//       <ul>
//         {healthRecords?.map(record => (
//           <li key={record._id} className="border border-gray-300 rounded-md p-2 mb-2">
//             <h3 className="font-bold">{record.recordType}</h3>
//             <p>{record.description}</p>
//           </li>
//         ))}
//       </ul>
//       {additionalValue && (
//         <div>
//           <h2 className="text-xl font-bold mb-4">Additional Value</h2>
//           <p>{additionalValue}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HealthRecordList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HealthRecordList = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/v1/message/getallmessage'); // Adjust the endpoint as necessary
        setUser(response.data.user);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user details.');
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-5">User Information</h1>
      {user ? (
        <div>
          <p className="mb-2">
            <span className="font-semibold">Name:</span> {user.firstName}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>No user information available.</p>
      )}
    </div>
  );
};

export default HealthRecordList;