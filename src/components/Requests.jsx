import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../constants";
import { addRequest } from "../redux/requestSlice";
import { useDispatch, useSelector } from "react-redux";

const Requests = () => {
  const requests = useSelector((store) => store.request);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Requests</h1>

      {requests && requests.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((request) => (
            <div
              key={request._id}
              className="bg-white text-black rounded-xl p-5 shadow-lg border border-gray-300 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4">
                {/* Profile Image */}
                <img
                  src={
                    request.fromUserId.photoUrl ||
                    "https://via.placeholder.com/80?text=User"
                  }
                  alt="user"
                  className="w-16 h-16 rounded-full object-cover border border-black"
                />

                {/* User Info */}
                <div>
                  <h2 className="text-xl font-semibold">
                    {request.fromUserId.firstName}{" "}
                    {request.fromUserId.lastName}
                  </h2>
                  <p className="text-gray-700">Age: {request.fromUserId.age}</p>
                  <p className="text-gray-800">{request.fromUserId.about}</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-5">
                <button className="flex-1 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                  Accept
                </button>
                <button className="flex-1 py-2 border border-black text-black rounded-lg hover:bg-gray-200 transition">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-300 text-lg">No requests found.</p>
      )}
    </div>
  );
};

export default Requests;
