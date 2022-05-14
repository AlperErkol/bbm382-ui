import React, { useState, useEffect } from "react";
import getElapsedTime from "../utils/Time";
import UserService from "../services/UserService";
import imagePath from "../utils/ImagePath";
const CommentStory = ({ data }) => {
  const [ownerData, setOwnerData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    UserService.findByUserId(data.owner)
      .then((response) => {
        setOwnerData(response.data);
        setLoading(false);
      })
      .catch();
  }, []);

  return (
    <li className="comments-item flex">
      <div className="profile-photo-comment mr-2">
        {ownerData && ownerData.userImage !== null ? (
          <img
            className="user-image rounded-full"
            src={imagePath + "/" + ownerData.userImage}
          />
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex flex-col bg-primary w-full p-1">
        <div className="flex justify-between">
          <span className="font-bold">
            {ownerData && ownerData.firstName + " " + ownerData.lastName}
          </span>
          <span className="text-muted text-xs">
            {getElapsedTime(data.creationDate)}
          </span>
        </div>
        <p className="font-semibold comment-content">{data.commentContent}</p>
      </div>
    </li>
  );
};

export default CommentStory;
