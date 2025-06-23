import React, { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const response = await axios.post('https://localhost:3000/instructor-api/login', {
        username,
        password,
      });
      alert(`✅ Logged in as ${response.data.user.username}`);
      // Here you can save the user data, token, or redirect.
    } catch (error) {
      if (error.response) {
        setErrorMsg(error.response.data.message || 'Invalid username or password');
      } else {
        setErrorMsg('Something went wrong. Try again later.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

        <button
          type="submit"
          className="w-full py-3 rounded bg-blue-600 text-white font-bold hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
