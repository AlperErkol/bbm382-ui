import React from "react";

import getElapsedTime from "../utils/Time";

const TimelineSidebarProfile = ({ data }) => {
  return (
    <div className="timeline--sidebar-profile">
      <div className="flex me--section-header pb-2 mb-2">
        <div className="profile-photo mr-2"></div>
        <div className="flex flex-col">
          <div>
            <span className="mr-2 d-inherit">Hi, {data.firstName}.</span>
            <span className="user-type font-extrabold">{data.userType}</span>
          </div>
          <span>Member Since : {getElapsedTime(data.creationDate)}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span>User ID : {data.userId}</span>
        <span>E-Mail : {data.email}</span>
      </div>
    </div>
  );
};

export default TimelineSidebarProfile;
