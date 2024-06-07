import React, { useState } from 'react';
import axios from 'axios';

const AddMedicine = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create form data object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('image', image); // Append image file
    
    try {
      // Post data to server
      await axios.post('http://localhost:4001/api/v1/medicines', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      // Clear form fields
      setName('');
      setDescription('');
      setPrice('');
      setStock('');
      setImage(null);
    } catch (error) {
      console.error('Error adding medicine:', error);
    }
  };

  return (
    <div>
      <h1>Add Medicine</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])} // Handle file upload
        />
        <button type="submit">Add Medicine</button>
      </form>
    </div>
  );
};

export default AddMedicine;
