import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../redux/connectionSlice";
import { Link } from "react-router";

const Connections = () => {
  const connections = useSelector((store) => store.connection);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });

      if (res.data?.data) {
        dispatch(addConnection(res.data.data));
      }
    } catch (err) {
      console.log("Error fetching connections:", err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="p-6 min-h-screen flex items-center flex-col">
      <h1 className="text-4xl font-bold mb-10 text-white tracking-wide">
        Connections
      </h1>

      {connections && connections.length > 0 ? (
        <div className="flex flex-col items-center gap-6 w-full">
          {connections
            .filter((c) => c && c._id)
            .map((connection) => (
              <div
                key={connection._id}
                className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all w-full max-w-lg"
              >
                <div className="flex justify-between items-center">
                  {/* Profile Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        connection.photoUrl || "https://via.placeholder.com/80"
                      }
                      alt={connection.firstName}
                      className="w-20 h-20 rounded-full object-cover border"
                    />

                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {connection.firstName} {connection.lastName}
                      </h2>
                      <p className="text-gray-500">{connection.age} yrs</p>
                      <p className="text-gray-600 line-clamp-2 max-w-xs">
                        {connection.about}
                      </p>
                    </div>
                  </div>

                  {/* Chat Button */}
                  <Link to={"/chat/" + connection._id}>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                      Chat
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg">No connections found.</p>
      )}
    </div>
  );
};

export default Connections;
