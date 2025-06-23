import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InstructorRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    classAssigned: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post(
        "http://localhost:5000/api/instructor/register",
        formData
      );
      alert("Registration successful. Please log in.");
      navigate("/instructor/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Instructor Registration</h2>
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="classAssigned"
          placeholder="Class Assigned (e.g., Grade 3)"
          value={formData.classAssigned}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded"
        >
          Register
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default InstructorRegister;
