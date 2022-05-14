import React, {useState, useEffect} from "react";
import TimelineHeader from "../components/TimelineHeader";
import { Tabs } from "antd";
import EditProfile from "./EditProfile";
import { useParams } from "react-router-dom";

import getLoggedInUserId from "../utils/Authentication";
import UserService from "../services/UserService";
import ChangePassword from "../components/ChangePassword";

const { TabPane } = Tabs;

const NewProfile = () => {

  const [auth, setAuth] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  let { userId } = useParams();

  useEffect(() => {
    setLoading(true);
    const loggedInUser = getLoggedInUserId();

    if(loggedInUser == userId)
    {
      setAuth(true);
    }
    else
    {
      setAuth(false);
    }

    UserService.findByUserId(userId)
    .then(response => {
      setData(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
      setLoading(false);
    });

  }, [])
  





  return (
    <>
      <TimelineHeader />
      <section className="new-profile--page max-w-6xl mx-auto">
        <Tabs tabPosition="left">
          <TabPane tab="Overview" key="1">
            {data && <EditProfile data={data}/>}
          </TabPane>
          {auth && (<TabPane tab="Change Password" key="2">
            {data && <ChangePassword data={data}/>}
          </TabPane>)}
          <TabPane tab="Posts" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </section>
    </>
  );
};

export default NewProfile;
