import React, { useEffect, useState } from 'react'
import Post from '../post/Post';
import Share from '../share/Share';
import "./TimeLine.css";
// import { Posts } from "../../dummyData";
import axios from "axios";

export default function TimeLine({username}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/633e7f3646430e065a26f3a0");
      console.log(response);
      setPosts(response.data);
    }
    fetchPosts();
  }, [username]);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share></Share>
        {posts.map((post) => (
          <Post post={ post } key={ post._id }></Post>
        ))}
      </div>
    </div>
  )
}
