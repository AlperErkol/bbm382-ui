import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PostService from "../services/PostService";
import FlowItem from "./FlowItem";
import Spinner from "./Spinner";
import TimelineHeader from "./TimelineHeader";

const PostDetail = ({ incomingData }) => {
  const [postData, setPostData] = useState();
  const [loading, setLoading] = useState(false);

  let { postId } = useParams();

  useEffect(() => {
    setLoading(true);
    PostService.findPostByPostId(postId)
      .then((response) => {
        console.log(response.data);
        setPostData(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
    
  }, []);

  return (
    <section className="post--detail bg-primary h-screen">
      <TimelineHeader />
      <div className="post--detail-wrapper max-w-2xl mx-auto mt-16 rounded-lg bg-primary-light">
        {loading && <Spinner/>}
        {postData && <FlowItem postData={postData}/>}
      </div>
    </section>
  );
};

export default PostDetail;
