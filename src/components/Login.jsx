import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../constants";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const [openForm, setOpenForm] = useState(false); // ⭐ NEW

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );

      dispatch(addUser(res.data.data));
      navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("back.jpg")` }}
    >
      {/* ⭐ FIRST VIEW — Button Only */}
      {!openForm && (
        <button
          onClick={() => setOpenForm(true)}
          className="xl:px-11  px-11 bg-pink-800 xl:py-5 py-11 bg-black/80 text-white xl:text-xl text-5xl rounded-4xl shadow-xl hover:bg-black transition backdrop-blur-sm xl:mt-48  mt-96"
        >
          Create account
        </button>
      )}

      {/* ⭐ SECOND VIEW — Form Appears */}
      {openForm && (
        <div className="w-full max-w-sm bg-white/90 backdrop-blur-md shadow-2xl rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center text-black">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>

          {!isLoginForm && (
            <>
              <div className="mb-6">
                <label className="block mb-1 text-sm font-medium text-black">
                  First Name
                </label>
                <input
                  value={firstName}
                  type="text"
                  className="w-full px-3 py-2 border border-black rounded-lg bg-white text-black"
                  placeholder="Enter your First name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block mb-1 text-sm font-medium text-black">
                  Last Name
                </label>
                <input
                  value={lastName}
                  type="text"
                  className="w-full px-3 py-2 border border-black rounded-lg bg-white text-black"
                  placeholder="Enter your Last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-black">
              Email
            </label>
            <input
              value={emailId}
              type="email"
              className="w-full px-3 py-2 border border-black rounded-lg bg-white text-black"
              placeholder="Enter your email"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium text-black">
              {isLoginForm ? "Password" : "Create Password"}
            </label>
            <input
              value={password}
              type="password"
              className="w-full px-3 py-2 border border-black rounded-lg bg-white text-black"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {isLoginForm && (
              <p className="text-gray-700 text-sm mt-1 cursor-pointer hover:underline">
                Forgot your password?
              </p>
            )}
          </div>

          {/* Error */}
          <p className="text-red-500 text-center mb-2">{error}</p>

          {/* Button */}
          <button
            className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            onClick={isLoginForm ? handleLogin : handleSignUp}
          >
            {isLoginForm ? "Login" : "Sign Up"}
          </button>

          {/* Toggle */}
          <p className="text-center text-sm mt-4 text-black">
            {isLoginForm ? "Don't have an account?" : "Already registered?"}
            <span
              className="underline ml-1 cursor-pointer hover:text-gray-700"
              onClick={() => setIsLoginForm(!isLoginForm)}
            >
              {isLoginForm ? "Sign Up" : "Login Here"}
            </span>
          </p>

          {/* Back Button */}
          <p
            onClick={() => setOpenForm(false)}
            className="text-center mt-3 text-sm text-gray-700 underline cursor-pointer"
          >
            Go Back
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
