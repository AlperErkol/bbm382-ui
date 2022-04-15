import React, { useState } from "react";
import EditTextModal from "../components/modals/EditTextModal";
import PostService from "../services/PostService";

import { Menu } from "antd";

const FlowItemDropdownMenu = ({callback, postData}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);


    const openEditTextModal = _ => {
        setIsModalVisible(true);
    }
    
    const hideEditTextModal = _ => {
        setIsModalVisible(false);
    }

    const deletePost = postId => {
        setLoading(true);
        PostService.deletePost(postId)
        .then(response => {
          setLoading(false);
          callback();
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
          callback();

        });
    };



  return (
    
      <Menu>
        <Menu.Item key="1" onClick={openEditTextModal}>
          <span className="font-bold uppercase text-xs">Edit Post</span>
        </Menu.Item>
        <Menu.Item key="2" danger onClick={()=>deletePost(postData.postId)}>
          <span className="font-bold uppercase text-xs">Delete Post</span>
        </Menu.Item>
        <EditTextModal callback={callback} data={postData} isVisible={isModalVisible} isHide={hideEditTextModal}/>
      </Menu>
    
  );
};

export default FlowItemDropdownMenu;
