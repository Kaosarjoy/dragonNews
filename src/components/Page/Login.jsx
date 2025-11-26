import React, { useState } from "react";
import { NavLink } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-xl shadow-xl w-96"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition mb-4"
        >
          Login
        </button>

        <div className="text-center mb-4">
          <p className="mb-2 font-semibold text-gray-600">Or login with</p>
          <div className="flex justify-between gap-2">
            <button className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
              Google
            </button>
            <button className="flex-1 bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition">
              GitHub
            </button>
            <button className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Other
            </button>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Or create an account /<NavLink to='/auth/register' className='text-blue-500'> Register</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
