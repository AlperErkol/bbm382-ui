import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const PostDetail = ({ incomingData }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  let {postId} = useParams();
  


  useEffect(() => {
      setLoading(true);
    
  }, [])
  

  return <div>PostDetail</div>;
};

export default PostDetail;
