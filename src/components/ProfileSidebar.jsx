import React from "react";
import { Menu, Layout } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Profle from "../pages/Profile";

const { Content, Sider } = Layout;

const ProfileSidebar = () => {
  return (
    <section className="profile--menu">
      <Menu
        defaultOpenKeys={["1"]}
        defaultSelectedKeys={["1"]}
        
        mode="inline"
      >
        <div className="profile--menu-user">
          <div className="profile--menu-user-header my-8 flex items-center justify-center">
            <div className="w-28 h-28 bg-errorText rounded-full"></div>
          </div>
          <div className="profile--menu-user-body flex flex-col items-center">
            <p className="mb-6">Alper Erkol</p>
            <p>Software Engineer @Siemens</p>
          </div>
        </div>
        <Menu.Item key="1">
          <span>Overview</span>
          <Link to={"/profile/overview"} />
        </Menu.Item>
        <Menu.Item key="2">
          <span>Edit Profile</span>
          <Link to={"/"} />
        </Menu.Item>
        <Menu.Item key="3">
          <span>Change Password</span>
          <Link to={"/profile/change-password"} />
        </Menu.Item>
        <Menu.Item key="4">
          <span>Chat</span>
          <Link to={"/"} />
        </Menu.Item>

      </Menu>
    </section>
  );
};

export default ProfileSidebar;
