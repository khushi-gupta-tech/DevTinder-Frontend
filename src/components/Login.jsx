import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [emailId, setEmailId] = useState("simran1234@gmail.com");
  const [password, setPassword] = useState("Simran@123");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        emailId,
        password,
      },{withCredentials:true});
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-sm bg-white shadow-2xl rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center text-black">
          Login
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-black">
            Email
          </label>
          <input
            value={emailId}
            type="email"
            className="w-full px-3 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter your email"
            onChange={(e) => setEmailId(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium text-black">
            Password
          </label>
          <input
            value={password}
            type="password"
            className="w-full px-3 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-sm mt-4 text-black">
          Don't have an account?{" "}
          <a href="#" className="underline text-black hover:text-gray-700">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
