import React, { useState, useEffect } from "react";
import TimelineHeader from "../components/TimelineHeader";

import {
  HiPhotograph,
  HiOutlineVideoCamera,
  HiOutlineCalendar,
  HiOutlineAnnotation,
} from "react-icons/hi";




import TextModal from "../components/modals/TextModal";
import GoToTop from "../components/GoToTop";
import PostService from "../services/PostService";
import FlowItem from "../components/FlowItem";
import TimelineSidebar from "../components/TimelineSidebar";

const Timeline = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [posts, setPosts] = useState();

  const getAllData = () =>{

    PostService.getAll()
    .then((response) => {
      setPosts(response.data);
    })
    .catch((error) => console.log(error));

  };

  useEffect(() => {
    getAllData();
  }, []);

  const openTextModal = (_) => {
    setIsModalVisible(true);
  };

  const hideTextModal = (_) => {
    setIsModalVisible(false);
  };

  return (
    <section className="relative timeline bg-primary">
      <GoToTop />
      <TimelineHeader />
      <main className="timeline--grid container">
        <div className="timeline--flow">
          <div className="me--section flow-item">
            <div className="me--section-header flex items-center pb-4 mb-4">
              <div className="profile-photo mr-2"></div>
              <span className="text-lg font-bold">Create a Post</span>
            </div>
            <div className="post-type grid grid-cols-2 gap-2">
              <div onClick={openTextModal} className="post-type-item">
                <HiOutlineAnnotation size={24} />
                <span>Text</span>
              </div>
              <div className="post-type-item">
                <HiPhotograph size={24} />
                <span>Photo</span>
              </div>
              <div className="post-type-item">
                <HiOutlineVideoCamera size={24} />
                <span>Video</span>
              </div>
              <div className="post-type-item">
                <HiOutlineCalendar size={24} />
                <span>Event</span>
              </div>
            </div>
          </div>
          <div className="timeline--flow-container">

            {posts &&
              posts.map((elem) => (
                <FlowItem key={elem.postId} callback={getAllData} postData={elem}/>
              ))}
              {posts && posts.length == 0 ? <div className="no-post text-xl uppercase font-bold text-center mt-4">
              &#129301; There is no post!
              </div> : ""}
          </div>
        </div>
        <TimelineSidebar/>
      </main>
      
      <TextModal callback={getAllData} isVisible={isModalVisible} isHide={hideTextModal} />
    </section>
  );
};

export default Timeline;
