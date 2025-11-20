import React from 'react'
import axios from 'axios';
import {BASE_URL} from "../constants";

const Feed = () => {
  const getFeed = async()=>{
    try{
      const res = await axios.get(BASE_URL+"/feed");
     
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>Feed</div>
  )
}

export default Feed