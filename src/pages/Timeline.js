import React,{useState} from 'react'
import TimelineHeader from '../components/TimelineHeader'

import { HiPhotograph, HiOutlineVideoCamera, HiOutlineCalendar, HiOutlineChatAlt, HiOutlineCursorClick, HiOutlineAnnotation} from "react-icons/hi";
import TextModal from '../components/modals/TextModal';
import GoToTop from '../components/GoToTop';


const Timeline = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openTextModal = _ =>{
    setIsModalVisible(true);
    
  };

  const hideTextModal = _ =>{
    setIsModalVisible(false);
  }

  return (
    <section className="relative timeline bg-primary">
      <GoToTop/>
      <TimelineHeader/>
      <main className="timeline--grid container">
        <div className="timeline--flow">
          <div className="me--section flow-item">
              <div className="me--section-header flex items-center pb-4 mb-4">
                <div className="profile-photo mr-2"></div>
                <span className="text-lg font-bold">Create a Post</span>
              </div>
              <div className="post-type grid grid-cols-2 gap-2">
                <div onClick={openTextModal} className="post-type-item">
                  <HiOutlineAnnotation size={24}/>
                  <span>Text</span>
                </div>
                <div className="post-type-item">
                  <HiPhotograph size={24}/>
                  <span>Photo</span>
                </div>
                <div className="post-type-item">
                  <HiOutlineVideoCamera size={24}/>
                  <span>Video</span>
                </div>
                <div className="post-type-item">
                  <HiOutlineCalendar size={24}/>
                  <span>Event</span>
                </div>
              </div>
          </div>
          <div className="timeline--flow-container">
            <div className="flow-item">
              <div className="flow-item-header flex items-center justify-between pb-4 mb-4">
                <div className="flex">
                  <div className="profile-photo mr-2"></div>
                  <div className="information flex flex-col justify-between h-12">
                    <span className="text-xs font-bold">Alper Erkol</span>
                    <span className="text-xs font-bold">Software Engineer</span>
                    <span className="text-xs font-bold">Post</span>
                  </div>
                </div>
                <span className="text-xs font-bold">49 Minutes Ago</span>
              </div>
              <div className="flow-item-body">
                <p className="text-sm font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores sit dolore, ut nesciunt, esse deleniti quaerat molestias, accusantium veritatis quae non expedita ratione eveniet? Quas vel, consequuntur quos ducimus sed itaque nulla quasi amet harum, beatae eius autem? Consequuntur iusto eos id delectus aspernatur, laboriosam animi neque? Ex, iure!</p>
                <div className="numbers flex items-center mb-1">
                  <div className="like-count flex items-center mr-3">
                    <HiOutlineCursorClick/>
                    <span className="text-xs font-semibold">123 likes</span>
                  </div>
                  <div className="w-1 h-1 bg-secondary rounded-full mr-3"></div>
                  <div className="comment-count flex items-center">
                    <HiOutlineChatAlt/>
                    <span className="text-xs font-semibold">123 comments</span>
                  </div>
                </div>
              </div>
              <div className="flow-item-footer my-4 flex">
                <div className="profile-photo-comment mr-2"></div>
                <input className="comment-input" placeholder="Search something" type="text" spellCheck={false} />
                <button className="comment-button uppercase font-bold">Comment</button>
              </div>
            </div>
            <div className="flow-item"></div>
            <div className="flow-item"></div>
            <div className="flow-item"></div>
            <div className="flow-item"></div>
            <div className="flow-item"></div>
            <div className="flow-item"></div>
          </div>
        </div>
        <aside className="timeline--sidebar bg-primary-light"></aside>
      </main>
      <TextModal isVisible={isModalVisible} isHide={hideTextModal}/>
    </section>
  )
}

export default Timeline