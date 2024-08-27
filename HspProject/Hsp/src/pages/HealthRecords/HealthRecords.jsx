import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HealthRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/v1/patient/me');
        setRecords(response.data.records);
      } catch (error) {
        console.error('Error fetching health records:', error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Health Records</h2>
      {records.length > 0 ? (
        <ul>
          {records.map((record) => (
            <li key={record.id} className="border p-4 mb-2">
              <p><strong>Date:</strong> {record.date}</p>
              <p><strong>Doctor:</strong> {record.doctor}</p>
              <p><strong>Notes:</strong> {record.notes}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No health records found.</p>
      )}
    </div>
  );
};

export default HealthRecords;
