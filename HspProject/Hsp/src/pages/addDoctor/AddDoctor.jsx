import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddDoctor() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    gender: '',
    dob: '',
    nic: '',
    doctorDepartment: '',
    docAvatar: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      docAvatar: e.target.files[0],
    }));
  };

  const handleAddDoctor = async (e) => {
    e.preventDefault();
    try {
      console.log('Form data before submission:', formData);

      const formDataToSubmit = new FormData();
      for (const key in formData) {
        if (formData[key] instanceof File) {
          formDataToSubmit.append(key, formData[key]);
        } else {
          formDataToSubmit.append(key, formData[key].toString());
        }
      }

      console.log('FormData object:', formDataToSubmit);

      const response = await axios.post('http://localhost:4001/api/v1/user/doctor/addnew', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response:', response);

      if (response.data.success) {
        toast.success("Doctor added successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate('/admin/dashboard');
      } else {
        throw new Error(response.data.message || "Error adding doctor");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.response?.data?.message || "Error adding doctor", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 mt-0">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Add New Doctor</h2>
          <form onSubmit={handleAddDoctor} className="mt-8 space-y-6">
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="text-base font-medium text-gray-900">
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="text-base font-medium text-gray-900">
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phoneNumber" className="text-base font-medium text-gray-900">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="text-base font-medium text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="gender" className="text-base font-medium text-gray-900">
                    Gender
                  </label>
                  <div className="mt-2">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="dob" className="text-base font-medium text-gray-900">
                    Date of Birth
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      type="date"
                      placeholder="Date of Birth"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="nic" className="text-base font-medium text-gray-900">
                  NIC
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="text"
                    placeholder="NIC"
                    name="nic"
                    value={formData.nic}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="doctorDepartment" className="text-base font-medium text-gray-900">
                  Doctor Department
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="text"
                    placeholder="Doctor Department"
                    name="doctorDepartment"
                    value={formData.doctorDepartment}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="docAvatar" className="text-base font-medium text-gray-900">
                  Upload Avatar
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="file"
                    name="docAvatar"
                    accept=".png,.jpg,.jpeg,.webp"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-indigo-500"
                >
                  Add Doctor
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
