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
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnection(res.data.data));
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  });
  return (
    <div>
      {connections.map((connection) => {
        return <h1>{connection.firstName}</h1>;
      })}
    </div>
  );
};

export default Connections;
