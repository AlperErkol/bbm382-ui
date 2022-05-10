import React from "react";
import TimelineHeader from "../components/TimelineHeader";
import { Tabs, Radio, Space } from "antd";
import EditProfile from "./EditProfile";

const { TabPane } = Tabs;

const NewProfile = () => {
  return (
    <>
      <TimelineHeader />
      <section className="new-profile--page max-w-6xl mx-auto">
        <Tabs tabPosition="left">
          <TabPane tab="Overview" key="1">
            <EditProfile/>
          </TabPane>
          <TabPane tab="Change Password" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Posts" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </section>
    </>
  );
};

export default NewProfile;
