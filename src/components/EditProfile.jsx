import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((store) => store.user); 

  const [form, setForm] = useState({
    firstName: currentUser?.firstName || "",
    lastName: currentUser?.lastName || "",
    age: currentUser?.age || "",
    gender: currentUser?.gender || "",
    about: currentUser?.about || "",
    photoUrl: currentUser?.photoUrl || "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      setError("");
      const res = await axios.patch(BASE_URL + "/profile/edit", form, {
        withCredentials: true,
      });
      dispatch(addUser(res.data.data)); // update redux
      alert(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">

        {/* LEFT SIDE → LIVE PREVIEW */}
        <div className="w-full lg:w-1/2 flex justify-center items-start">
          <UserCard user={form} />
        </div>

        {/* RIGHT SIDE → EDIT FORM */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Edit Profile
          </h1>

          <div className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="input input-bordered w-full"
            />

            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="input input-bordered w-full"
            />

            <input
              type="number"
              placeholder="Age"
              name="age"
              value={form.age}
              onChange={handleChange}
              className="input input-bordered w-full"
            />

            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option disabled value="">
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <textarea
              name="about"
              placeholder="Write about yourself"
              value={form.about}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              rows="4"
            />

            <input
              type="text"
              placeholder="Profile Photo URL"
              name="photoUrl"
              value={form.photoUrl}
              onChange={handleChange}
              className="input input-bordered w-full"
            />

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <button
              onClick={handleSave}
              className="btn btn-primary w-full mt-2"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
