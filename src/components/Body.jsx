import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import SplashScreen from "./SplashScreen";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const [loadingSplash, setLoadingSplash] = useState(true);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/login");
      }
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();

    // REMOVE SPLASH AFTER 3 SECONDS
    const timer = setTimeout(() => {
      setLoadingSplash(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // 👉 SHOW SPLASH SCREEN FIRST
  if (loadingSplash) {
    return <SplashScreen />;
  }

  // 👉 SHOW APP AFTER 3 SEC
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
