import React from "react";

import getElapsedTime from "../utils/Time";
import FlowItemDropdownMenu from "../components/FlowItemDropdownMenu";

import {
  HiOutlineChatAlt,
  HiOutlineCursorClick,
} from "react-icons/hi";

import { FiSettings } from "react-icons/fi";
import {Dropdown} from 'antd';



const FlowItem = ({callback, postData}) => {

  

  return (
    <div key={postData.postId} className="flow-item">
      <div className="flow-item-header flex items-center justify-between pb-4 mb-4">
        <div className="flex">
          <div className="profile-photo mr-2"></div>
          <div className="information flex flex-col justify-between h-12">
            <span className="text-xs font-bold">Alper Erkol</span>
            <span className="text-xs font-bold">Software Engineer</span>
            <span className="text-xs font-bold">{postData.postType}</span>
          </div>
        </div>
        <div className="flex items-center">
          <Dropdown className="cursor-pointer" trigger={['click']} overlay={<FlowItemDropdownMenu callback={callback} postData={postData}/>}>
            <FiSettings size={16} />
          </Dropdown>
          <div className="w-1 h-1 bg-secondary rounded-full mx-3"></div>
          <span className="text-xs font-bold">
            {getElapsedTime(postData.creationDate)}
          </span>
        </div>
      </div>
      <div className="flow-item-body">
        <p className="text-sm font-bold">{postData.postContent}</p>
        <div className="numbers flex items-center mb-1">
          <div className="like-count flex items-center mr-3">
            <HiOutlineCursorClick />
            <span className="text-xs font-semibold">{`${postData.likes} like(s)`}</span>
          </div>
          <div className="w-1 h-1 bg-secondary rounded-full mr-3"></div>
          <div className="comment-count flex items-center">
            <HiOutlineChatAlt />
            <span className="text-xs font-semibold">{`${postData.commentList.length} comment(s)`}</span>
          </div>
        </div>
      </div>
      <div className="flow-item-footer my-4 flex">
        <div className="profile-photo-comment mr-2"></div>
        <input
          className="comment-input"
          placeholder="Search something"
          type="text"
          spellCheck={false}
        />
        <button className="comment-button uppercase font-bold">Comment</button>
      </div>
    </div>
  );
};

export default FlowItem;
