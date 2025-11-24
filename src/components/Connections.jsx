import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../redux/connectionSlice";

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
      <h1 className="text-3xl font-bold mb-8">Connections</h1>

      {connections && connections.length > 0 ? (
        <div className="flex flex-col items-center gap-6 w-full">
          {connections
            .filter((c) => c && c._id)
            .map((connection) => (
              <div
                key={connection._id}
                className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition w-full max-w-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={
                      connection.photoUrl || "https://via.placeholder.com/80"
                    }
                    alt={connection.firstName}
                    className="w-20 h-20 rounded-full object-cover border"
                  />

                  <div>
                    <h2 className="text-xl font-semibold text-gray-500">
                      {connection.firstName} {connection.lastName}
                    </h2>
                    <p className="text-gray-500">{connection.age} yrs</p>
                    <p className="text-gray-600 line-clamp-2">
                      {connection.about}
                    </p>
                  </div>
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
