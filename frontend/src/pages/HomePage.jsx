import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white font-sans">
      <h1 className="text-3xl font-bold text-gray-700 mb-10 text-center">
        Welcome to Janajagriti Learning Platform
      </h1>
      <div className="flex flex-col gap-6">
        <button
          className="px-6 py-3 rounded-xl bg-yellow-400 text-gray-800 text-lg font-semibold shadow hover:scale-105 transition"
          onClick={() => navigate("/admin/login")}
        >
          👨‍💼 Admin Login
        </button>
        <button
          className="px-6 py-3 rounded-xl bg-green-400 text-white text-lg font-semibold shadow hover:scale-105 transition"
          onClick={() => navigate("/instructor/login")}
        >
          👩‍🏫 Instructor Login
        </button>
        <button
          className="px-6 py-3 rounded-xl bg-blue-500 text-white text-lg font-semibold shadow hover:scale-105 transition"
          onClick={() => navigate("/student/join")}
        >
          👧 Student Join Session
        </button>
      </div>
    </div>
  );
}

export default HomePage;
