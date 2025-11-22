import axios from "axios";
import React from "react";
import { BASE_URL } from "../constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../redux/feedSlice";

const UserCard = ({ user }) => {
  const {_id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch()
  
  const handleSendRequest = async (status, userId) => {
    try {
       await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(userId))
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="card bg-base-300 w-96 shadow-sm rounded-xl overflow-hidden">
      <figure className="h-72 overflow-hidden">
        <img
          src={photoUrl}
          alt={`${firstName} ${lastName}`}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">
          {firstName} {lastName}
        </h2>

        {age && gender && (
          <p className="text-sm opacity-80">
            {age} • {gender}
          </p>
        )}

        <p className="mt-2 text-sm leading-5">{about}</p>

        <div className="card-actions justify-between mt-4">
          <button className="btn btn-primary btn-sm" onClick={()=> handleSendRequest("ignored",_id)}>Ignore</button>
          <button className="btn btn-secondary btn-sm" onClick={()=> handleSendRequest("interested",_id)}>Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
