import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import HealthRecords from "../../pages/HealthRecords/HealthRecords";
import AddDoctor from "../../pages/addDoctor/AddDoctor";

const Dashboard = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4001/api/v1/user-role"
        );
        setRole(response.data.role);
      } catch (error) {
        toast.error("Error fetching user role", {
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

    fetchUserRole();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {role === "admin" ? (
        <AddDoctor />
      ) : role === "patient" ? (
        <HealthRecords />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
