import React from "react";
import ProfileSidebar from "../components/ProfileSidebar";

import EditProfile from "../pages/EditProfile";
import TimelineHeader from "../components/TimelineHeader";

const Profile = () => {
  return (
    <>
      <TimelineHeader />
      <section className="profile--page max-w-6xl mx-auto">
        <ProfileSidebar />
        <div className="w-full flex justify-center">
          <div className="w-2/3">
            <EditProfile />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
