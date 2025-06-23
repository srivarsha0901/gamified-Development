import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    setErrorMsg("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/instructor/login",
        {
          username,
          password,
        }
      );
      alert(`✅ Logged in as ${response.data.user.username}`);
      // Add further navigation or state handling
    } catch (error) {
      if (error.response) {
        setErrorMsg(
          error.response.data.message || "Invalid username or password"
        );
      } else {
        setErrorMsg("Something went wrong. Try again later.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
            👩‍🏫
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-3">
            Instructor Login
          </h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {errorMsg && (
            <p className="text-red-500 text-sm text-center">{errorMsg}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center text-gray-500 text-sm mt-4">
          New user?{" "}
          <Link
            to="/instructor/register"
            className="text-blue-600 font-bold hover:underline"
          >
            Register here
          </Link>
        </div>
      </div>
  );
}
