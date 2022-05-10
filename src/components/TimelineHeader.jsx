import React, { useState } from "react";

import { HiMenuAlt3, HiOutlineSearch } from "react-icons/hi";
import { MdOutlineNotificationsNone } from "react-icons/md";

import Logo from "../assets/images/logo.png";

import Sidebar from "./Sidebar";

import { Link } from "react-router-dom";
import Search from "../pages/Search";

const TimelineHeader = () => {
  const [visible, setVisible] = useState(false);

  const openSidebar = (_) => {
    setVisible(true);
  };

  const closeSidebar = (_) => {
    setVisible(false);
  };

  return (
    <header className="timeline--header h-16 w-full bg-primary-light">
      <nav className="max-w-6xl mx-auto h-full flex justify-between items-center">
        <div className="flex">
          <Link to="/">
            <img
              className="timeline--header-logo"
              src={Logo}
              alt="hacettepe-logo"
            />
          </Link>
          <Search />
        </div>
        <div className="nav--links flex">
          <MdOutlineNotificationsNone className="mr-2" size={24} />
          <HiMenuAlt3 onClick={openSidebar} size={24} />
        </div>
      </nav>
      <div
        onClick={closeSidebar}
        className={visible ? "overlay active" : "overlay"}
      ></div>
      <Sidebar visible={visible} />
    </header>
  );
};

export default TimelineHeader;
