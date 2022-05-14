import React, { useState } from "react";

import {Link} from 'react-router-dom';

import getLoggedInUserId from "../utils/Authentication";

const Sidebar = ({visible}) => {

  const loggedInUser = getLoggedInUserId(); 


  return (
    <aside className={visible ? "main--sidebar active" : "main--sidebar"}>
      <div className="main--sidebar-wrapper w-full">
        <ul className="w-full">
          <li className="main--sidebar-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="main--sidebar-item">
            <Link to={`/profile/${loggedInUser}`}>Profile</Link>
          </li>
          <li className="main--sidebar-item">
            <Link to={"/"}>Log Out</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
