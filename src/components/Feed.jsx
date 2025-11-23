import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../redux/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 min-h-screen ">
      {feed?.length > 0 ? (
        <UserCard key={feed._id} user={feed[0]} showActions={true} />
      ) : (
        <p>No More Feed Available</p>
      )}
    </div>
  );
};

export default Feed;
