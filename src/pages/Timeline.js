import React, { useState, useEffect } from "react";

import TimelineHeader from "../components/TimelineHeader";
import GoToTop from "../components/GoToTop";
import PostService from "../services/PostService";
import FlowItem from "../components/FlowItem";
import TimelineSidebar from "../components/TimelineSidebar";
import TextModal from "../components/modals/TextModal";
import PhotoModal from "../components/modals/PhotoModal";
import EventModal from "../components/modals/EventModal";
import AdvertisementModal from "../components/modals/AdvertisementModal";
import AnnouncementModal from "../components/modals/AnnouncementModal";

import imagePath from "../utils/ImagePath";

import {
  HiPhotograph,
  HiOutlineVideoCamera,
  HiOutlineCalendar,
  HiOutlineAnnotation,
  HiUsers,
} from "react-icons/hi";

import { AiFillNotification } from "react-icons/ai";
import UserService from "../services/UserService";
import getLoggedInUserId from "../utils/Authentication";

const Timeline = () => {
  const [isTextModalVisible, setIsTextModalVisible] = useState(false);
  const [isPhotoModalVisible, setIsPhotoModalVisible] = useState(false);
  const [isEventModalVisible, setIsEventModalVisible] = useState(false);
  const [isAdvertismentModalVisible, setIsAdvertismentModalVisible] =
    useState(false);
  const [isAnnouncementModalVisible, setIsAnnouncementModalVisible] =
    useState(false);

  const [posts, setPosts] = useState();
  const [user, setUser] = useState();

  const getAllData = () => {
    PostService.getAllPosts()
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  };

  const getLoggedIn = () => {
    UserService.findByUserId(getLoggedInUserId())
      .then((response) => {
        
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllData();
    getLoggedIn();
    console.log("123123");
  }, []);

  const openTextModal = (_) => {
    setIsTextModalVisible(true);
  };

  const hideTextModal = (_) => {
    setIsTextModalVisible(false);
  };

  const openPhotoModal = (_) => {
    setIsPhotoModalVisible(true);
  };

  const hidePhotoModal = (_) => {
    setIsPhotoModalVisible(false);
  };

  const openEventModal = (_) => {
    setIsEventModalVisible(true);
  };

  const hideEventModal = (_) => {
    setIsEventModalVisible(false);
  };

  const openAdvertisementModal = (_) => {
    setIsAdvertismentModalVisible(true);
  };

  const hideAdvertisementModal = (_) => {
    setIsAdvertismentModalVisible(false);
  };

  const openAnnouncementModal = (_) => {
    setIsAnnouncementModalVisible(true);
  };

  const hideAnnouncementModal = (_) => {
    setIsAnnouncementModalVisible(false);
  };

  return (
    <section className="relative timeline bg-primary">
      <GoToTop />
      <TimelineHeader />
      <main className="timeline--grid container">
        <div className="timeline--flow">
          <div className="me--section flow-item">
            <div className="me--section-header flex items-center pb-4 mb-4">
              <span className="text-lg font-bold">Create a Post</span>
            </div>
            <div className="post-type grid grid-cols-2 gap-2">
              <div onClick={openTextModal} className="post-type-item">
                <HiOutlineAnnotation size={24} />
                <span>Text</span>
              </div>
              <div onClick={openPhotoModal} className="post-type-item">
                <HiPhotograph size={24} />
                <span>Photo</span>
              </div>
              <div onClick={openPhotoModal} className="post-type-item">
                <HiOutlineVideoCamera size={24} />
                <span>Video</span>
              </div>
              <div onClick={openEventModal} className="post-type-item">
                <HiOutlineCalendar size={24} />
                <span>Event</span>
              </div>
              <div onClick={openAdvertisementModal} className="post-type-item">
                <HiUsers size={24} />
                <span>Internship & Scholarship & Job Advertisement</span>
              </div>
              <div onClick={openAnnouncementModal} className="post-type-item">
                <AiFillNotification size={24} />
                <span>Announcement & News</span>
              </div>
            </div>
          </div>
          <div className="timeline--flow-container">
            {posts &&
              posts.map((elem) => (
                <FlowItem
                  key={elem.postId}
                  callback={getAllData}
                  postData={elem}
                />
              ))}
            {posts && posts.length == 0 ? (
              <div className="no-post text-xl uppercase font-bold text-center mt-4">
                &#129301; There is no post!
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <TimelineSidebar />
      </main>

      <TextModal
        callback={getAllData}
        isVisible={isTextModalVisible}
        isHide={hideTextModal}
      />
      <PhotoModal
        callback={getAllData}
        isVisible={isPhotoModalVisible}
        isHide={hidePhotoModal}
      />
      <EventModal
        callback={getAllData}
        isVisible={isEventModalVisible}
        isHide={hideEventModal}
      />
      <AdvertisementModal
        callback={getAllData}
        isVisible={isAdvertismentModalVisible}
        isHide={hideAdvertisementModal}
      />
      <AnnouncementModal
        callback={getAllData}
        isVisible={isAnnouncementModalVisible}
        isHide={hideAnnouncementModal}
      />
    </section>
  );
};

export default Timeline;
