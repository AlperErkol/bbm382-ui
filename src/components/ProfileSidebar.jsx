import React, {useEffect, useState} from "react";
import { Menu, Layout } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import getLoggedInUser from "../utils/Authentication";
import UserService from "../services/UserService";

const { Content, Sider } = Layout;

const ProfileSidebar = () => {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    const userId = getLoggedInUser();
    if(userId !== null){
      UserService.findByUserId(userId)
      .then(response => {
        console.log(response);
        setData(response.data);
        setLoading(false);
      })
      .catch(error =>{
        
        console.error(error);
        setLoading(false);
      });

    }

  }, [])
  




  return (
    <section className="profile--menu">
      {data && <Menu
        defaultOpenKeys={["1"]}
        defaultSelectedKeys={["1"]}
        
        mode="inline"
      >
        <div className="profile--menu-user">
          <div className="profile--menu-user-header my-8 flex items-center justify-center">
            <div className="w-28 h-28 bg-errorText rounded-full"></div>
          </div>
          <div className="profile--menu-user-body flex flex-col items-center">
            <p className="mb-6">{data.firstName +" "+data.lastName}</p>
            <p className="font-bold">{data.userType}</p>
          </div>
        </div>
        <Menu.Item key="1">
          <span>Overview</span>
          <Link to={"/profile/overview"} />
        </Menu.Item>
        <Menu.Item key="2">
          <span>Change Password</span>
          <Link to={"/profile/change-password"} />
        </Menu.Item>
        <Menu.Item key="3">
          <span>Chat</span>
          <Link to={"/"} />
        </Menu.Item>
      </Menu>}
    </section>
  );
};

export default ProfileSidebar;
